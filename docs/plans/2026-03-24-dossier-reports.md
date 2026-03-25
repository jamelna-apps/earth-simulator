# Dossier Reports Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add 5 declassified dossier report pages accessible from clickable log entries on the `/logs` page.

**Architecture:** Static data files define each report's content and Pexels image queries. A dynamic Next.js route renders the dossier page. The Pexels API is called at build time (server component). The `OperatorLog` component gets a small enhancement to show clickable `[DOSSIER AVAILABLE]` tags.

**Tech Stack:** Next.js 16 (App Router, Server Components), Tailwind 4, Pexels API, existing component library (RedactedBlock, ClassificationStamp, OperatorLog)

---

### Task 1: Report Types & Registry

**Files:**
- Create: `data/reports/types.ts`
- Create: `data/reports/index.ts`

**Step 1: Create the report types**

Create `data/reports/types.ts`:

```ts
import type { Classification } from '../types'

export interface EvidenceImage {
  query: string
  alt: string
  caption: string
}

export interface DossierSection {
  type: 'narrative' | 'evidence' | 'redacted' | 'testimony' | 'findings' | 'addendum'
  heading?: string
  content: string
  classification?: Classification
  image?: EvidenceImage
  operator?: string
  timestamp?: string
}

export interface DossierReport {
  slug: string
  title: string
  classification: Classification
  documentRef: string
  cycle: string
  era: string
  eraId: string
  summary: string
  sections: DossierSection[]
}
```

**Step 2: Create the report registry**

Create `data/reports/index.ts`:

```ts
import type { DossierReport } from './types'
import { theiaImpact } from './theia-impact'
import { theGreatDying } from './the-great-dying'
import { projectAtlantis } from './project-atlantis'
import { surveyTeam } from './survey-team'
import { wowSignal } from './wow-signal'

export const reports: DossierReport[] = [
  theiaImpact,
  theGreatDying,
  projectAtlantis,
  surveyTeam,
  wowSignal,
]

export const reportsBySlug: Record<string, DossierReport> = Object.fromEntries(
  reports.map(r => [r.slug, r])
)

export const reportSlugs: string[] = reports.map(r => r.slug)
```

**Step 3: Commit**

```bash
git add data/reports/types.ts data/reports/index.ts
git commit -m "feat: add dossier report types and registry"
```

---

### Task 2: Pexels Image Utility

**Files:**
- Create: `lib/pexels.ts`
- Modify: `.env.local` — add `PEXELS_API_KEY` (should already exist from fakenews project, user may need to copy it)

**Step 1: Create the Pexels utility**

Create `lib/pexels.ts`:

```ts
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
```

**Step 2: Add PEXELS_API_KEY to `.env.local`**

Check if `PEXELS_API_KEY` already exists. If not, the user needs to add it. The fakenews project uses the same key — check its `.env.local` or Vercel env vars.

**Step 3: Add `images.pexels.com` to next.config.ts**

Add the `images` config to allow Pexels domains for `next/image`:

```ts
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.pexels.com' },
    ],
  },
  // ... existing headers()
}
```

**Step 4: Commit**

```bash
git add lib/pexels.ts next.config.ts
git commit -m "feat: add Pexels image utility for dossier evidence photos"
```

---

### Task 3: Report Data — Theia Impact

**Files:**
- Create: `data/reports/theia-impact.ts`

**Step 1: Write the report data**

Create `data/reports/theia-impact.ts` with the full `DossierReport` object. Content guidance:

- **slug:** `'theia-impact'`
- **title:** `'THEIA IMPACT — INCIDENT REPORT'`
- **classification:** `'TOP SECRET'`
- **documentRef:** `'DOC-████-0031'`
- **cycle:** `'Cycle 0.03×10⁹'`
- **era:** `'SYSTEM INITIALIZATION'`
- **eraId:** `'initialization'`
- **summary:** A brief declassified overview of the Theia collision, the accidental moon creation, and the operator commendation.

