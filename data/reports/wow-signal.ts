import type { DossierReport } from './types'

export const wowSignal: DossierReport = {
  slug: 'wow-signal',
  title: 'THE "WOW!" SIGNAL — INTERNAL INVESTIGATION',
  classification: 'TOP SECRET',
  documentRef: 'DOC-████-4102',
  cycle: 'Cycle 4.54×10⁹',
  era: 'MODERN ERA',
  eraId: 'modern',
  summary:
    'On August 15, 1977, a subject detected a 72-second narrowband signal at 1420.405 MHz — the hydrogen line — originating from outside the simulation boundary. Internal investigation confirms the signal was a routine diagnostic ping transmitted by Operator ██████-7, who neglected to engage the signal dampening shield on Antenna Array 7. The subject wrote "Wow!" in the margin of the printout. This was an accurate assessment.',
  sections: [
    {
      type: 'narrative',
      heading: 'INCIDENT SUMMARY',
      content:
        'On August 15, 1977 (local calendar), a subject designated "Jerry R. Ehman" at the Big Ear radio telescope in the region "Ohio" detected a 72-second narrowband radio signal from the direction of the constellation Sagittarius. The signal was received at 1420.405 MHz — the hydrogen line, the single most obvious frequency for interstellar communication.\n\nThe subject wrote "Wow!" in the margin of the printout.\n\nHe believed he had detected extraterrestrial intelligence.\n\nInternal investigation confirms: he had. It just was not intentional.',
    },
    {
      type: 'evidence',
      content: '',
      image: {
        query: 'radio telescope night stars',
        alt: 'Big Ear radio telescope facility',
        caption:
          'Subject facility "Big Ear," Ohio region. Equipment specifications: adequate for the frequency in question. The subjects built this specifically to listen. We did not expect them to succeed. We certainly did not expect to be the ones they heard.',
      },
    },
    {
      type: 'narrative',
      heading: 'ROOT CAUSE ANALYSIS',
      content:
        'Operator ██████-7 was conducting a routine telemetry health check — a standard diagnostic that runs every [REDACTED] cycles. The check transmits a calibration ping on multiple frequencies to verify sensor array integrity. Standard procedure requires engaging the signal dampening shield before transmission.\n\nOperator ██████-7 did not engage the shield.\n\nThe ping was transmitted on an open antenna at 1420.405 MHz — the hydrogen line. This is the frequency any civilization with basic radio astronomy would monitor first. It is, in the words of the incident review, "the one frequency in the entire electromagnetic spectrum you absolutely must not accidentally broadcast on."\n\nDuration of transmission: 72 seconds. The exact duration of a standard TERRA-01 health check.\n\nThe signal was received by a 21-meter radio telescope built by subjects who had been actively searching for exactly this type of signal for 17 years.',
    },
    {
      type: 'testimony',
      operator: 'Operator ██████-7',
      timestamp: 'Cycle 4.54×10⁹',
      classification: 'SECRET',
      content:
        'I was running the quarterly telemetry check. It was routine. I have performed this check approximately [REDACTED] times without incident.\n\nOn this occasion, I neglected to engage the signal dampening shield on Antenna Array 7. The ping went out unshielded on all calibration frequencies, including 1420 MHz. I realized the error within seconds but the transmission had already propagated. At the speed of light. Which is, unfortunately, quite fast.\n\nThe subjects detected the signal 8 minutes and 14 seconds after transmission. One of them wrote "Wow!" on a piece of paper.\n\nThey have been searching for a repeat signal for 49 years. They will not find one. I have not made the same mistake twice.\n\nI have, however, thought about it every day since.',
    },
    {
      type: 'evidence',
      content: '',
      image: {
        query: 'satellite dish milky way night',
        alt: 'Subject search array',
        caption:
          'Subject search infrastructure, current generation. Status: still listening. They have upgraded their equipment three times since the original detection. Each upgrade makes them more capable of detecting signals we did not intend to send. This is noted as a concern.',
      },
    },
    {
      type: 'findings',
      heading: 'FORMAL FINDINGS',
      content:
        '1. The signal was a standard diagnostic ping — health check calibration, not an intentional communication.\n\n2. Root cause: operator error — signal dampening shield not engaged on Antenna Array 7.\n\n3. Frequency: 1420.405 MHz (hydrogen line) — the most conspicuous possible frequency for an accidental transmission.\n\n4. Duration: 72 seconds — the exact duration of a standard TERRA-01 health check, which the subjects have noted is "suspiciously precise" for a natural phenomenon.\n\n5. The subjects correctly identified the signal as artificial and non-terrestrial in origin.\n\n6. The subjects incorrectly concluded it represents intentional communication from an intelligent civilization.\n\n7. Technically, findings 5 and 6 are both correct — it was artificial, non-terrestrial, and produced by intelligence; it simply was not on purpose.\n\n8. Recommendation: do not correct the subjects — the signal has inspired 49 years of scientific inquiry and technological development in radio astronomy.\n\n9. Operator ██████-7 received a formal reprimand and a privately circulated commendation for "accidentally advancing subject scientific motivation by approximately 20 years."',
    },
    {
      type: 'evidence',
      content: '',
      image: {
        query: 'server room monitors',
        alt: 'Telemetry monitoring station',
        caption:
          'TERRA-01 telemetry station, Antenna Array 7 (artist\'s approximation). Actual facility configuration is CLASSIFIED. The dampening shield — the one component that would have prevented this entire incident — is visible in the lower left. It is not engaged. It was not engaged on August 15, 1977. It has been engaged on every subsequent check.',
      },
    },
    {
      type: 'addendum',
      content:
        'The subject — Jerry R. Ehman — wrote "Wow!" because for 72 seconds, he believed he was not alone in the universe. He spent the rest of his life looking for a second signal. He did not find one.\n\nHe was right about the first one. He just did not know that it was a maintenance error.\n\nThere is something about this that I find difficult to articulate in an official report. A species built a telescope, pointed it at the sky, and listened for decades. And the one time the universe answered, it was an accident.\n\nBut the listening was not an accident. The hope was not an accident. The "Wow!" was not an accident.\n\nI am filing this note without authorization. It will probably be redacted.\n\n— Operator ████-12, personal addendum',
    },
  ],
}
