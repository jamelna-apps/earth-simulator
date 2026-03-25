import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { reportsBySlug, reportSlugs } from '@/data/reports'
import { fetchEvidencePhoto } from '@/lib/pexels'
import DossierHeader from '@/components/reports/DossierHeader'
import DossierSectionComponent from '@/components/reports/DossierSection'

export function generateStaticParams() {
  return reportSlugs.map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const report = reportsBySlug[slug]
  if (!report) return {}
  return {
    title: `${report.title} — TERRA-01`,
    description: report.summary,
  }
}

export default async function ReportPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const report = reportsBySlug[slug]
  if (!report) notFound()

  // Fetch all evidence photos in parallel at build time
  const evidenceSections = report.sections.filter(s => s.type === 'evidence' && s.image)
  const photos = await Promise.all(
    evidenceSections.map(s => fetchEvidencePhoto(s.image!.query))
  )
  const photoMap = new Map(
    evidenceSections.map((s, i) => [s.image!.query, photos[i]])
  )

  let figureCount = 0

  return (
    <div className="min-h-screen">
      <DossierHeader report={report} />

      <main className="max-w-3xl mx-auto px-4 py-8">
        {report.sections.map((section, i) => {
          let figNum = 0
          let photo = null
          if (section.type === 'evidence' && section.image) {
            figureCount++
            figNum = figureCount
            photo = photoMap.get(section.image.query) || null
          }
          return (
            <DossierSectionComponent
              key={i}
              section={section}
              photo={photo}
              figureNumber={figNum}
            />
          )
        })}

        <div className="border border-border bg-bg-panel p-6 text-center mt-12">
          <p className="text-text-dim text-sm font-mono">— END OF DOSSIER —</p>
          <p className="text-text-dim/40 text-xs font-mono mt-2">
            Document Ref: {report.documentRef} | Classification: {report.classification}
          </p>
        </div>
      </main>

      <footer className="border-t border-border bg-bg-panel mt-12">
        <div className="max-w-3xl mx-auto px-4 py-6 text-center">
          <div className="text-text-dim text-xs tracking-wider font-mono">
            TERRA-01 DOSSIER ARCHIVE — {report.classification} // COSMIC // NOFORN
          </div>
        </div>
      </footer>
    </div>
  )
}
