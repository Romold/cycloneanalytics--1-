import React from 'react';
import Card from './ui/Card';
import { Wind, Waves, AlertTriangle, MapPin } from 'lucide-react';
import { StatCardProps } from '../types';

const StatCard: React.FC<StatCardProps> = ({ title, value, change, trend, icon }) => (
  <div className="p-6 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between h-full hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors cursor-default group">
    <div className="flex justify-between items-start mb-4">
      <div className="p-2 rounded-lg bg-zinc-50 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
        {icon}
      </div>
      {change && (
        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
          trend === 'up' 
            ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' 
            : trend === 'down'
            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
            : 'bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-400'
        }`}>
          {change}
        </span>
      )}
    </div>
    <div>
      <h4 className="text-zinc-500 dark:text-zinc-400 text-sm font-medium mb-1">{title}</h4>
      <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">{value}</div>
    </div>
  </div>
);

const Dashboard: React.FC = () => {
  return (
    <section id="dashboard" className="scroll-mt-24 py-12 px-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Overview Dashboard</h2>
        <p className="text-zinc-500 dark:text-zinc-400">Key metrics from historical observation periods</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Cyclones" 
          value="112" 
          change="Long-term Total" 
          trend="neutral"
          icon={<Wind size={20} />} 
        />
        <StatCard 
          title="Severe Storms" 
          value="36" 
          change="High Intensity" 
          trend="up"
          icon={<AlertTriangle size={20} />} 
        />
        <StatCard 
          title="Landfalls (SL)" 
          value="0" 
          change="Direct Impacts" 
          trend="neutral"
          icon={<MapPin size={20} />} 
        />
        <StatCard 
          title="Avg. Max Wind" 
          value="84.8 km/h" 
          change="Sustained Speed" 
          trend="neutral"
          icon={<Waves size={20} />} 
        />
      </div>
    </section>
  );
};

export default Dashboard;