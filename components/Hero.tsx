import React from 'react';
import { ArrowRight, Activity, Database, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs font-medium text-zinc-600 dark:text-zinc-400 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
          </span>
          Latest Analysis: 2024 Cyclone Season
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-500">
          Tropical Cyclone Analysis <br />
          <span className="text-zinc-900 dark:text-white">in the Indian Ocean</span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Visualizing patterns, impacts, and risks affecting Sri Lanka based on historical datasets and modern climate research models.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#dashboard"
            className="px-8 py-3 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors flex items-center gap-2"
          >
            Explore the Data
            <ArrowRight size={18} />
          </a>
          <a
            href="#methodology"
            className="px-8 py-3 rounded-lg bg-transparent border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
          >
            Methodology
          </a>
        </div>

        {/* Trust/Context Section within Hero */}
        <div className="mt-24 pt-10 border-t border-zinc-200 dark:border-zinc-800 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100 font-semibold">
              <Database size={20} className="text-teal-500" />
              <span>Historical Records</span>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Aggregated data from IMD and international observations spanning 50+ years.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100 font-semibold">
              <Globe size={20} className="text-blue-500" />
              <span>Climate Models</span>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Correlations with ENSO, IOD patterns, and sea surface temperature anomalies.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100 font-semibold">
              <Activity size={20} className="text-orange-500" />
              <span>Impact Analysis</span>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Focus on rainfall distribution, wind damage, and economic impact on Sri Lanka.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;