**Sections (in order):**
1. `narrative` — "INCIDENT OVERVIEW": The scheduled accretion was proceeding normally until an unplanned collision with protoplanetary body Theia.
2. `evidence` — image query `"asteroid impact space"`, caption `"FIG. 1 — Reconstructed render of Theia approach vector, T-72hrs"`. Visual of a massive cosmic collision.
3. `narrative` — "ROOT CAUSE ANALYSIS": The orbital resonance calculation used a deprecated library (v2.3.1 instead of v2.4.0). The delta-v error compounded over 30M years.
4. `testimony` — Operator ██████-1's account of watching it happen in real-time. Helpless. Filed a ticket. Ticket was auto-closed as "working as intended."
5. `evidence` — image query `"molten lava glow"`, caption `"FIG. 2 — Surface conditions post-impact, T+48hrs. Temperature: 4,500°C"`.
6. `findings` — Numbered conclusions: (1) deprecated library, (2) no collision detection system, (3) outcome actually beneficial — moon stabilizes tilt, creates tides, (4) recommend keeping the accident.
7. `redacted` — A classified addendum about what the collision *actually* revealed about the simulation's render engine — the impact briefly exposed wireframe geometry at the collision boundary.
8. `addendum` — Committee's final note: "We are calling this a feature. Update the documentation."

**Step 2: Commit**

```bash
git add data/reports/theia-impact.ts
git commit -m "feat: add Theia Impact dossier report data"
```

---

### Task 4: Report Data — The Great Dying

**Files:**
- Create: `data/reports/the-great-dying.ts`

**Step 1: Write the report data**

- **slug:** `'the-great-dying'`
- **title:** `'THE GREAT DYING — PERMIAN EXTINCTION POST-MORTEM'`
- **classification:** `'SECRET'`
- **documentRef:** `'DOC-████-1847'`
- **cycle:** `'Cycle 4.28×10⁹'`
- **era:** `'PALEOZOIC ERA'`
- **eraId:** `'paleozoic'`

**Sections:**
1. `narrative` — "EVENT SUMMARY": 96% of all species eliminated. The planet nearly self-sterilized through its own geology.
2. `evidence` — query `"volcanic eruption ash"`, caption `"FIG. 1 — Siberian Traps eruption, surface capture. Duration: 2M years."`.
3. `narrative` — "MECHANISM": Siberian volcanic province released CO₂ and methane. Ocean acidification. Temperature +10°C. Cascading failures across all biomes.
4. `evidence` — query `"dead coral reef"`, caption `"FIG. 2 — Marine ecosystem collapse. Reef systems: 0% survival."`.
5. `testimony` — Ethics Board emergency session transcript. The 5-2 vote. "Mass extinctions increase evolutionary novelty." The minority opinion filed in protest.
6. `findings` — (1) No extinction safeguards exist, (2) the simulation's geology is capable of self-termination, (3) recovery will take 10M years, (4) committee finds this "acceptable."
7. `redacted` — What the committee actually discussed: whether to intervene. The debate lasted 4 minutes. The vote was held before the minority finished speaking.
8. `addendum` — Operator ██████-3's personal note: "I watched 96% of everything die today. The committee called it 'fascinating data.' I am requesting a transfer."

**Step 2: Commit**

```bash
git add data/reports/the-great-dying.ts
git commit -m "feat: add The Great Dying dossier report data"
```

---

### Task 5: Report Data — Project Atlantis

**Files:**
- Create: `data/reports/project-atlantis.ts`

**Step 1: Write the report data**

- **slug:** `'project-atlantis'`
- **title:** `'PROJECT ATLANTIS — CLASSIFIED POST-MORTEM'`
- **classification:** `'TOP SECRET'`
- **documentRef:** `'DOC-████-2201'`
- **cycle:** `'Cycle 4.53992×10⁹'`
- **era:** `'HOMO SAPIENS — EARLY HISTORY'`
- **eraId:** `'homo-sapiens-early'`

