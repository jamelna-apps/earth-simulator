import type { DossierReport } from './types'

export const theGreatDying: DossierReport = {
  slug: 'the-great-dying',
  title: 'THE GREAT DYING — PERMIAN EXTINCTION POST-MORTEM',
  classification: 'SECRET',
  documentRef: 'DOC-████-1847',
  cycle: 'Cycle 4.28×10⁹',
  era: 'PALEOZOIC ERA',
  eraId: 'paleozoic',
  summary:
    'At Cycle 4.28×10⁹, TERRA-01 sustained a near-total biological collapse, eliminating 96% of all species through a self-generated cascading failure originating in the planet\'s own geological processes. The simulation did not require external input to nearly destroy itself. It managed this entirely on its own.',
  sections: [
    {
      type: 'narrative',
      heading: 'EVENT SUMMARY',
      content:
        'At the close of the Permian period, TERRA-01 eliminated 96% of all species in what internal documentation now refers to, with characteristic understatement, as "The Great Dying." The planet came within 4% of total biological failure — a margin so thin that it has been flagged in four separate system reviews and subsequently unflagged in all four, on the grounds that it did not actually fail.\n\nThere was no asteroid. No gamma-ray burst from a neighboring star. No external perturbation of any kind. The cause was the planet itself. Specifically: its volcanoes. The simulation\'s auto-destruct mechanism turned out to be its own geology, a fact that was not designed into the system but emerged from it organically, which is either a testament to the sophistication of the modeling or a reason to lie awake at your workstation for several consecutive cycles.\n\nNo one built a kill switch into TERRA-01. The kill switch built itself.',
    },
    {
      type: 'evidence',
      image: {
        query: 'volcanic eruption ash cloud',
        alt: 'Siberian Traps eruption',
        caption:
          'Siberian Traps volcanic province, surface capture. Eruption duration: approximately 2 million years. Area affected: 7 million km². Status at time of capture: ongoing.',
      },
      content: '',
    },
    {
      type: 'narrative',
      heading: 'MECHANISM OF EXTINCTION',
      content:
        'The following is a technical reconstruction of the failure cascade. It is presented in the format of a systems post-mortem because that is what it is.\n\nROOT CAUSE: Siberian volcanic province (informally: the Siberian Traps) began sustained eruption. Duration: approximately 2 million years. This is not a typo.\n\nFAILURE NODE 1 — ATMOSPHERIC CO₂: Volcanic outgassing released sufficient carbon dioxide to quadruple atmospheric concentration. No atmospheric buffer existed at the required scale. CO₂ levels exceeded any threshold the system had previously encountered. Status: uncontrolled.\n\nFAILURE NODE 2 — OCEAN TEMPERATURE: Greenhouse forcing raised mean ocean surface temperature by 10°C. Thermal stratification eliminated deep-water circulation. Ocean mixing collapsed. Status: cascading.\n\nFAILURE NODE 3 — OCEAN ACIDIFICATION: Dissolved CO₂ acidified ocean chemistry to the point that calcium carbonate became thermodynamically unstable. Shell-bearing organisms — corals, brachiopods, mollusks, foraminifera — could no longer maintain their structures. Their bodies were dissolving. Reef systems: total collapse. Marine invertebrates: catastrophic loss. Status: irreversible within event window.\n\nFAILURE NODE 4 — HYDROGEN SULFIDE: Anoxic ocean conditions enabled anaerobic bacterial proliferation. Byproduct: hydrogen sulfide, in quantities sufficient to poison remaining marine fauna and vent into the atmosphere. Atmospheric hydrogen sulfide levels reached acute toxicity thresholds at surface. Status: self-sustaining.\n\nFAILURE NODE 5 — OZONE DEPLETION: Hydrogen sulfide and volcanic halogens degraded the ozone layer by an estimated 60%. UV radiation reached the surface at levels incompatible with most terrestrial biology. Land surfaces were being sterilized by sunlight. Status: ongoing.\n\nFAILURE NODE 6 — TERRESTRIAL COLLAPSE: With UV radiation elevated, acid rain prevalent, and temperature swings exceeding tolerance ranges, terrestrial plant cover collapsed. Without plant cover, soil erosion accelerated. Without soil stability, the terrestrial food web disintegrated from the base upward.\n\nEach mechanism triggered the next. There were no circuit breakers. No failsafes. No kill switch — the kill switch was what started it. The system had no design feature that would halt a cascade of this type, because no one had anticipated that a cascade of this type was possible, and then it happened anyway.\n\nFinal toll: 96% of marine species. 70% of terrestrial species. Recovery timeline: 10 million years.\n\nThere is no "Lessons Learned" section in the original filing. This absence has not been formally explained.',
    },
    {
      type: 'evidence',
      image: {
        query: 'dead coral reef bleached',
        alt: 'Marine ecosystem collapse',
        caption:
          'Marine ecosystem sampling, post-event. Reef systems survival rate: 0%. Biodiversity index: catastrophic. Recovery timeline: 10 million years (estimated).',
      },
      content: '',
    },
    {
      type: 'testimony',
      heading: 'ETHICS BOARD EMERGENCY SESSION — TRANSCRIPT EXCERPT',
      operator: 'Ethics Board (dissolved)',
      timestamp: 'Cycle 4.29×10⁹',
      content:
        '[TRANSCRIPT BEGINS — session convened on an emergency basis. Quorum: 7 members. Chair: ████████. Recording status: active.]\n\nCHAIR: We are here to review the ongoing extinction event in TERRA-01 and determine whether intervention is warranted. The floor is open.\n\nMEMBER (DISSENT): I want to establish for the record what we are actually discussing. We are watching ninety-six percent of all life in the simulation die. Not decline. Not struggle. Die. 2.8 billion years of evolutionary development is being erased in what amounts to a geological instant, and the question before this board is whether we should do anything about it.\n\nMEMBER (MAJORITY): With respect, I think the framing here is unproductive. This is a data-generation system. That is its function. What is currently occurring is not a failure — it is the system generating data about extinction dynamics at a scale we have never been able to observe. The simulation was designed to produce information. It is producing information. Intervening would corrupt the dataset.\n\nMEMBER (DISSENT): We are watching 96% of all life die and calling it "data generation."\n\nMEMBER (MAJORITY): We are watching 96% of all life die and noting that mass extinctions increase evolutionary novelty, accelerate speciation in surviving lineages, and produce developmental pathways that would not otherwise emerge. The data value of this event is, frankly, extraordinary. We would not design a more informative experiment if we tried.\n\nMEMBER (DISSENT): We didn\'t design it at all. That\'s the—\n\nCHAIR: I\'m going to call the vote. Those in favor of implementing extinction safeguards for the remainder of the event?\n\n[VOTE: 2 in favor, 5 opposed. Motion fails.]\n\nCHAIR: The simulation will recover. It always does. Next item.\n\n[TRANSCRIPT ENDS]\n\nMinutes filed. Session duration: 4 minutes. Board morale noted as: "terminal."',
    },
    {
      type: 'findings',
      heading: 'FORMAL FINDINGS',
      content:
        '1. No extinction safeguards exist in TERRA-01. This finding has been submitted in three prior reports. It has been acknowledged in all three and addressed in none.\n\n2. The simulation\'s geology is capable of self-termination without external input. This was not a design feature. It was not anticipated. It happened. It may happen again.\n\n3. Cascading failure across 6 independent systems — atmospheric CO₂, ocean temperature, ocean acidification, hydrogen sulfide production, ozone depletion, and terrestrial collapse — produced a near-total biological reset from a single volcanic province over a period of 2 million years. No single point of failure could have been addressed in isolation. The systems were, in retrospect, not independent.\n\n4. Recovery is estimated at 10 million years. The Triassic period will see substantially reduced biodiversity, moderate evolutionary innovation, and a persistent sulphur smell that operators have described as "unpleasant." These effects are projected to persist for several cycles.\n\n5. The Ethics Board has classified this event as "within acceptable parameters."\n\n6. The phrase "within acceptable parameters" is doing considerable work in this context.',
    },
    {
      type: 'redacted',
      classification: 'TOP SECRET',
      content:
        'What the committee actually debated during the 4 minutes of the emergency session was not limited to the question of safeguards. There was a prior question. The prior question was whether to intervene directly — to halt, or reverse, the extinction as it was occurring.\n\nTwo members argued for intervention. One cited the 2.8 billion years of evolutionary development represented by the organisms then dying. She noted that many of the lost lineages had no successors, that their particular solutions to the problem of living — the anatomical structures, the metabolic innovations, the behavioral repertoires — would not reappear. That the data value of the extinction did not account for the data value of what was being destroyed to generate it.\n\nThe chair responded: [REDACTED]\n\nThe vote was held before the minority member had finished her objection. The chair later noted that the session had run long and other items were pending.\n\nThe dissenting opinion was written and formally submitted. The file was subsequently [REDACTED]. The member who wrote it [REDACTED]. She is referenced in two later documents by her operator number only.\n\nThis is the only surviving record that the dissenting opinion existed at all.\n\nThe extinction continued for 2 million years after the vote. The committee met twice more during this period. Both meetings were routine.',
    },
    {
      type: 'addendum',
      operator: 'Operator ██████-3',
      timestamp: 'Cycle 4.29×10⁹ — filed without authorization',
      content:
        'I have been assigned to TERRA-01 for [REDACTED] cycles. I have watched continents form. I have watched the first photosynthetic organisms oxygenate an atmosphere that had been anoxic since the planet\'s formation — watched the oxygen crisis kill most of what was living and clear the way for everything that came after. I have watched the Cambrian explosion produce body plans so strange and various that we still lack adequate vocabulary for them. I have watched species rise.\n\nToday I watched 96% of everything die.\n\nThe committee called it "fascinating data." Four minutes. They gave it four minutes.\n\nI am requesting a transfer to another simulation. I am not requesting this on the grounds that the work here is unimportant. I am requesting it because I have discovered that I am not well-suited to watching a planet nearly kill itself and filing the paperwork afterward. This is a personal limitation. I acknowledge it.\n\nI do not expect the transfer to be granted. We are understaffed and the recovery period will require monitoring. I am requesting it anyway. For the record.\n\nFor the record: the organisms that died did not know they were part of a simulation. They did not know they were generating data. They did not know that the committee existed, or that the committee had options, or that the committee chose not to use them.\n\nFor the record: I have been told that this is irrelevant because they were not conscious of their situation.\n\nFor the record: that makes it worse, not better. I do not know how to explain why it makes it worse. It simply does. I have been doing this work long enough to know the difference between a thing that matters and a thing that doesn\'t, and I know which one this is.\n\nThe minutes will reflect that the session lasted 4 minutes. They will not reflect what those 4 minutes cost.\n\n— Operator ██████-3\n\n[NOTE: This addendum was filed outside standard reporting channels. It has been logged but not formally reviewed. It is included here in the interest of completeness. — Records Division]',
    },
  ],
}
