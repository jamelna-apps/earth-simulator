const PEXELS_API_KEY = process.env.PEXELS_API_KEY || ''

export interface PexelsPhoto {
  url: string
  photographer: string
  photographerUrl: string
}

export async function fetchEvidencePhoto(query: string): Promise<PexelsPhoto | null> {
  if (!PEXELS_API_KEY || !query) return null

  try {
    const res = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=5&orientation=landscape`,
      {
        headers: { Authorization: PEXELS_API_KEY },
        next: { revalidate: 86400 },
      }
    )

    if (!res.ok) return null

    const data = await res.json()
    if (!data.photos?.length) return null

    const index = simpleHash(query) % data.photos.length
    const photo = data.photos[index]

    return {
      url: photo.src.landscape || photo.src.large,
      photographer: photo.photographer,
      photographerUrl: photo.photographer_url,
    }
  } catch {
    return null
  }
}

function simpleHash(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i)
    hash |= 0
  }
  return Math.abs(hash)
}