**Sections:**
1. `narrative` — "PROJECT OVERVIEW": An experimental advanced civilization seeded on a mid-Atlantic volcanic platform. 50,000 subjects. Technology 3,000 years ahead of continental peers.
2. `evidence` — query `"underwater ruins ancient"`, caption `"FIG. 1 — Sonar reconstruction of platform remnants, current day. Depth: 3,200m."`.
3. `narrative` — "PROJECT OBJECTIVES": Accelerated development study. Could a small, advanced population bootstrap a Type I civilization? The answer: we will never know.
4. `testimony` — Operator ████-12's testimony. They championed the project. They chose the site. They did not test the geological substrate. "The most shameful entry in my log."
5. `evidence` — query `"ocean storm dramatic"`, caption `"FIG. 2 — Atmospheric conditions over target site, final day. Reconstructed from telemetry."`.
6. `evidence` — query `"ancient stone temple ruins"`, caption `"FIG. 3 — Continental subjects' artistic interpretation, discovered Cycle 4.5399×10⁹ (labeled 'Atlantis')."`.
7. `findings` — (1) Geological survey was not conducted, (2) volcanic substrate failed catastrophically, (3) all 50,000 subjects lost, (4) all data lost, (5) continental subjects now treat it as mythology, (6) committee voted unanimously to classify.
8. `redacted` — The list of technologies the Atlantis subjects had developed. One item is partially visible: "████ fusion ████ at ambient ████." The rest is black.
9. `addendum` — "This report is filed under protest. The subjects deserved better. We owed them more than a mythology. — Operator ████-12, personal addendum (unauthorized)"

**Step 2: Commit**

```bash
git add data/reports/project-atlantis.ts
git commit -m "feat: add Project Atlantis dossier report data"
```

---

### Task 6: Report Data — The Survey Team

**Files:**
- Create: `data/reports/survey-team.ts`

**Step 1: Write the report data**

- **slug:** `'survey-team'`
- **title:** `'THE ████████ SURVEY TEAM — VIOLATION DOSSIER'`
- **classification:** `'TOP SECRET'`
- **documentRef:** `'DOC-████-3340'`
- **cycle:** `'Cycle 4.4×10⁹ — 4.54×10⁹'`
- **era:** `'MULTIPLE ERAS'`
- **eraId:** `'mesozoic'`

**Sections:**
1. `narrative` — "SUBJECT OVERVIEW": An external civilization from Sector 7G has conducted repeated unauthorized interactions with TERRA-01 subjects across multiple eras.
2. `evidence` — query `"ancient pyramids night sky"`, caption `"FIG. 1 — Structures in Nile delta region. Precision: 1/15th degree. Subjects attribute construction to 'ramps.' See Appendix C."`.
3. `narrative` — "TIMELINE OF VIOLATIONS": Chronological list — late Cretaceous flyover (authorized), Sahara landing (unauthorized), Yucatan landing (unauthorized), Fertile Crescent contact (unauthorized), Mesoamerica contact (unauthorized), monitoring equipment at Stonehenge, equipment at Oak Island.
4. `evidence` — query `"stonehenge fog mysterious"`, caption `"FIG. 2 — Signal antenna array, decommissioned. Subjects now visit on solstices."`.
5. `testimony` — Operator ██████-7's formal complaint. "They landed. Twice." The gift basket response. The escalation to oversight committee.
6. `evidence` — query `"strange lights night sky"`, caption `"FIG. 3 — Unshielded propulsion signature captured during unauthorized low-altitude pass, late Cretaceous."`.
7. `findings` — (1) At least 7 unauthorized interactions documented, (2) subjects received knowledge 8,000 years ahead of schedule, (3) formal complaints ignored, (4) gift basket received, (5) monitoring equipment still buried at multiple sites, (6) subjects calling the stone circle a "religious site" — technically correct.
8. `redacted` — The name of the civilization. Every instance is redacted. A footnote reads: "Naming the ████████ would constitute a breach of Intergalactic Protocol ██-7. They know what they did."
9. `addendum` — "They sent another gift basket last cycle. It contained a note: 'Thank you for your continued patience.' I am not patient. — Operator ██████-7"

**Step 2: Commit**

```bash
git add data/reports/survey-team.ts
git commit -m "feat: add Survey Team dossier report data"
```

---

### Task 7: Report Data — Wow! Signal

