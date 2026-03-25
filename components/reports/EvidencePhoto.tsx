import Image from 'next/image'
import type { PexelsPhoto } from '@/lib/pexels'

interface EvidencePhotoProps {
  photo: PexelsPhoto
  alt: string
  caption: string
  figureNumber: number
}

export default function EvidencePhoto({ photo, alt, caption, figureNumber }: EvidencePhotoProps) {
  return (
    <figure className="my-6 border border-border bg-bg-panel p-3">
      <div className="relative aspect-[16/9] overflow-hidden border border-border/50">
        <Image
          src={photo.url}
          alt={alt}
          fill
          className="object-cover grayscale-[0.6] contrast-[1.1] brightness-[0.9]"
          sizes="(max-width: 768px) 100vw, 720px"
        />
      </div>
      <figcaption className="mt-2 text-xs font-mono text-text-dim">
        <span className="text-amber">FIG. {figureNumber}</span> — {caption}
      </figcaption>
      <div className="mt-1 text-[10px] font-mono text-text-dim/40">
        Photo: <a href={photo.photographerUrl} target="_blank" rel="noopener noreferrer" className="hover:text-text-dim/60">{photo.photographer}</a> / Pexels
      </div>
    </figure>
  )
}
