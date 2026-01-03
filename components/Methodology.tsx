import React from 'react';
import { Database, Activity, ShieldCheck, AlertCircle, Rocket, FileText, Filter, Layout, ChartBar, Layers } from 'lucide-react';

const Methodology: React.FC = () => {
  return (
    <section id="methodology" className="scroll-mt-24 py-24 px-6 max-w-5xl mx-auto border-t border-zinc-200 dark:border-zinc-800">
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">Methodology</h2>
        <p className="text-xl text-zinc-500 dark:text-zinc-400">How the data is processed, analyzed, and validated</p>
      </div>

      <div className="space-y-16">
        {/* Data Sources & Acquisition */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 text-teal-500 mb-2">
              <Database size={24} />
              <h3 className="text-lg font-bold uppercase tracking-wider">Data Sources</h3>
            </div>
          </div>
          <div className="md:col-span-8">
            <h4 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Data Sources & Acquisition</h4>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              This analysis is based on historical tropical cyclone records from the <strong>International Best Track Archive for Climate Stewardship (IBTrACS)</strong>, maintained by the National Oceanic and Atmospheric Administration (NOAA). The dataset provides globally standardized cyclone track and intensity information, including position, wind speed, pressure, and temporal evolution.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 mt-4 leading-relaxed">
              For this platform, cyclone records from the North Indian Ocean basin were extracted and filtered for the period 2015–2024, covering both the Arabian Sea and Bay of Bengal regions relevant to Sri Lanka’s cyclone climatology.
            </p>
          </div>
        </div>

        {/* Data Processing Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 text-blue-500 mb-2">
              <Activity size={24} />
              <h3 className="text-lg font-bold uppercase tracking-wider">Processing</h3>
            </div>
          </div>
          <div className="md:col-span-8">
            <h4 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">Data Processing Pipeline</h4>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8">Raw IBTrACS data undergoes a structured preprocessing workflow prior to analysis:</p>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1 text-zinc-400"><FileText size={20} /></div>
                <div>
                  <h5 className="font-semibold text-zinc-900 dark:text-zinc-100">Column Selection & Standardization</h5>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Only scientifically relevant fields (storm identifiers, timestamps, location, wind intensity, land proximity, and landfall indicators) are retained. Wind measurements are standardized using World Meteorological Organization (WMO) values.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1 text-zinc-400"><Filter size={20} /></div>
                <div>
                  <h5 className="font-semibold text-zinc-900 dark:text-zinc-100">Temporal & Spatial Filtering</h5>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Records are filtered to include tropical systems within the North Indian Ocean basin and constrained to the 2015-2024 period. Timestamps are normalized and duplicates removed.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1 text-zinc-400"><Layers size={20} /></div>
                <div>
                  <h5 className="font-semibold text-zinc-900 dark:text-zinc-100">Storm-Level Aggregation</h5>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Each cyclone is treated as a unique event using its official storm identifier. Maximum sustained wind speed is calculated per storm to support intensity classification.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1 text-zinc-400"><ChartBar size={20} /></div>
                <div>
                  <h5 className="font-semibold text-zinc-900 dark:text-zinc-100">Derived Metrics & Indices</h5>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">A simulated economic impact index is computed by combining monthly cyclone frequency and average storm intensity, normalized to a relative scale (0–100).</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1 text-zinc-400"><Layout size={20} /></div>
                <div>
                  <h5 className="font-semibold text-zinc-900 dark:text-zinc-100">Visualization & Frontend Integration</h5>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Analytical outputs are exported as structured JSON objects and rendered using interactive components. Python-based visualizations are used for validation during development.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Validation Approach */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 text-green-500 mb-2">
              <ShieldCheck size={24} />
              <h3 className="text-lg font-bold uppercase tracking-wider">Validation</h3>
            </div>
          </div>
          <div className="md:col-span-8">
            <h4 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Validation Approach</h4>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Results are cross-checked against known seasonal cyclone patterns in the North Indian Ocean, including pre-monsoon and post-monsoon activity peaks. Aggregated statistics are validated to ensure each cyclone is counted once per season, preventing artificial inflation of event counts. Where direct impact metrics are unavailable, modeled indices are clearly labeled and interpreted as relative indicators rather than absolute loss estimates.
            </p>
          </div>
        </div>

        {/* Limitations & Uncertainties */}
        <div className="grid grid-cols-1 md:col-span-12 gap-8">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 text-orange-500 mb-2">
              <AlertCircle size={24} />
              <h3 className="text-lg font-bold uppercase tracking-wider">Limitations</h3>
            </div>
          </div>
          <div className="md:col-span-8">
            <h4 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Limitations & Uncertainties</h4>
            <ul className="list-disc list-outside ml-5 space-y-3 text-zinc-600 dark:text-zinc-400">
              <li>The analysis relies on historical best-track data, which may contain observational uncertainties, particularly for older or offshore-only systems.</li>
              <li>The simulated economic impact index represents relative hazard potential, not direct economic loss.</li>
              <li>Landfall detection is dependent on standardized landfall flags and distance-to-land thresholds, which may not capture indirect impacts such as rainfall or storm surge.</li>
              <li>Real-time forecasting and probabilistic landfall prediction are outside the scope of the current implementation.</li>
            </ul>
          </div>
        </div>

        {/* Future Development */}
        <div className="relative mt-20 p-8 rounded-3xl bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 overflow-hidden">
          <div className="absolute top-0 right-0 p-8 text-teal-500/10 pointer-events-none">
            <Rocket size={120} />
          </div>
          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-3 text-teal-500 mb-4">
              <Rocket size={24} />
              <h3 className="text-lg font-bold uppercase tracking-wider">Future Development</h3>
            </div>
            <h4 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">Roadmap & Capabilities</h4>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">This platform is currently a frontend analytical prototype. Future iterations will expand capabilities by:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-zinc-600 dark:text-zinc-400">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5"></span>
                Integrating real-time and near-real-time data feeds.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5"></span>
                Incorporate machine learning for landfall probability.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5"></span>
                Enhancing sector-specific exposure layers.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5"></span>
                Enabling scenario-based risk simulations.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;