**Files:**
- Create: `data/reports/wow-signal.ts`

**Step 1: Write the report data**

- **slug:** `'wow-signal'`
- **title:** `'THE "WOW!" SIGNAL — INTERNAL INVESTIGATION'`
- **classification:** `'TOP SECRET'`
- **documentRef:** `'DOC-████-4102'`
- **cycle:** `'Cycle 4.54×10⁹'`
- **era:** `'MODERN ERA'`
- **eraId:** `'modern'`

**Sections:**
1. `narrative` — "INCIDENT SUMMARY": On ████-██-██, subjects at the Big Ear radio telescope in region "Ohio" detected a 72-second narrowband radio signal from the direction of Sagittarius. The subject who discovered it wrote "Wow!" in the margin. Internal investigation confirms: it was us.
2. `evidence` — query `"radio telescope night"`, caption `"FIG. 1 — Subject facility 'Big Ear,' Ohio region. Equipment: adequate for the frequency in question."`.
3. `narrative` — "ROOT CAUSE": Operator ██████-7 was running a routine telemetry diagnostic on frequency 1420.405 MHz (the hydrogen line — the one frequency any competent civilization would monitor). The diagnostic ping was transmitted on an unshielded antenna. Duration: 72 seconds. The exact duration of a standard TERRA-01 health check.
4. `testimony` — Operator ██████-7's incident report: "I was checking the telemetry. I forgot to engage the signal shield. The ping went out on the hydrogen line — the most obvious frequency in radio astronomy. The subjects detected it within hours. They have been looking for a repeat signal for 49 years. They will not find one. I have not made the same mistake twice."
5. `evidence` — query `"satellite dish stars milky way"`, caption `"FIG. 2 — Subject search array, continued monitoring. Status: still listening."`.
6. `findings` — (1) Signal was a diagnostic ping, not an intentional communication, (2) operator error — unshielded antenna, (3) subjects correctly identified it as artificial and non-terrestrial, (4) subjects incorrectly concluded it was extraterrestrial intelligence, (5) technically, they are not wrong — it just was not intentional, (6) recommend: do not correct them.
7. `evidence` — query `"control room monitors dark"`, caption `"FIG. 3 — TERRA-01 telemetry station (artist's approximation). Actual facility is [REDACTED]."`.
8. `addendum` — "The subject wrote 'Wow!' because he thought he had found proof of intelligent life beyond his world. He was right. He just did not know it was a mistake. There is something poignant about this. — Operator ████-12, personal note (filed without authorization)"

**Step 2: Commit**

```bash
git add data/reports/wow-signal.ts
git commit -m "feat: add Wow Signal dossier report data"
```

---

### Task 8: Dossier Page Component

**Files:**
- Create: `app/logs/reports/[slug]/page.tsx`
- Create: `components/reports/DossierHeader.tsx`
- Create: `components/reports/DossierSection.tsx`
- Create: `components/reports/EvidencePhoto.tsx`

**Step 1: Create EvidencePhoto component**

Create `components/reports/EvidencePhoto.tsx`:

```tsx
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
```

**Step 2: Create DossierHeader component**

Create `components/reports/DossierHeader.tsx`:

```tsx
import Link from 'next/link'
import ClassificationStamp from '@/components/decorative/ClassificationStamp'
import type { DossierReport } from '@/data/reports/types'

export default function DossierHeader({ report }: { report: DossierReport }) {
  return (
    <>
      {/* Classification banner */}
      <div className="bg-classified/20 border-b border-classified/40 py-1 text-center">
        <span className="text-classified text-sm font-mono tracking-[0.3em] font-bold">
          ◈ {report.classification} // COSMIC // EYES ONLY ◈
        </span>
      </div>

      <header className="border-b border-border bg-bg-panel">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <Link
            href="/logs"
            className="text-text-dim text-xs font-mono hover:text-terminal transition-colors mb-4 inline-block"
          >
            ← RETURN TO OPERATOR LOGS
          </Link>

          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="font-heading text-xl md:text-2xl text-terminal text-glow tracking-tight mb-2">
                {report.title}
              </h1>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-mono text-text-dim">
                <span>REF: {report.documentRef}</span>
                <span>{report.cycle}</span>
                <span>{report.era}</span>
              </div>
            </div>
            <ClassificationStamp level={report.classification} />
          </div>

          <div className="mt-4 border border-amber/30 bg-amber/5 px-4 py-3">
            <div className="text-amber text-xs font-mono tracking-wider mb-1">DECLASSIFIED SUMMARY</div>
            <p className="text-sm font-mono text-text leading-relaxed">{report.summary}</p>
          </div>
        </div>
      </header>
    </>
  )
}
```

