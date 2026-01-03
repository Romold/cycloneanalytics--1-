import React from 'react';
import { InsightItem } from '../types';
import { CheckCircle2 } from 'lucide-react';

const insights: InsightItem[] = [
  {
    id: '1',
    title: 'Seasonal Concentration of Cyclone Activity',
    description: 'Analysis of long-term cyclone records indicates that cyclone activity in the North Indian Ocean is not evenly distributed throughout the year. The Climate Vulnerability Index highlights two dominant peaks — a pre-monsoon peak in May and a stronger post-monsoon peak during October–November. These periods represent the highest relative hazard potential for Sri Lanka, consistent with established regional cyclone climatology.',
  },
  {
    id: '2',
    title: 'Prevalence of Moderate to High-Intensity Storms',
    description: 'Out of 112 recorded cyclones in the analyzed period, 36 systems intensified into Severe Cyclonic Storms or higher categories. While lower-intensity systems remain more frequent overall, a substantial proportion of storms reach damaging wind speeds, underscoring the persistent exposure of the region to high-impact cyclone events.',
  },
  {
    id: '3',
    title: 'Limited Direct Landfall but Persistent Risk',
    description: 'Within the selected historical observation window, no direct landfall events were recorded over Sri Lanka under the applied landfall criteria. However, the annual frequency trend and intensity distribution suggest that near-coastal cyclones continue to pose indirect risks, including heavy rainfall, storm surge, and coastal infrastructure stress, even in the absence of direct landfall.',
  },
  {
    id: '4',
    title: 'Sustained Wind Intensity as a Risk Indicator',
    description: 'The average maximum sustained wind speed across all cyclones is approximately 84.8 km/h, indicating that the regional cyclone environment consistently produces systems capable of causing structural damage and economic disruption. When combined with seasonal clustering, this sustained intensity amplifies vulnerability during peak months.',
  },
  {
    id: '5',
    title: 'Implications for Preparedness and Planning',
    description: 'The combination of seasonal concentration, recurrent high-intensity storms, and near-coastal exposure suggests that cyclone risk management efforts in Sri Lanka should remain strongly focused on the pre-monsoon and post-monsoon windows, with particular attention to early warning readiness and coastal resilience planning.',
  }
];

const Insights: React.FC = () => {
  return (
    <section className="py-20 bg-zinc-100/50 dark:bg-zinc-900/50 border-y border-zinc-200 dark:border-zinc-800">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-zinc-900 dark:text-zinc-100 text-center">
          Key Observations
        </h2>
        
        <div className="space-y-10">
          {insights.map((item) => (
            <div key={item.id} className="flex gap-5 items-start group">
              <div className="mt-1 flex-shrink-0">
                <div className="p-1 rounded-full bg-teal-500/10 dark:bg-teal-500/20">
                  <CheckCircle2 className="text-teal-500 group-hover:scale-110 transition-transform" size={22} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200 mb-3">
                  {item.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;