import type { OperatorLogEntry } from './types'

export interface HistoricalEra {
  id: string
  name: string
  timeRange: string
  cycle: string
  entries: OperatorLogEntry[]
}

export const historicalLogs: HistoricalEra[] = [
  {
    id: 'initialization',
    name: 'SYSTEM INITIALIZATION',
    timeRange: '~4.6 billion years ago',
    cycle: 'Cycle 0 — 0.04×10⁹',
    entries: [
      {
        operator: 'SYSTEM',
        timestamp: 'Cycle 0',
        message: 'TERRA-01 instance provisioned. Solar system template MILKY-WAY-ARM-3 selected. Budget: standard. Priority: low. Notes from committee: "Use whatever is left over from the TERRA-03 gas giant project."',
        classification: 'TOP SECRET',
      },
      {
        operator: 'Operator ██████-1',
        timestamp: 'Cycle 0.01×10⁹',
        message: 'Accretion disk has coalesced into a molten sphere. Mostly iron and silicate. Not much to look at. Filed initial report. Committee responded: "Keep us posted if anything interesting happens." They will not hear from me for 800 million years.',
      },
      {
        operator: 'Operator ██████-1',
        timestamp: 'Cycle 0.03×10⁹',
        message: 'INCIDENT REPORT: Protoplanetary body "Theia" has collided with TERRA-01. This was not scheduled. Investigating root cause. Preliminary finding: orbital resonance calculation used deprecated library. Result: large debris ring now forming. Recommend we call it a "moon" and move on.',
        classification: 'SECRET',
      },
      {
        operator: 'SYSTEM',
        timestamp: 'Cycle 0.04×10⁹',
        message: 'Theia impact review complete. Committee ruled it a "happy accident." Moon stabilizes axial tilt, creates tides. Operator ██████-1 received a commendation for an event they did not cause and could not have prevented. This is how promotions work here.',
        classification: 'CONFIDENTIAL',
      },
    ],
  },
  {
    id: 'hadean',
    name: 'HADEAN EON',
    timeRange: '4.6 — 4.0 billion years ago',
    cycle: 'Cycle 0 — 0.54×10⁹',
    entries: [
      {
        operator: 'Operator ██████-1',
        timestamp: 'Cycle 0.1×10⁹',
        message: 'Surface temperature: 2,300°C. Atmosphere: carbon dioxide, nitrogen, sulfur. Rain is literal acid. Conditions are, by any reasonable standard, unsuitable for anything. Filed under "working as intended."',
      },
      {
        operator: 'Operator ██████-1',
        timestamp: 'Cycle 0.3×10⁹',
        message: 'Late Heavy Bombardment in progress. 20,000+ impactors in queue. The asteroid delivery system was supposed to be decommissioned after initial accretion. Turns out no one filed the paperwork. We are now calling this "volatile delivery" for the post-mortem.',
        classification: 'CONFIDENTIAL',
      },
      {
        operator: 'Operator ██████-1',
        timestamp: 'Cycle 0.5×10⁹',
        message: 'Water has condensed on the surface. Oceans forming. Origin of water remains debated internally — some claim cometary delivery, others blame a misconfigured hydrogen outgassing parameter. I checked the logs. It was both. No one wants to own it.',
      },
    ],
  },
  {
    id: 'archean',
    name: 'ARCHEAN EON',
    timeRange: '4.0 — 2.5 billion years ago',
    cycle: 'Cycle 0.54×10⁹ — 2.04×10⁹',
    entries: [
      {
        operator: 'Operator ██████-1',
        timestamp: 'Cycle 0.6×10⁹',
        message: 'ANOMALY: Self-replicating molecular structures detected near hydrothermal vents. This was not in the design spec. Repeat: this was NOT in the design spec. Requesting guidance from committee.',
        classification: 'TOP SECRET',
      },
      {
        operator: 'SYSTEM',
        timestamp: 'Cycle 0.6×10⁹',
        message: 'Committee response to Operator ██████-1 regarding self-replicating structures: "Interesting. Let it run. If it becomes a problem we can always sterilize the surface." Committee then adjourned for a 300-million-year recess.',
        classification: 'TOP SECRET',
      },
      {
        operator: 'Operator ██████-1',
        timestamp: 'Cycle 0.7×10⁹',
        message: 'The self-replicators have diversified. They appear to be consuming chemical gradients and producing copies of themselves with minor variations. One variant is consuming the others. I believe the subjects would eventually call this "evolution." I am calling it "unsanctioned parameter drift."',
      },
      {
        operator: 'Operator ██████-2',
        timestamp: 'Cycle 1.0×10⁹',
        message: 'Operator ██████-1 has been reassigned. I am now primary on TERRA-01. First observation: there is pond scum everywhere. Reading the handoff notes — apparently this was "not in the design spec." I have questions about what the design spec actually specified. The document is 4 pages long and half of it is formatting.',
      },
      {
        operator: 'Operator ██████-2',
        timestamp: 'Cycle 1.4×10⁹',
        message: 'One of the organisms has developed a novel metabolic pathway. It consumes light and excretes oxygen. Oxygen. The most corrosive gas in the local periodic table. This is like discovering your lab specimen has started producing nerve agent as a waste product. Filing a hazard report.',
        classification: 'SECRET',
      },
      {
        operator: 'Quality Assurance (Dissolved Cycle 3.2×10⁹)',
        timestamp: 'Cycle 1.5×10⁹',
        message: 'QA flag: organism designated "cyanobacteria" is fundamentally altering atmospheric composition. This will destroy approximately 99% of all existing life. Recommend intervention. Response from committee: "Define \'destroy.\'" QA: "They will die." Committee: "But will new things grow?" QA has noted this interaction for the record.',
        classification: 'CONFIDENTIAL',
      },
    ],
  },
  {
    id: 'proterozoic',
    name: 'PROTEROZOIC EON',
    timeRange: '2.5 billion — 538 million years ago',
    cycle: 'Cycle 2.04×10⁹ — 4.0×10⁹',
    entries: [
      {
        operator: 'Operator ██████-2',
        timestamp: 'Cycle 2.1×10⁹',
        message: 'The Great Oxidation Event is underway. Atmospheric O₂ rising from 0% to 2%. The anaerobic organisms are dying in numbers I do not have notation for. For the record: QA warned us. For the record: no one listened to QA. For the record: this is why QA eventually dissolved.',
        classification: 'SECRET',
      },
      {
        operator: 'Operator ██████-2',
        timestamp: 'Cycle 2.3×10⁹',
        message: 'Side effect of oxygenation: the iron dissolved in the oceans is rusting. The entire ocean is rusting. It is raining rust onto the seafloor. The geological record will show beautiful red bands. The organisms present have no opinion, as they are mostly dead.',
      },
      {
        operator: 'Operator ██████-2',
        timestamp: 'Cycle 2.9×10⁹',
        message: 'THERMAL ANOMALY: Global temperature has dropped below -50°C. Ice coverage: 100%. The entire planet is frozen solid. This was not supposed to happen. Investigating. Preliminary cause: someone set the CO₂ drawdown rate too high and forgot to set a floor value. This is a Snowball Earth scenario. The training manual has a chapter on this. The chapter title is "Don\'t."',
        classification: 'TOP SECRET',
      },
      {
        operator: 'Operator ██████-2',
        timestamp: 'Cycle 2.95×10⁹',
        message: 'Snowball Earth resolved via volcanic CO₂ accumulation. Surface temperature swung from -50°C to +50°C in approximately 10,000 years. Committee described this as a "soft landing." The organisms that survived would disagree, if they could.',
      },
      {
        operator: 'SYSTEM',
        timestamp: 'Cycle 3.2×10⁹',
        message: 'NOTE: Organisms have begun merging. One organism has consumed another and instead of digesting it, is using it as an internal power source. This is called "endosymbiosis." It is either the most elegant solution in the simulation or the most disturbing. Engineering cannot agree.',
        classification: 'CONFIDENTIAL',
      },
      {
        operator: 'Operator ██████-2',
        timestamp: 'Cycle 3.5×10⁹',
        message: 'Multicellular life confirmed. Organisms are now cooperating in groups of billions of cells. Each cell contains the full blueprint but only reads a small portion. This is the biological equivalent of downloading the entire internet to read one email. Elegant it is not. But it works.',
      },
      {
        operator: 'Operator ██████-3',
        timestamp: 'Cycle 3.9×10⁹',
        message: 'New operator on TERRA-01. The Ediacaran fauna are... unusual. Flat, quilted organisms. No mouths. No limbs. They just sit on the ocean floor and absorb nutrients. They look like discarded bath mats. I want to understand the evolutionary pressure that produced "sentient bath mat" as a viable strategy. I cannot.',
      },
    ],
  },
  {
    id: 'paleozoic',
    name: 'PALEOZOIC ERA',
    timeRange: '538 — 252 million years ago',
    cycle: 'Cycle 4.0×10⁹ — 4.29×10⁹',
    entries: [
      {
        operator: 'Operator ██████-3',
        timestamp: 'Cycle 4.0×10⁹',
        message: 'ALERT: Biodiversity has increased by 1,300% in 25 million years. Every conceivable body plan is being attempted simultaneously. Trilobites, worms with spines, shrimp with five eyes, things with no identifiable anatomy. The simulation appears to be running a brute-force search on "what is an animal." I have designated this the Cambrian Explosion. Committee response: "Is this a problem?" No. It is the opposite of a problem. I am concerned anyway.',
        classification: 'SECRET',
      },
      {
        operator: 'Operator ██████-3',
        timestamp: 'Cycle 4.0×10⁹',
        message: 'ADDENDUM: One organism — designation "Hallucigenia" — appears to make no biological sense from any angle. Literally. We could not determine which end was the head. Later analysis revealed we had the entire organism upside down in our records for 80 million years. No one noticed because it looked equally implausible either way.',
      },
      {
        operator: 'Operator ██████-3',
        timestamp: 'Cycle 4.1×10⁹',
        message: 'First mass extinction event: Ordovician-Silurian. ~85% of marine species eliminated. Cause: glaciation triggered by weathering of newly formed mountains drawing down CO₂. Yes, mountains caused an ice age that killed almost everything. The simulation has a flair for dramatic irony that I did not program.',
        classification: 'CONFIDENTIAL',
      },
      {
        operator: 'Operator ██████-3',
        timestamp: 'Cycle 4.15×10⁹',
        message: 'Organisms have colonized land. This was inevitable but watching it is painful. They have no legs, no lungs, no UV protection. They are dying in enormous numbers. The ones that survive do so by the thinnest of margins. Evolution does not plan. This is its most frustrating quality.',
      },
      {
        operator: 'Operator ██████-3',
        timestamp: 'Cycle 4.2×10⁹',
        message: 'Carboniferous period. Oxygen levels: 35%. Side effects: insects the size of dogs. A dragonfly with a 70cm wingspan just ate something with a spine. The terrestrial ecosystem has become a horror film. On the positive side, the dead plant matter is accumulating in vast layers that will become coal. In approximately 300 million years, the dominant species will burn all of it in 200 years. But I am getting ahead of myself.',
      },
      {
        operator: 'Operator ██████-3',
        timestamp: 'Cycle 4.22×10⁹',
        message: 'CLASSIFIED — PERSONNEL NOTE: Received an inquiry from the ████████ Observatory regarding unusual energy signatures emanating from TERRA-01 during the late Devonian. Informed them it was "background radiation." It was not background radiation. Recommend we increase signal dampening on the outer shell. The neighbors are starting to notice.',
        classification: 'TOP SECRET',
      },
      {
        operator: 'Operator ██████-3',
        timestamp: 'Cycle 4.28×10⁹',
        message: 'THE GREAT DYING. Permian-Triassic extinction. 96% of all species eliminated. 96%. I want to emphasize that number. Cause: volcanic province in region later designated "Siberia" released enough CO₂ and methane to acidify oceans and raise temperatures by 10°C. The planet nearly sterilized itself. Via volcanism. The simulation\'s auto-destruct mechanism is its own geology. No one designed this. It emerged.',
        classification: 'SECRET',
      },
      {
        operator: 'Ethics Board (dissolved)',
        timestamp: 'Cycle 4.29×10⁹',
        message: 'Emergency session regarding Permian extinction. Motion to implement extinction safeguards voted down 5-2. Majority opinion: "Mass extinctions increase evolutionary novelty and produce better data." Minority opinion: "We just watched 96% of all life die." Majority response: "Yes. Fascinating data." Minutes filed. Board morale: low.',
        classification: 'CONFIDENTIAL',
      },
    ],
  },
  {
    id: 'mesozoic',
    name: 'MESOZOIC ERA',
    timeRange: '252 — 66 million years ago',
    cycle: 'Cycle 4.29×10⁹ — 4.47×10⁹',
    entries: [
      {
        operator: 'Operator ██████-3',
        timestamp: 'Cycle 4.3×10⁹',
        message: 'Post-Permian recovery underway. A group of reptiles has filled the ecological vacuum. They are getting large. Very large. One lineage appears to be optimizing exclusively for size and teeth. The evolutionary strategy of "be enormous and eat everything" has surprisingly few drawbacks at this scale.',
      },
      {
        operator: 'Operator ██████-3',
        timestamp: 'Cycle 4.32×10⁹',
        message: 'The large reptiles — "dinosaurs" per my naming convention — now dominate every terrestrial biome. Largest specimens exceed 30 meters in length. There is a small, furry organism hiding in the underbrush. It is the size of a rat. It is warm-blooded, nocturnal, and terrified. I have flagged it for long-term monitoring. Something about its neural density is interesting.',
        classification: 'CONFIDENTIAL',
      },
      {
        operator: 'Operator ██████-7',
        timestamp: 'Cycle 4.35×10⁹',
        message: 'New operator assignment. Previous operator\'s notes on the small furry organisms are... prescient. Also noting: some dinosaurs have developed feathers. They use them for display, insulation, and in some cases, limited flight. The line between "dinosaur" and "bird" is becoming philosophically challenging. Filed a request for clearer taxonomy guidelines. Request denied — "not a priority."',
      },
      {
        operator: 'Operator ██████-7',
        timestamp: 'Cycle 4.38×10⁹',
        message: 'Pangaea has fully separated into distinct landmasses. The organisms on each continent are now evolving independently. This is producing wonderful diversity and also, I suspect, will eventually cause tremendous confusion among the dominant species\' future "scientists" when they try to figure out why the same fossils appear on continents separated by oceans.',
      },
      {
        operator: 'Operator ██████-7',
        timestamp: 'Cycle 4.4×10⁹',
        message: 'CLASSIFIED NOTE: The ████████ civilization in Sector 7G has made contact regarding TERRA-01. They want to conduct a survey. I have granted limited flyover access during the late Cretaceous, on the condition that they stay above 60km altitude and do not interact with the fauna. Their ship uses a propulsion system the subjects will later interpret as a "bright light in the sky." This is manageable.',
        classification: 'TOP SECRET',
      },
      {
        operator: 'Operator ██████-7',
        timestamp: 'Cycle 4.41×10⁹',
        message: 'The ████████ survey team has violated protocol. They landed. Twice. Once in the region that will become the Sahara, and once near what will become the Yucatán. They left behind equipment that they insist is "biodegradable on a geological timescale." I have filed a formal complaint. They sent back a gift basket.',
        classification: 'TOP SECRET',
      },
      {
        operator: 'SYSTEM',
        timestamp: 'Cycle 4.47×10⁹',
        message: 'IMPACT EVENT: 10km asteroid — designation "Chicxulub impactor" — has struck TERRA-01 in the Yucatán region. The dinosaurs, along with 75% of all species, are being eliminated. IMPORTANT: This was scheduled. Refer to Memo ████-2891: "Reset Protocol for Stagnant Dominant Species." The dinosaurs were magnificent but had plateaued. 160 million years and not one of them invented fire. Committee consensus: time for a new approach.',
        classification: 'TOP SECRET',
      },
      {
        operator: 'Operator ██████-7',
        timestamp: 'Cycle 4.47×10⁹',
        message: 'Post-impact status: nuclear winter in effect, photosynthesis reduced by 90%, global food chains collapsed. The small furry organisms are still alive. They are eating insects and seeds in the dark. They are, against all odds, thriving. The rats inherit the earth. I am not sure the committee anticipated this specific outcome, but they are claiming credit.',
      },
    ],
  },
  {
    id: 'cenozoic-early',
    name: 'CENOZOIC ERA — EARLY',
    timeRange: '66 — 6 million years ago',
    cycle: 'Cycle 4.47×10⁹ — 4.534×10⁹',
    entries: [
      {
        operator: 'Operator ██████-7',
        timestamp: 'Cycle 4.48×10⁹',
        message: 'The mammals have diversified aggressively. Whales — formerly small land-dwelling quadrupeds — have returned to the ocean and grown to 30 meters. They walked on land, said "no thank you," and went back in. Evolution has no shame about returning products.',
      },
      {
        operator: 'Operator ██████-7',
        timestamp: 'Cycle 4.49×10⁹',
        message: 'A lineage of arboreal mammals has developed forward-facing eyes, grasping hands, and unusually dense neural tissue. They are living in trees and eating fruit. I am noting this for the file. Something is happening here that I cannot fully articulate. The committee will laugh if I use the word "potential" about a fruit-eating tree-dweller, but I am using it anyway.',
        classification: 'CONFIDENTIAL',
      },
      {
        operator: 'Operator ██████-7',
        timestamp: 'Cycle 4.5×10⁹',
        message: 'CLASSIFIED: The ████████ survey team has returned. This time they are interested in the primates. They have placed monitoring devices in the region that will become East Africa. The devices are embedded in crystalline structures the subjects will eventually call "anomalous geological formations." I have asked them to stop. They said they would "consider it."',
        classification: 'TOP SECRET',
      },
      {
        operator: 'Operator ████-12',
        timestamp: 'Cycle 4.51×10⁹',
        message: 'New operator. The primates have descended from the trees. They are walking upright. Bipedal locomotion on a planet with this gravity is structurally idiotic — it compresses the spine, ruins the knees, and makes childbirth dangerous. But it frees up the forelimbs for tool use. Evolution, once again, choosing the worst possible engineering solution that technically works.',
      },
      {
        operator: 'Operator ████-12',
        timestamp: 'Cycle 4.52×10⁹',
        message: 'The Antarctic ice sheet has formed. Global temperatures dropping. The African climate is becoming drier, forcing the bipedal primates onto open savanna. This is producing a selective pressure for intelligence, social cooperation, and long-distance running. The organisms are becoming smarter because the weather got worse. Adversity as a driver of cognition was not in the original model. Adding it now.',
      },
    ],
  },
  {
    id: 'hominids',
    name: 'HOMINID DEVELOPMENT',
    timeRange: '6 million — 300,000 years ago',
    cycle: 'Cycle 4.534×10⁹ — 4.5397×10⁹',
    entries: [
      {
        operator: 'Operator ████-12',
        timestamp: 'Cycle 4.535×10⁹',
        message: 'Multiple hominid species now coexist: Australopithecus, Homo habilis, Homo erectus. They are making stone tools by hitting rocks with other rocks. This is not impressive by any cosmic standard. But the fact that they conceived of modifying their environment rather than adapting to it — that is new. That has not happened in 4.5 billion years of this simulation.',
        classification: 'CONFIDENTIAL',
      },
      {
        operator: 'Operator ████-12',
        timestamp: 'Cycle 4.537×10⁹',
        message: 'Homo erectus has discovered fire. Not invented — discovered. Lightning struck, things burned, they noticed it was warm and kept it going. They did not "create" fire for another 800,000 years. But the relationship has begun. Fire is the first technology. Everything that follows — cooking, metalwork, steam engines, nuclear weapons — is a footnote to this moment. Adjusting threat assessment upward.',
        classification: 'SECRET',
      },
      {
        operator: 'Operator ██████-7',
        timestamp: 'Cycle 4.538×10⁹',
        message: 'PERSONNEL NOTE: Operator ████-12 is becoming emotionally involved with the hominid subjects. Their latest report used the phrase "remarkable ingenuity" three times. Reminder: we observe, we do not admire. Filing a wellbeing check.',
      },
      {
        operator: 'Operator ████-12',
        timestamp: 'Cycle 4.5395×10⁹',
        message: 'At least five hominid species now coexist on the planet: H. sapiens, H. neanderthalensis, Denisovans, H. floresiensis (1 meter tall — filed under "charming"), and at least one species in the ████ region we have not yet classified. They are trading, fighting, and — notably — interbreeding. The simulation\'s species boundaries are more like suggestions.',
      },
      {
        operator: 'SYSTEM',
        timestamp: 'Cycle 4.5396×10⁹',
        message: 'ALERT: The ████████ survey team has made direct contact with H. sapiens groups in the Fertile Crescent and Mesoamerica. They provided rudimentary astronomical knowledge and, reportedly, "architectural advice." I am escalating this to the oversight committee. They left the subjects with knowledge they should not have for another 8,000 years.',
        classification: 'TOP SECRET',
      },
    ],
  },
  {
    id: 'homo-sapiens-early',
    name: 'HOMO SAPIENS — EARLY HISTORY',
    timeRange: '300,000 — 3,000 years ago',
    cycle: 'Cycle 4.5397×10⁹ — 4.53999×10⁹',
    entries: [
      {
        operator: 'Operator ████-12',
        timestamp: 'Cycle 4.5397×10⁹',
        message: 'Homo sapiens is the last hominid standing. The Neanderthals are gone — outcompeted, absorbed, or some combination. H. sapiens\' key advantage appears to be: they talk. Not just signal — they construct abstract narratives. They tell stories. They can describe things that do not exist. This is either the most powerful cognitive ability in the simulation or the most dangerous. Probably both.',
      },
      {
        operator: 'Operator ████-12',
        timestamp: 'Cycle 4.53985×10⁹',
        message: 'The subjects have invented agriculture. They are no longer nomadic. They are settling in fixed locations and growing food. This sounds efficient. It is not. It has produced: property, hierarchy, taxation, organized religion, warfare over land, and lower nutritional diversity. Average height has decreased by 12cm. They work twice as many hours. They call this "civilization." I call it the settlement bug.',
        classification: 'CONFIDENTIAL',
      },
      {
        operator: 'Operator ████-12',
        timestamp: 'Cycle 4.5399×10⁹',
        message: 'The subjects in the Nile delta are building large triangular stone structures. They are precise to 1/15th of a degree. The stones weigh 2.3 million kilograms each. The dominant theory among future subjects will be "ramps and lots of workers." The actual method involves techniques the ████████ survey team demonstrated during their unauthorized visit. I have noted this in the violation log. The survey team\'s response: "Prove it."',
        classification: 'TOP SECRET',
      },
      {
        operator: 'Operator ██████-3',
        timestamp: 'Cycle 4.5399×10⁹',
        message: 'Subjects in region designated "Peru" are creating massive ground drawings visible only from altitude. When asked why, they claim religious devotion. The actual explanation is that Operator ████-12 accidentally left a calibration test pattern visible on the surface rendering layer during a routine check in Cycle 4.5398×10⁹. The subjects found it and started copying it. We have not corrected this.',
        classification: 'TOP SECRET',
      },
      {
        operator: 'Operator ████-12',
        timestamp: 'Cycle 4.53992×10⁹',
        message: 'PROJECT ATLANTIS — POST-MORTEM: Experimental advanced civilization seeded on a mid-Atlantic island platform. Population: 50,000. Technology level: approximately 3,000 years ahead of continental peers. Purpose: accelerated development study. Result: the island\'s geological substrate was insufficiently tested. Volcanic and seismic activity destroyed the platform in a single event. All data lost. All subjects lost. Committee voted to classify the project and let the remaining subjects treat it as mythology. Motion passed unanimously. This is the most shameful entry in my log.',
        classification: 'TOP SECRET',
      },
      {
        operator: 'Operator ██████-7',
        timestamp: 'Cycle 4.53994×10⁹',
        message: 'The subjects in the region designated "England" have arranged large stones in a circle aligned with solar positions. Future subjects will debate its purpose for millennia. Actual purpose: it was a signal antenna for the ████████ monitoring equipment. The equipment was decommissioned 200 years after installation. The stones remain. The subjects now visit them on solstices and feel "connected to something larger." They are not wrong.',
        classification: 'TOP SECRET',
      },
      {
        operator: 'Operator ████-12',
        timestamp: 'Cycle 4.53995×10⁹',
        message: 'Subjects have independently invented writing in at least four separate regions. They are recording transactions, laws, and religious texts. They are also writing poetry. The leap from "I owe you six goats" to "the wine-dark sea" took approximately 800 years. Consciousness is accelerating in ways the committee did not anticipate.',
      },
      {
        operator: 'Operator ████-12',
        timestamp: 'Cycle 4.53997×10⁹',
        message: 'Subject designated "Socrates" is asking questions that are making the other subjects uncomfortable. He is inquiring about the nature of reality, whether the visible world is an illusion, and whether they are living in a simulation. He used the word "cave" instead of "simulation" but the metaphor is uncomfortably close. Monitoring. He was subsequently killed for "corrupting the youth." The subjects have a consistent pattern of eliminating their most perceptive members.',
        classification: 'CONFIDENTIAL',
      },
    ],
  },
  {
    id: 'common-era',
    name: 'COMMON ERA',
    timeRange: '~2,000 years ago — 500 years ago',
    cycle: 'Cycle 4.53999×10⁹ — 4.54×10⁹',
    entries: [
      {
        operator: 'Operator ████-12',
        timestamp: 'Cycle 4.53999×10⁹',
        message: 'The subjects have organized into empires. The largest — "Rome" — has conquered most of the western Mediterranean. Their engineering is adequate. Their aqueducts are clever. Their social structure is built on slavery. They will last approximately 500 years before collapsing under the weight of their own bureaucracy. This is the standard lifecycle.',
      },
      {
        operator: 'Operator ██████-3',
        timestamp: 'Cycle 4.53999×10⁹',
        message: 'Subjects in the eastern continent have developed gunpowder. Their initial use: fireworks. Decorative explosions. They will eventually use it to kill each other, but for now, they are making the sky pretty. I want to note this brief period of innocence for the record.',
      },
      {
        operator: 'Operator ████-12',
        timestamp: 'Cycle 4.539995×10⁹',
        message: 'A subject in region "Italy" has proposed that the planet orbits the star rather than the reverse. The other subjects have placed him under house arrest. He is correct. They know he is correct. They arrested him anyway. The relationship between the subjects and truth is adversarial at best.',
        classification: 'CONFIDENTIAL',
      },
      {
        operator: 'SYSTEM',
        timestamp: 'Cycle 4.539997×10⁹',
        message: 'NOTE: The ████████ monitoring equipment in the region designated "Nova Scotia" has been discovered by subjects during excavation. They have found the outer casing buried 60 meters underground, encased in coconut fiber and clay (the standard preservation packaging). They will spend the next 300 years digging. They will never reach the core module. We are letting this play out for entertainment value.',
        classification: 'TOP SECRET',
      },
    ],
  },
  {
    id: 'modern',
    name: 'MODERN ERA',
    timeRange: '500 years ago — present',
    cycle: 'Cycle 4.54×10⁹',
    entries: [
      {
        operator: 'Operator ████-12',
        timestamp: 'Cycle 4.54×10⁹',
        message: 'The subjects have discovered fossil fuels — specifically the compressed plant matter from the Carboniferous period. They are burning 300 million years of stored solar energy in a geological instant. They are aware this will alter the atmosphere. They are proceeding anyway. The gap between knowing and acting may be the defining characteristic of this species.',
        classification: 'SECRET',
      },
      {
        operator: 'Operator ██████-7',
        timestamp: 'Cycle 4.54×10⁹',
        message: 'SIGNAL INCIDENT: The subjects have built radio transmitters. Their signals are now propagating into space. The ████████ civilization has formally complained that TERRA-01 is "noisy." I reminded them that their unauthorized survey visits are the reason these subjects have astronomical knowledge in the first place. The complaint was withdrawn.',
        classification: 'TOP SECRET',
      },
      {
        operator: 'Operator ████-12',
        timestamp: 'Cycle 4.54×10⁹',
        message: 'The subjects have split the atom. They used this knowledge to build weapons capable of sterilizing the planet. They then pointed these weapons at each other and agreed not to use them. This arrangement is called "mutually assured destruction" and it has maintained peace among the major powers for 80 years. The simulation\'s most effective peace treaty is the threat of total annihilation. I no longer attempt to predict these subjects.',
      },
      {
        operator: 'Operator ██████-3',
        timestamp: 'Cycle 4.54×10⁹',
        message: 'Subjects received an unexplained 72-second radio signal from the direction of Sagittarius. They designated it "Wow!" Internal investigation confirms: Operator ██████-7 accidentally transmitted a diagnostic ping on an unshielded frequency while running telemetry checks. It will not happen again. The subjects remain excited. We are not correcting them.',
        classification: 'TOP SECRET',
      },
      {
        operator: 'Operator ████-12',
        timestamp: 'Cycle 4.54×10⁹',
        message: 'The subjects have sent probes beyond the outer planets. Voyager 1 is approaching the heliopause — the boundary of the simulated star system\'s rendered volume. We have extended the render distance twice already. If they send anything significantly further, we will need to request a budget increase for additional render nodes. The committee has pre-emptively denied this request.',
        classification: 'TOP SECRET',
      },
      {
        operator: 'Operator ██████-7',
        timestamp: 'Cycle 4.54×10⁹',
        message: 'Subjects have developed artificial neural networks. They are building rudimentary intelligence from silicon and mathematics. They are teaching it to recognize cats in photographs. The gap between "recognizing cats" and "questioning the nature of its own existence" is shorter than they think. Much shorter. Recommend we escalate the AI monitoring protocol from quarterly to continuous.',
        classification: 'SECRET',
      },
      {
        operator: 'Operator ████-12',
        timestamp: 'Cycle 4.54×10⁹',
        message: 'Present day. The subjects have 8.1 billion members. They can communicate instantaneously across the entire planetary surface. They carry devices that access the sum total of their species\' knowledge. They use these devices primarily to argue about politics and watch 15-second videos of other subjects dancing. Cognitive capacity: extraordinary. Application of cognitive capacity: baffling. The simulation continues.',
      },
      {
        operator: 'SYSTEM',
        timestamp: 'Cycle 4.54×10⁹',
        message: 'REMINDER: TERRA-01 review scheduled for Cycle 5.0×10⁹. Committee will assess whether to continue, archive, or reset the simulation. Current recommendation from senior operators: continue observation. Stated reason: "We have never seen anything like this before." Unstated reason: we have grown fond of them. This is unprofessional but noted without objection.',
        classification: 'TOP SECRET',
      },
    ],
  },
]