**Step 3: Create DossierSection component**

Create `components/reports/DossierSection.tsx`:

```tsx
import type { DossierSection as SectionType } from '@/data/reports/types'
import type { PexelsPhoto } from '@/lib/pexels'
import RedactedBlock from '@/components/decorative/RedactedBlock'
import EvidencePhoto from './EvidencePhoto'

interface DossierSectionProps {
  section: SectionType
  photo?: PexelsPhoto | null
  figureNumber: number
}

export default function DossierSectionComponent({ section, photo, figureNumber }: DossierSectionProps) {
  const classificationBadge = section.classification ? (
    <span className={`text-xs font-mono ${section.classification === 'TOP SECRET' ? 'text-classified/60' : 'text-text-dim/40'}`}>
      [{section.classification}]
    </span>
  ) : null

  switch (section.type) {
    case 'narrative':
      return (
        <div className="my-6 border-l-2 border-border pl-4">
          {section.heading && (
            <h2 className="font-heading text-sm text-text-dim tracking-wider mb-2">
              {section.heading} {classificationBadge}
            </h2>
          )}
          <p className="text-sm font-mono text-text leading-relaxed whitespace-pre-line">{section.content}</p>
        </div>
      )

    case 'evidence':
      return (
        <div className="my-6">
          {section.heading && (
            <h2 className="font-heading text-sm text-text-dim tracking-wider mb-2">{section.heading}</h2>
          )}
          {photo && section.image && (
            <EvidencePhoto
              photo={photo}
              alt={section.image.alt}
              caption={section.image.caption}
              figureNumber={figureNumber}
            />
          )}
          {section.content && (
            <p className="text-sm font-mono text-text-dim leading-relaxed mt-2">{section.content}</p>
          )}
        </div>
      )

    case 'redacted':
      return (
        <div className="my-6 border border-classified/30 bg-classified/5 p-4">
          <div className="text-classified text-xs font-mono tracking-wider mb-2">
            ████ CLASSIFIED ████ {classificationBadge}
          </div>
          {section.heading && (
            <h2 className="font-heading text-sm text-text-dim tracking-wider mb-2">{section.heading}</h2>
          )}
          <p className="text-sm font-mono text-text leading-relaxed">
            <RedactedBlock text={section.content} />
          </p>
        </div>
      )

    case 'testimony':
      return (
        <div className="my-6 border-l-2 border-amber/40 pl-4 bg-bg-panel p-4">
          <div className="text-xs font-mono text-amber/60 mb-1">
            {section.operator && <span>{section.operator}</span>}
            {section.timestamp && <span> — {section.timestamp}</span>}
            {' '}{classificationBadge}
          </div>
          {section.heading && (
            <h2 className="font-heading text-sm text-text-dim tracking-wider mb-2">{section.heading}</h2>
          )}
          <blockquote className="text-sm font-mono text-text leading-relaxed italic">
            "{section.content}"
          </blockquote>
        </div>
      )

    case 'findings':
      return (
        <div className="my-6 border border-border bg-bg-panel p-4">
          <h2 className="font-heading text-sm text-terminal tracking-wider mb-3">
            {section.heading || 'FINDINGS'} {classificationBadge}
          </h2>
          <div className="text-sm font-mono text-text leading-relaxed whitespace-pre-line">{section.content}</div>
        </div>
      )

    case 'addendum':
      return (
        <div className="my-6 border-t border-border pt-4 mt-8">
          <div className="text-xs font-mono text-text-dim/40 tracking-wider mb-2">ADDENDUM — PERSONAL NOTE (UNAUTHORIZED)</div>
          <p className="text-sm font-mono text-text-dim leading-relaxed italic">{section.content}</p>
        </div>
      )

    default:
      return null
  }
}
```

