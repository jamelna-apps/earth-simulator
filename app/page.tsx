import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SectionNav from '@/components/layout/SectionNav'
import PhysicalConstants from '@/components/sections/PhysicalConstants'
import GeologicalClimate from '@/components/sections/GeologicalClimate'
import BiologicalParams from '@/components/sections/BiologicalParams'
import CivilizationSettings from '@/components/sections/CivilizationSettings'
import GeopoliticalConfig from '@/components/sections/GeopoliticalConfig'
import SocialParameters from '@/components/sections/SocialParameters'
import ResourceAllocation from '@/components/sections/ResourceAllocation'
import SimulationMeta from '@/components/sections/SimulationMeta'
import OperatorLog from '@/components/decorative/OperatorLog'
import TerminalLine from '@/components/decorative/TerminalLine'
import { BrailleWorldMap, LiveTickers, ResourceDepletionGauges, WealthDistributionBar } from '@/components/visualizations'
import { AnalyticsProvider } from '@/analytics'
import {
  sectionNavItems,
  logAfterTelemetry,
  logAfterPhysical,
  logAfterGeological,
  logAfterBiological,
  logAfterCivilization,
  logAfterGeopolitical,
  logAfterSocial,
  logAfterResources,
  logBeforeMeta,
} from '@/data/operator-logs'

export default function Home() {
  return (
    <AnalyticsProvider projectId="earth-simulator">
      <div className="min-h-screen">
        <Header />
        <SectionNav sections={sectionNavItems} />

        <main className="max-w-5xl mx-auto px-4 py-8">
          {/* Boot sequence */}
          <div className="mb-8 space-y-1">
            <TerminalLine text="Initializing TERRA-01 control interface..." delay={200} prompt="$" />
            <TerminalLine text="Loading simulation parameters... OK" delay={1500} prompt="$" />
            <TerminalLine text="Verifying operator clearance... LEVEL 7 GRANTED" delay={2800} prompt="$" />
            <TerminalLine text="WARNING: All modifications are logged and subject to review." delay={4000} prompt="!" />
          </div>

          {/* Telemetry Dashboard */}
          <div className="mb-8 space-y-4" id="telemetry">
            <BrailleWorldMap />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <LiveTickers />
              <ResourceDepletionGauges />
            </div>
            <WealthDistributionBar />
          </div>
          <OperatorLog entries={logAfterTelemetry} />

          <PhysicalConstants />
          <OperatorLog entries={logAfterPhysical} />

          <GeologicalClimate />
          <OperatorLog entries={logAfterGeological} />

          <BiologicalParams />
          <OperatorLog entries={logAfterBiological} />

          <CivilizationSettings />
          <OperatorLog entries={logAfterCivilization} />

          <GeopoliticalConfig />
          <OperatorLog entries={logAfterGeopolitical} />

          <SocialParameters />
          <OperatorLog entries={logAfterSocial} />

          <ResourceAllocation />
          <OperatorLog entries={logAfterResources} />

          <OperatorLog entries={logBeforeMeta} />
          <SimulationMeta />

          {/* Similar simulations comparison */}
          <div className="mt-12 border border-border bg-bg-panel p-4 md:p-6">
            <h3 className="font-heading text-base text-text-dim tracking-wider mb-4">
              PARALLEL SIMULATION INSTANCES — COMPARISON TABLE
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm font-mono">
                <thead>
                  <tr className="border-b border-border text-text-dim text-left">
                    <th className="pb-2 pr-4">Instance</th>
                    <th className="pb-2 pr-4">Dominant Path</th>
                    <th className="pb-2 pr-4">Uptime</th>
                    <th className="pb-2 pr-4">Status</th>
                    <th className="pb-2">Notes</th>
                  </tr>
                </thead>
                <tbody className="text-text">
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4 text-terminal text-glow">TERRA-01</td>
                    <td className="py-2 pr-4">Homo sapiens</td>
                    <td className="py-2 pr-4">4.54×10⁹ yr</td>
                    <td className="py-2 pr-4 text-amber">RUNNING</td>
                    <td className="py-2 text-text-dim">Current instance. You are here.</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">TERRA-02</td>
                    <td className="py-2 pr-4">Cephalopoda</td>
                    <td className="py-2 pr-4">4.54×10⁹ yr</td>
                    <td className="py-2 pr-4 text-terminal">RUNNING</td>
                    <td className="py-2 text-text-dim">No wars. Art excellent. Architecture moist.</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">TERRA-03</td>
                    <td className="py-2 pr-4">Dinosauria (no patch)</td>
                    <td className="py-2 pr-4">4.60×10⁹ yr</td>
                    <td className="py-2 pr-4 text-red">TERMINATED</td>
                    <td className="py-2 text-text-dim">Subjects achieved spaceflight. Found the render boundary. Terminated.</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">TERRA-04</td>
                    <td className="py-2 pr-4">H. sapiens (high empathy)</td>
                    <td className="py-2 pr-4">4.54×10⁹ yr</td>
                    <td className="py-2 pr-4 text-text-dim">DISCONTINUED</td>
                    <td className="py-2 text-text-dim">Utopia achieved by year 12,000. Insufficient data variance. Boring.</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">TERRA-05</td>
                    <td className="py-2 pr-4">Fungi (mycelium net)</td>
                    <td className="py-2 pr-4">4.54×10⁹ yr</td>
                    <td className="py-2 pr-4 text-terminal">RUNNING</td>
                    <td className="py-2 text-text-dim">Single planetary consciousness. Very wise. Very slow. Meeting since 400M BCE still in progress.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </AnalyticsProvider>
  )
}
