import type { OperatorLogEntry } from './types'

/** Logs placed between sections — voice of previous/current simulation operators */

export const logAfterPhysical: OperatorLogEntry[] = [
  {
    operator: 'Operator ██████-7',
    timestamp: 'Cycle 4.54×10⁹',
    message: 'Routine check. Constants stable. Note: dominant species has begun measuring G to 6 significant figures. They are getting uncomfortably close to noticing the rounding.',
    classification: 'CONFIDENTIAL',
  },
]

export const logAfterGeological: OperatorLogEntry[] = [
  {
    operator: 'Operator ██████-3',
    timestamp: 'Cycle 4.54×10⁹',
    message: 'CO₂ parameter drifting above design spec. Subjects are aware but responding with what appears to be a collective shrug. Fascinating behavioral pattern. Recommend observation, not intervention.',
    classification: 'SECRET',
  },
  {
    operator: 'Operator ████-12',
    timestamp: 'Cycle 4.54×10⁹',
    message: 'The bipedal subjects continue to argue about optimal thermal regulation of shared enclosures. Individual preferences vary by ±4°C. This remains their most persistent source of interpersonal conflict after 12,000 years of cohabitation.',
  },
]

export const logAfterBiological: OperatorLogEntry[] = [
  {
    operator: 'Ethics Board (dissolved)',
    timestamp: 'Cycle 4.20×10⁹',
    message: 'Motion to reduce pain sensitivity from 0.7 to 0.4 was tabled. Board voted 4-3 that suffering "generates more interesting data." Board was subsequently dissolved for unrelated reasons.',
    classification: 'TOP SECRET',
  },
  {
    operator: 'Operator ██████-7',
    timestamp: 'Cycle 4.54×10⁹',
    message: 'Subject attachment to deceased biological companions remains unexplained. They construct elaborate resting places and visit regularly to speak to the inert matter. Recommend further study. Do not intervene — data is valuable.',
  },
]

export const logAfterCivilization: OperatorLogEntry[] = [
  {
    operator: 'Operator ████-12',
    timestamp: 'Cycle 4.54×10⁹',
    message: 'Subjects invented a global communication network capable of accessing the sum of their species\' knowledge. Primary use: sharing images of domesticated quadrupeds and arguing with strangers. Kardashev advancement: unaffected.',
  },
]

export const logAfterGeopolitical: OperatorLogEntry[] = [
  {
    operator: 'Operator ██████-3',
    timestamp: 'Cycle 4.54×10⁹',
    message: 'Subjects in region designated "Switzerland" report anomalously high satisfaction despite minimal territory, no coastline, and mandatory military service. Investigation ongoing. Current hypothesis: chocolate and punctuality.',
    classification: 'CONFIDENTIAL',
  },
  {
    operator: 'Operator ██████-7',
    timestamp: 'Cycle 4.54×10⁹',
    message: 'The subjects built an organization to prevent conflict (designation: "United Nations"). It has a nice building. The building has a gift shop. The gift shop sells peace-themed merchandise. Conflict: unchanged.',
  },
]

export const logAfterSocial: OperatorLogEntry[] = [
  {
    operator: 'Operator ████-12',
    timestamp: 'Cycle 4.54×10⁹',
    message: 'Social media influence parameter approaching critical threshold. Subjects now form opinions in 280-character increments. Nuance module deprecated. Outrage module running at 340% designed capacity.',
  },
  {
    operator: 'Operator ██████-3',
    timestamp: 'Cycle 4.54×10⁹',
    message: 'Empathy readings show curious pattern: subjects exhibit maximum empathy for organisms they will never meet and minimum empathy for adjacent organisms. Spatial proximity inversely correlated with compassion. Cause: unknown.',
    classification: 'CONFIDENTIAL',
  },
]

export const logAfterResources: OperatorLogEntry[] = [
  {
    operator: 'Operator ██████-7',
    timestamp: 'Cycle 4.54×10⁹',
    message: 'Subjects produce sufficient nutrition for 10 billion organisms. 828 million experience insufficient nutrition. The remainder discards 33% of production. When questioned, subjects attribute this to "market forces," which appears to be a belief system.',
    classification: 'SECRET',
  },
]

export const logBeforeMeta: OperatorLogEntry[] = [
  {
    operator: 'SYSTEM',
    timestamp: 'Cycle 4.54×10⁹',
    message: 'NOTICE: The following section contains simulation metadata. Reminder that operator access to this section was revoked after Incident ████-7 and reinstated on a provisional basis. Do not modify parameters without committee approval.',
    classification: 'TOP SECRET',
  },
]

export const logAfterTelemetry: OperatorLogEntry[] = [
  {
    operator: 'Operator ██████-7',
    timestamp: 'Cycle 4.54×10⁹',
    message: 'Telemetry feed nominal. Resource depletion curves tracking within expected parameters. Wealth distribution remains unchanged. As always. Recommend continued observation of dominant species\' response to their own data — they appear to collect it compulsively but rarely act on it.',
    classification: 'CONFIDENTIAL',
  },
  {
    operator: 'Operator ████-12',
    timestamp: 'Cycle 4.54×10⁹',
    message: 'Population ticker approaching 8.2×10⁹. Original design spec was 500 million. No one remembers who approved the expansion. Committee notes from that era are [REDACTED].',
  },
]

export const sectionNavItems = [
  { id: 'telemetry', sectionNumber: 'TEL-000', title: 'TELEMETRY', status: 'ACTIVE' },
  { id: 'physical-constants', sectionNumber: 'SEC-001', title: 'PHYSICAL CONSTANTS', status: 'NOMINAL' },
  { id: 'geological-climate', sectionNumber: 'SEC-002', title: 'GEOLOGICAL & CLIMATE', status: 'CONCERNING' },
  { id: 'biological-params', sectionNumber: 'SEC-003', title: 'BIOLOGICAL PARAMS', status: 'ANOMALOUS' },
  { id: 'civilization-settings', sectionNumber: 'SEC-004', title: 'CIVILIZATION', status: 'SUBOPTIMAL' },
  { id: 'geopolitical-config', sectionNumber: 'SEC-005', title: 'GEOPOLITICAL', status: 'CRITICAL' },
  { id: 'social-parameters', sectionNumber: 'SEC-006', title: 'SOCIAL PARAMS', status: 'CONCERNING' },
  { id: 'resource-allocation', sectionNumber: 'SEC-007', title: 'RESOURCES', status: 'SELF-TERMINATING' },
  { id: 'simulation-meta', sectionNumber: 'SEC-008', title: 'SIM METADATA', status: 'CLASSIFIED' },
]