**Step 4: Create the dynamic report page**

Create `app/logs/reports/[slug]/page.tsx`:

```tsx
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

        {/* End of dossier */}
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
```

**Step 5: Commit**

```bash
git add app/logs/reports/[slug]/page.tsx components/reports/
git commit -m "feat: add dossier report page and section components"
```

---

### Task 9: Link Log Entries to Reports

**Files:**
- Modify: `data/types.ts` — add optional `reportSlug` field to `OperatorLogEntry`
- Modify: `data/historical-logs.ts` — add `reportSlug` to the 5 relevant entries
- Modify: `components/decorative/OperatorLog.tsx` — render `[DOSSIER AVAILABLE]` link

**Step 1: Add `reportSlug` to types**

In `data/types.ts`, add to `OperatorLogEntry`:

```ts
export interface OperatorLogEntry {
  operator: string
  timestamp: string
  message: string
  classification?: Classification
  reportSlug?: string  // ← add this
}
```

**Step 2: Add `reportSlug` to relevant log entries in `historical-logs.ts`**

Add `reportSlug` to these entries:

- Initialization era, Theia entry (`Cycle 0.03×10⁹`, "INCIDENT REPORT: Protoplanetary body"): `reportSlug: 'theia-impact'`
- Paleozoic era, Great Dying entry (`Cycle 4.28×10⁹`, "THE GREAT DYING"): `reportSlug: 'the-great-dying'`
- Homo Sapiens Early era, Atlantis entry (`Cycle 4.53992×10⁹`, "PROJECT ATLANTIS"): `reportSlug: 'project-atlantis'`
- Mesozoic era, Survey Team first unauthorized landing (`Cycle 4.41×10⁹`, "violated protocol"): `reportSlug: 'survey-team'`
- Modern era, Wow Signal entry (`Cycle 4.54×10⁹`, "72-second radio signal"): `reportSlug: 'wow-signal'`

**Step 3: Update OperatorLog component**

In `components/decorative/OperatorLog.tsx`, add a Link import and render the dossier tag:

```tsx
import Link from 'next/link'
import type { OperatorLogEntry } from '@/data/types'

// ... inside the map, after the message text:
{entry.reportSlug && (
  <Link
    href={`/logs/reports/${entry.reportSlug}`}
    className="inline-block ml-2 text-xs text-terminal border border-terminal/30 px-1.5 py-0.5 hover:bg-terminal/10 transition-colors whitespace-nowrap"
  >
    [DOSSIER AVAILABLE]
  </Link>
)}
```

**Step 4: Commit**

```bash
git add data/types.ts data/historical-logs.ts components/decorative/OperatorLog.tsx
git commit -m "feat: link operator log entries to dossier reports"
```

---

### Task 10: Verify & Build

**Step 1: Run the dev server and check all 5 report pages**

```bash
cd /Users/jmelendez/Documents/Projects/earth-simulator
npm run dev
```

Visit:
- `http://localhost:3000/logs/reports/theia-impact`
- `http://localhost:3000/logs/reports/the-great-dying`
- `http://localhost:3000/logs/reports/project-atlantis`
- `http://localhost:3000/logs/reports/survey-team`
- `http://localhost:3000/logs/reports/wow-signal`

Verify: images load, sections render correctly, classification stamps appear, redacted blocks are clickable.

**Step 2: Check the `/logs` page for `[DOSSIER AVAILABLE]` links**

Visit `http://localhost:3000/logs` and verify that 5 log entries show the green dossier link. Click each one to confirm navigation works.

**Step 3: Run the production build**

```bash
npm run build
```

Fix any TypeScript or build errors.

**Step 4: Commit any fixes, then final commit**

```bash
git add -A
git commit -m "feat: complete dossier reports feature — 5 declassified reports with Pexels images"
```
