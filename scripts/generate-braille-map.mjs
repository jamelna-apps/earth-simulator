/**
 * Generates a braille-character world map from Natural Earth 50m vector data.
 * Each braille character encodes a 2x4 pixel grid, giving 160x100 effective
 * resolution in an 80x25 character output.
 *
 * Usage: node scripts/generate-braille-map.mjs
 */
import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import * as topojson from 'topojson-client'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Load world-atlas 50m countries TopoJSON
const worldPath = resolve(__dirname, '../node_modules/world-atlas/countries-50m.json')
const world = JSON.parse(readFileSync(worldPath, 'utf-8'))
const land = topojson.feature(world, world.objects.countries)

// Collect polygons, skip Antarctica
const polygons = []
function extractPolygons(geom) {
  if (geom.type === 'Polygon') polygons.push(geom.coordinates)
  else if (geom.type === 'MultiPolygon') {
    for (const poly of geom.coordinates) polygons.push(poly)
  }
}
for (const feature of land.features) {
  if (feature.id === '010') continue // Skip Antarctica
  extractPolygons(feature.geometry)
}

// Handle antimeridian-crossing polygons by splitting them
// A polygon "crosses" if it has edges jumping from lon > 160 to lon < -160 (or vice versa)
function crossesAntimeridian(ring) {
  for (let i = 0; i < ring.length - 1; i++) {
    const d = Math.abs(ring[i][0] - ring[i + 1][0])
    if (d > 180) return true
  }
  return false
}

// For antimeridian polygons, we duplicate: one shifted +360 for the western copy,
// and clip the point-in-polygon test to our map bounds
function shiftRing(ring, offset) {
  return ring.map(([lon, lat]) => [lon + offset, lat])
}

const cleanPolygons = []
for (const rings of polygons) {
  if (crossesAntimeridian(rings[0])) {
    // Create two copies: one where negative lons are shifted +360, one where positive lons are shifted -360
    const eastRings = rings.map(r => shiftRing(r, 0).map(([lon, lat]) => [lon < 0 ? lon + 360 : lon, lat]))
    const westRings = rings.map(r => shiftRing(r, 0).map(([lon, lat]) => [lon > 0 ? lon - 360 : lon, lat]))
    cleanPolygons.push(eastRings)
    cleanPolygons.push(westRings)
  } else {
    cleanPolygons.push(rings)
  }
}

// Ray-casting point-in-polygon
function pointInPolygon(x, y, ring) {
  let inside = false
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const xi = ring[i][0], yi = ring[i][1]
    const xj = ring[j][0], yj = ring[j][1]
    if (((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi))
      inside = !inside
  }
  return inside
}

function isLand(lon, lat) {
  for (const rings of cleanPolygons) {
    if (pointInPolygon(lon, lat, rings[0])) {
      let inHole = false
      for (let h = 1; h < rings.length; h++) {
        if (pointInPolygon(lon, lat, rings[h])) { inHole = true; break }
      }
      if (!inHole) return true
    }
  }
  return false
}

// Output dimensions (in characters)
const CHAR_COLS = 78
const CHAR_ROWS = 26

// Pixel dimensions (braille: 2 wide x 4 tall per char)
const PX_W = CHAR_COLS * 2  // 156
const PX_H = CHAR_ROWS * 4  // 104

// Projection bounds
const LON_MIN = -170
const LON_MAX = 180
const LAT_MAX = 85
const LAT_MIN = -60

// Braille dot positions within a 2x4 cell
// Col 0: bits 0x01, 0x02, 0x04, 0x40
// Col 1: bits 0x08, 0x10, 0x20, 0x80
const BRAILLE_MAP = [
  [0x01, 0x08],
  [0x02, 0x10],
  [0x04, 0x20],
  [0x40, 0x80],
]

console.error(`Generating ${PX_W}x${PX_H} pixel map → ${CHAR_COLS}x${CHAR_ROWS} braille characters...`)

// Build pixel buffer
const pixels = new Uint8Array(PX_W * PX_H)
for (let py = 0; py < PX_H; py++) {
  if (py % 10 === 0) console.error(`  Row ${py}/${PX_H}...`)
  for (let px = 0; px < PX_W; px++) {
    const lon = LON_MIN + ((px + 0.5) / PX_W) * (LON_MAX - LON_MIN)
    const lat = LAT_MAX - ((py + 0.5) / PX_H) * (LAT_MAX - LAT_MIN)
    if (isLand(lon, lat)) {
      pixels[py * PX_W + px] = 1
    }
  }
}

// Encode pixels to braille characters
const rows = []
for (let cr = 0; cr < CHAR_ROWS; cr++) {
  let line = ''
  for (let cc = 0; cc < CHAR_COLS; cc++) {
    let code = 0
    for (let dy = 0; dy < 4; dy++) {
      for (let dx = 0; dx < 2; dx++) {
        const px = cc * 2 + dx
        const py = cr * 4 + dy
        if (px < PX_W && py < PX_H && pixels[py * PX_W + px]) {
          code |= BRAILLE_MAP[dy][dx]
        }
      }
    }
    line += String.fromCharCode(0x2800 + code)
  }
  rows.push(line)
}

// Output
console.log('const MAP_ROWS = [')
for (let i = 0; i < rows.length; i++) {
  const lat = LAT_MAX - ((i * 4 + 2) / PX_H) * (LAT_MAX - LAT_MIN)
  console.log(`  '${rows[i]}',  // row ${i}  ~${lat.toFixed(0)}°`)
}
console.log(']')

console.log(`\nconst MAP_WIDTH = ${CHAR_COLS}`)

// Coordinate helper
function lonToPixel(lon) { return Math.floor(((lon - LON_MIN) / (LON_MAX - LON_MIN)) * PX_W) }
function latToPixel(lat) { return Math.floor(((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * PX_H) }
function pixelToChar(px, py) { return { col: Math.floor(px / 2), row: Math.floor(py / 4) } }

console.log('\n// Overlay positions (lon/lat → character coordinates)')
const locations = [
  { name: 'Ukraine', lon: 31, lat: 49 },
  { name: 'Middle East', lon: 40, lat: 33 },
  { name: 'Sudan', lon: 30, lat: 15 },
  { name: 'Sahel', lon: 2, lat: 14 },
  { name: 'Myanmar', lon: 96, lat: 20 },
  { name: 'India', lon: 78, lat: 22 },
  { name: 'China', lon: 110, lat: 35 },
  { name: 'SE Asia', lon: 105, lat: 15 },
  { name: 'Nigeria', lon: 3, lat: 9 },
  { name: 'Bangladesh', lon: 90, lat: 24 },
  { name: 'Indonesia', lon: 115, lat: -5 },
  { name: 'Amazon', lon: -60, lat: -3 },
  { name: 'Arctic', lon: 0, lat: 75 },
  { name: 'Great Barrier Reef', lon: 150, lat: -18 },
  { name: 'Siberian Permafrost', lon: 100, lat: 65 },
  { name: 'Congo Basin', lon: 25, lat: 0 },
]

for (const loc of locations) {
  const px = lonToPixel(loc.lon)
  const py = latToPixel(loc.lat)
  const { col, row } = pixelToChar(px, py)
  const onLand = pixels[py * PX_W + px] ? 'LAND' : 'OCEAN'
  console.log(`// ${loc.name}: row=${row}, col=${col}  (${onLand})`)
}
