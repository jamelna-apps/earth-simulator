import type { DossierReport } from './types'

export const projectAtlantis: DossierReport = {
  slug: 'project-atlantis',
  title: 'PROJECT ATLANTIS — CLASSIFIED POST-MORTEM',
  classification: 'TOP SECRET',
  documentRef: 'DOC-████-2201',
  cycle: 'Cycle 4.53992×10⁹',
  era: 'HOMO SAPIENS — EARLY HISTORY',
  eraId: 'homo-sapiens-early',
  summary:
    'An operator-initiated advanced civilization program, conducted on a mid-Atlantic volcanic platform, resulted in the total loss of 50,000 subjects and all associated data following an undetected magma chamber breach. The geological survey was never conducted. It was approved.',
  sections: [
    {
      type: 'narrative',
      heading: 'PROJECT OVERVIEW',
      content:
        'An experimental advanced civilization was seeded on a mid-Atlantic volcanic platform at coordinates [REDACTED]. Population: 50,000 subjects selected from continental H. sapiens groups. Technology level: approximately 3,000 years ahead of their continental peers.\n\nThe project was Operator ████-12\'s proposal — their first and only request for an active intervention in TERRA-01\'s development. The committee approved it in 3 minutes.\n\nThe geological survey was scheduled but never conducted. This will become relevant.',
    },
    {
      type: 'evidence',
      heading: undefined,
      content: '',
      image: {
        query: 'deep ocean blue',
        alt: 'Sonar reconstruction of platform remnants',
        caption:
          'Sonar reconstruction of platform remnants, present day. Depth: 3,200m. Structural integrity: 2%. Identifiable artifacts: 0. Everything that mattered is gone.',
      },
    },
    {
      type: 'narrative',
      heading: 'PROJECT OBJECTIVES',
      content:
        'The question was simple: could a small, technologically advanced population bootstrap a Type I civilization within 5,000 years?\n\nThe subjects were given knowledge of metallurgy, basic astronomy, agricultural optimization, and architectural engineering. They were not given knowledge of geology.\n\nNeither, it turns out, were the project planners.\n\nThe irony is structural and total.',
    },
    {
      type: 'testimony',
      operator: 'Operator ████-12',
      timestamp: 'Cycle 4.53992×10⁹',
      classification: 'TOP SECRET',
      content:
        'I championed this project. I selected the site — a volcanic plateau that looked geologically stable from the surface. I did not conduct a subsurface survey. I did not check the magma chamber depth. I did not consult the geological parameter logs.\n\nI chose the site because it was beautiful. A plateau rising from the mid-Atlantic, visible for miles. I thought it looked like the kind of place a civilization should begin. I was thinking about aesthetics. I should have been thinking about basalt thickness.\n\nThis is the most shameful entry in my log. It will remain so.',
    },
    {
      type: 'evidence',
      heading: undefined,
      content: '',
      image: {
        query: 'storm ocean waves',
        alt: 'Atmospheric conditions over target site',
        caption:
          'Atmospheric conditions over target site, final day. Reconstructed from telemetry. The storm was not the cause. It was a symptom. The ocean floor was collapsing.',
      },
    },
    {
      type: 'evidence',
      heading: undefined,
      content: '',
      image: {
        query: 'ancient ruins stone',
        alt: "Continental subjects' artistic interpretation",
        caption:
          "Continental subjects' artistic interpretation of the lost civilization, discovered Cycle 4.5399×10⁹. They call it 'Atlantis.' They think it is a story. It is not a story.",
      },
    },
    {
      type: 'findings',
      heading: 'FORMAL FINDINGS',
      content:
        '1. Geological survey was approved but never conducted — scheduling conflict with the Cenozoic climate review.\n\n2. Volcanic substrate was 340m thinner than minimum safety threshold.\n\n3. Magma chamber breach triggered a cascading structural collapse over approximately 6 hours.\n\n4. All 50,000 subjects lost.\n\n5. All data lost — the project\'s recording systems were on the platform.\n\n6. Continental subjects witnessed the event from coastal positions. Their oral accounts will persist for millennia.\n\n7. Committee voted unanimously to classify the project and allow subjects to mythologize it.\n\n8. Motion to memorialize the 50,000 was tabled. It remains tabled.',
    },
    {
      type: 'redacted',
      classification: 'TOP SECRET',
      content:
        'The following is a partial inventory of technologies the Atlantis subjects had developed before the collapse. The full inventory was lost with the platform. Operator ████-12\'s personal notes contain fragments:\n\n"████ fusion ████ at ambient ████"\n"desalination via ████ membrane"\n"agricultural yield ████ per hectare (continental average: ████)"\n\nThe most provocative entry, recovered from the operator\'s final log: "subjects had begun asking questions about the nature of their ████. They called it \'████.\' They were closer than anyone in the committee wanted to acknowledge."',
    },
    {
      type: 'addendum',
      content:
        'This report is filed under protest.\n\nFifty thousand subjects trusted an environment we provided. We did not test that environment. They built something remarkable in the time they had, and we let the ocean swallow it because no one checked the depth of the rock.\n\nThe continental subjects remember them as myth. We should remember them as a debt.\n\nThis is my personal addendum. It is unauthorized. I do not care.\n\n— Operator ████-12',
    },
  ],
}
