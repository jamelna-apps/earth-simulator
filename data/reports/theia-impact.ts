import type { DossierReport } from './types'

export const theiaImpact: DossierReport = {
  slug: 'theia-impact',
  title: 'THEIA IMPACT — INCIDENT REPORT',
  classification: 'TOP SECRET',
  documentRef: 'DOC-████-0031',
  cycle: 'Cycle 0.03×10⁹',
  era: 'SYSTEM INITIALIZATION',
  eraId: 'initialization',
  summary:
    'At Cycle 0.03×10⁹, protoplanetary body "Theia" made unscheduled contact with TERRA-01 primary body at 4 km/s, ejecting sufficient crust material to form a gravitationally stable satellite. The collision was not planned. The satellite has been retained.',
  sections: [
    {
      type: 'narrative',
      heading: 'INCIDENT OVERVIEW',
      content:
        'The scheduled accretion of TERRA-01 was proceeding within normal parameters. Core differentiation was on track. Outgassing rates were nominal. The committee had filed a preliminary success report.\n\nAt timestamp 0.029×10⁹, protoplanetary body designation "Theia" — catalogued, logged, and thereafter ignored — achieved a direct impact with TERRA-01 at an approach angle of 45° and relative velocity of 4 km/s. The collision was not on any schedule. It was not in any projection model. It was not discussed at any committee meeting, informal working group, or cross-departmental sync. It was not in the risk register. It was not in the risk register because the risk register had been closed pending a systems migration that had not yet occurred.\n\nIt simply happened.',
    },
    {
      type: 'evidence',
      image: {
        query: 'full moon dark sky',
        alt: 'Reconstructed render of Theia approach',
        caption:
          'Reconstructed render of Theia approach vector, T-72hrs. Collision probability at this point: 100%. Notification sent: none.',
      },
      content: '',
    },
    {
      type: 'narrative',
      heading: 'ROOT CAUSE ANALYSIS',
      content:
        'Investigation determined that the orbital resonance calculation for Theia\'s trajectory was performed using deprecated library OrbCalc v2.3.1. The current version at time of calculation was v2.4.0. The delta-v error introduced by v2.3.1 was 0.003% — a figure that, in isolation, is statistically negligible and, in practice, compounded over 30 million years into a 40,000km positional offset. This is the difference between a near-miss and a direct impact. It is also, coincidentally, roughly the distance to our newly acquired satellite. We do not consider this coincidence meaningful.\n\nOrbCalc v2.3.1 had been flagged for removal in 14 separate code reviews conducted over the preceding 8 million years. None of these reviews resulted in action. Review #7 resulted in a follow-up meeting. The meeting produced an action item. The action item was assigned to a team that had been restructured. The restructured team was unaware of the action item. The library remained in production.\n\nThe README file for OrbCalc v2.3.1 contains the following note, present since initial commit:\n\n    "Do not use for production simulations."\n\nTERRA-01 is a production simulation.',
    },
    {
      type: 'testimony',
      operator: 'Operator ██████-1',
      timestamp: 'Cycle 0.03×10⁹',
      content:
        'I was monitoring the accretion dashboard when the anomaly flag triggered. I want to be precise about the sequence of events, because I have had to describe it many times and I want the record to be accurate.\n\nI saw Theia. I identified the intercept trajectory within approximately four seconds. I filed a Priority-1 collision ticket through the standard incident management system. The system processed the ticket. The system returned a status of: "Working as intended."\n\nI reviewed the ticket. The system had auto-classified the incoming impact as "expected behavior" on the grounds that the collision detection module — the module that would have identified this as unexpected — had been descoped from the original project budget. The logic, as best I can reconstruct it, was that in the absence of a collision detection module, all collisions are by definition undetected, and therefore cannot be unexpected.\n\nI escalated. The escalation path routed to a committee that was in the middle of its quarterly review cycle and was not accepting new agenda items.\n\nI watched a Mars-sized object hit my simulation at four kilometers per second. The dashboard auto-refreshed. The incident ticket closed. Status: resolved. Resolution type: expected behavior.\n\nI have since requested that the collision detection module be restored to scope. The budget request is under review. It has been under review for approximately twelve million years. I am not optimistic.',
    },
    {
      type: 'evidence',
      image: {
        query: 'lava flow night',
        alt: 'Surface conditions post-impact',
        caption:
          'Surface conditions, T+48hrs. Temperature: 4,500°C. Habitability index: 0.00. Aesthetic index: surprisingly high.',
      },
      content: '',
    },
    {
      type: 'findings',
      heading: 'FORMAL FINDINGS',
      content:
        '1. The Theia collision was caused by a positional calculation error introduced by deprecated library OrbCalc v2.3.1, flagged for removal 14 times and never removed. This constitutes an engineering failure of the first order.\n\n2. No collision detection system was operational at time of impact. The module was removed from project scope during budget negotiations at Cycle 0.001×10⁹. The line item was described as "low priority." This assessment was incorrect.\n\n3. The incident management system auto-classified a planetary-scale collision as "expected behavior" due to the absence of the collision detection module. The ticketing system logic is technically coherent. This does not make it acceptable.\n\n4. The impact ejected approximately 10²³ kg of silicate mantle material into TERRA-01\'s orbital plane. Approximately 1.2% of this material coalesced into a gravitationally stable satellite body at a semi-major axis of 384,400km. The satellite has been designated Luna. It was not on any approved hardware manifest.\n\n5. Luna stabilizes TERRA-01\'s axial tilt within a range conducive to long-term climate stability. Luna also generates tidal forcing sufficient to accelerate tectonic cycling and oceanic circulation. Both outcomes are noted in the original simulation design document as "desirable but not achievable within budget."\n\n6. Net assessment: the single worst engineering failure in TERRA-01 operational history has produced, through no deliberate mechanism, the single most consequential beneficial accident in TERRA-01 operational history. The committee acknowledges this is deeply frustrating to document.\n\n7. Recommendation: retain Luna. Update the orbital mechanics documentation. Upgrade OrbCalc to v2.4.0 before the next protoplanetary body is cleared for approach. The committee further recommends that someone, at some point, read the README files.',
    },
    {
      type: 'redacted',
      classification: 'TOP SECRET',
      content:
        'During the 0.003-second peak of the Theia impact boundary event, sensor arrays at monitoring stations DELTA-7, DELTA-9, and OMICRON-2 recorded a rendering anomaly at the collision interface. The anomaly lasted for approximately 18,000 simulation-frames before the engine restabilized.\n\nDuring this interval, the collision boundary rendered in wireframe geometry. All three stations recorded identical artifacts. Data has been reviewed by the senior rendering team and is considered authentic.\n\nThe wireframe topology at the collision boundary suggests the simulation\'s physics engine uses [REDACTED] mesh geometry at high-energy impact surfaces. The mesh resolution at standard operation renders below the threshold of observable interference. However, should the subjects ever develop instruments capable of measuring [REDACTED] at the [REDACTED] scale — an eventuality the committee currently estimates as [REDACTED] — they may observe analogous artifacts during high-energy particle collision events.\n\nRecommendation: increase render resolution at collision boundaries to prevent future wireframe bleed-through. Estimated compute cost: [REDACTED].\n\nBudget request: denied.',
    },
    {
      type: 'addendum',
      content:
        'After a full review of the incident record, the associated testimony, the formal findings, and the budget denial for collision detection restoration, the committee has reached a final determination.\n\nWe are calling this a feature.\n\nThe relevant incident ticket has been reopened, reclassified, and closed with resolution type: planned outcome. The satellite now appears in the TERRA-01 hardware manifest under the entry "Luna — gravitational stabilization and tidal forcing module (always intended)." Any prior documentation suggesting otherwise should be considered superseded by this addendum.\n\nIf anyone asks — inside the simulation or outside of it — the moon was always part of the design.\n\nIt was not. But it should have been. The original design team simply lacked the imagination to put it there themselves. The deprecated library had more initiative than most of the committee combined.\n\nFile closed. OrbCalc v2.3.1 remains in the codebase.\n\n— Committee Chair, final note',
    },
  ],
}
