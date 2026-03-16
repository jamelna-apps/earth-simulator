/**
 * Generates an ASCII world map from Natural Earth vector data.
 * Uses equirectangular projection with ray-casting point-in-polygon test.
 *
 * Usage: node scripts/generate-ascii-map.mjs
 */
import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import * as topojson from 'topojson-client'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Load world-atlas 50m countries TopoJSON (individual country polygons avoid antimeridian wrapping)
const worldPath = resolve(__dirname, '../node_modules/world-atlas/countries-50m.json')
const world = JSON.parse(readFileSync(worldPath, 'utf-8'))

// Convert TopoJSON → GeoJSON (merge all countries into land features)
const land = topojson.feature(world, world.objects.countries)

// Grid dimensions — wide to compensate for tall monospace chars (~1:2 aspect ratio)
const COLS = 140
const ROWS = 36

// Equirectangular projection bounds
const LON_MIN = -170
const LON_MAX = 180
const LAT_MAX = 80   // top of map
const LAT_MIN = -60  // bottom of map

function lonToCol(lon) {
  return Math.floor(((lon - LON_MIN) / (LON_MAX - LON_MIN)) * COLS)
}

function latToRow(lat) {
  return Math.floor(((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * ROWS)
}

// Ray-casting point-in-polygon test
function pointInPolygon(x, y, ring) {
  let inside = false
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const xi = ring[i][0], yi = ring[i][1]
    const xj = ring[j][0], yj = ring[j][1]
    const intersect = ((yi > y) !== (yj > y)) &&
      (x < (xj - xi) * (y - yi) / (yj - yi) + xi)
    if (intersect) inside = !inside
  }
  return inside
}

// Collect all polygons (exterior + holes) from the GeoJSON
// Skip Antarctica (id 010) and filter polygons that span full longitude (antimeridian artifacts)
const polygons = []
function extractPolygons(geom) {
  if (geom.type === 'Polygon') {
    polygons.push(geom.coordinates)
  } else if (geom.type === 'MultiPolygon') {
    for (const poly of geom.coordinates) {
      polygons.push(poly)
    }
  } else if (geom.type === 'GeometryCollection') {
    for (const g of geom.geometries) extractPolygons(g)
  }
}
for (const feature of land.features || [land]) {
  // Skip Antarctica
  if (feature.id === '010' || feature.properties?.name === 'Antarctica') continue
  extractPolygons(feature.geometry || feature)
}

// Filter out polygons whose exterior ring spans the full longitude range (antimeridian wrapping artifacts)
const cleanPolygons = polygons.filter(rings => {
  const lons = rings[0].map(p => p[0])
  const lonRange = Math.max(...lons) - Math.min(...lons)
  return lonRange < 350 // Real polygons shouldn't span nearly 360°
})

// Check if a lon/lat point is on land
function isLand(lon, lat) {
  for (const rings of cleanPolygons) {
    const exterior = rings[0]
    if (pointInPolygon(lon, lat, exterior)) {
      // Check holes
      let inHole = false
      for (let h = 1; h < rings.length; h++) {
        if (pointInPolygon(lon, lat, rings[h])) { inHole = true; break }
      }
      if (!inHole) return true
    }
  }
  return false
}

// Generate the grid with 3x3 sub-pixel sampling for smoother edges
const rawGrid = []
for (let row = 0; row < ROWS; row++) {
  const rowData = []
  for (let col = 0; col < COLS; col++) {
    let hits = 0
    // 3x3 sampling within each cell
    for (let sy = 0; sy < 3; sy++) {
      for (let sx = 0; sx < 3; sx++) {
        const lon = LON_MIN + ((col + (sx + 0.5) / 3) / COLS) * (LON_MAX - LON_MIN)
        const lat = LAT_MAX - ((row + (sy + 0.5) / 3) / ROWS) * (LAT_MAX - LAT_MIN)
        if (isLand(lon, lat)) hits++
      }
    }
    // Require at least 2 of 9 samples for land (filters tiny islands)
    rowData.push(hits >= 2 ? 1 : 0)
  }
  rawGrid.push(rowData)
}

// Remove isolated single pixels (noise reduction)
// A pixel is "isolated" if it has 0 land neighbors (8-connected)
function countNeighbors(r, c) {
  let n = 0
  for (let dr = -1; dr <= 1; dr++) {
    for (let dc = -1; dc <= 1; dc++) {
      if (dr === 0 && dc === 0) continue
      const nr = r + dr, nc = c + dc
      if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && rawGrid[nr][nc]) n++
    }
  }
  return n
}

const grid = rawGrid.map((rowData, r) =>
  rowData.map((val, c) => {
    // Remove isolated pixels with 0 neighbors
    if (val && countNeighbors(r, c) === 0) return '·'
    return val ? '█' : '·'
  }).join('')
)

// Output as JavaScript array
console.log('const MAP_DATA = [')
for (let i = 0; i < grid.length; i++) {
  const lat = LAT_MAX - ((i + 0.5) / ROWS) * (LAT_MAX - LAT_MIN)
  console.log(`  '${grid[i]}',  // row ${i}  ${lat.toFixed(0)}°${lat >= 0 ? 'N' : 'S'}`)
}
console.log(']')

// Also output overlay coordinate helper
console.log('\n// Coordinate helper: overlay positions')
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
  const col = lonToCol(loc.lon)
  const row = latToRow(loc.lat)
  const char = grid[row]?.[col] || '?'
  console.log(`// ${loc.name}: row=${row}, col=${col}  (${char === '█' ? 'LAND' : 'OCEAN'})`)
}
