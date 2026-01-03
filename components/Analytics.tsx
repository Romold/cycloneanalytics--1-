import React from 'react';
import Card from './ui/Card';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, AreaChart, Area, Legend
} from 'recharts';
import { Theme } from '../types';

// Data provided by user
const annualFrequencyData = [
  { year: '2015', count: 12 },
  { year: '2016', count: 8 },
  { year: '2017', count: 11 },
  { year: '2018', count: 14 },
  { year: '2019', count: 11 },
  { year: '2020', count: 9 },
  { year: '2021', count: 9 },
  { year: '2022', count: 15 },
  { year: '2023', count: 10 },
  { year: '2024', count: 13 },
];

const categoryData = [
  { name: 'Depression', count: 55 },
  { name: 'Cyclonic Storm', count: 21 },
  { name: 'Severe CS', count: 13 },
  { name: 'Very Severe CS', count: 12 },
  { name: 'Super CS', count: 11 },
];

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const riskDataRaw = [
  { Month: 1, Risk_Index: 6.576494617145999 },
  { Month: 2, Risk_Index: 2.3594485243747036 },
  { Month: 3, Risk_Index: 8.22998116240224 },
  { Month: 4, Risk_Index: 12.244991251112964 },
  { Month: 5, Risk_Index: 67.15710357125576 },
  { Month: 6, Risk_Index: 48.07524439692373 },
  { Month: 7, Risk_Index: 23.423748114212845 },
  { Month: 8, Risk_Index: 41.28964402158888 },
  { Month: 9, Risk_Index: 42.40601601274354 },
  { Month: 10, Risk_Index: 100.0 },
  { Month: 11, Risk_Index: 83.83631131053039 },
  { Month: 12, Risk_Index: 58.82909997730717 }
];

const impactData = riskDataRaw.map(d => ({
  month: months[d.Month - 1],
  riskIndex: d.Risk_Index
}));

interface AnalyticsProps {
  theme: Theme;
}

const Analytics: React.FC<AnalyticsProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  
  // Chart Colors
  const gridColor = isDark ? '#27272a' : '#e4e4e7'; // zinc-800 : zinc-200
  const textColor = isDark ? '#a1a1aa' : '#71717a'; // zinc-400 : zinc-500
  const primaryColor = '#14b8a6'; // teal-500
  const secondaryColor = '#f97316'; // orange-500

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Visual Analytics</h2>
          <p className="text-zinc-500 dark:text-zinc-400">Trends, categorization, and economic impact estimation based on historical frequency.</p>
        </div>
        <div className="text-xs font-mono text-zinc-500 bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded border border-zinc-200 dark:border-zinc-700">
          Status: RESEARCH DATA
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart 1: Frequency */}
        <Card title="Annual Cyclone Frequency" subtitle="North Indian Ocean Basin (2015-2024)">
          <div className="h-[300px] w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={annualFrequencyData}>
                <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
                <XAxis dataKey="year" stroke={textColor} fontSize={12} tickLine={false} axisLine={false} dy={10} />
                <YAxis stroke={textColor} fontSize={12} tickLine={false} axisLine={false} dx={-10} />
                <Tooltip 
                  contentStyle={{ backgroundColor: isDark ? '#18181b' : '#fff', border: `1px solid ${gridColor}`, borderRadius: '8px' }}
                  itemStyle={{ color: isDark ? '#e4e4e7' : '#18181b' }}
                />
                <Legend iconType="circle" />
                <Line 
                  type="monotone" 
                  dataKey="count" 
                  stroke={primaryColor} 
                  strokeWidth={3} 
                  dot={{ r: 4, fill: primaryColor }} 
                  activeDot={{ r: 6, strokeWidth: 0 }} 
                  name="Total Events" 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Chart 2: Category Distribution */}
        <Card title="Storm Intensity Distribution" subtitle="Aggregated count by storm classification">
          <div className="h-[300px] w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={categoryData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke={gridColor} horizontal={true} vertical={false} />
                <XAxis type="number" stroke={textColor} fontSize={12} tickLine={false} axisLine={false} />
                <YAxis dataKey="name" type="category" width={110} stroke={textColor} fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip 
                  cursor={{fill: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}}
                  contentStyle={{ backgroundColor: isDark ? '#18181b' : '#fff', border: `1px solid ${gridColor}`, borderRadius: '8px' }}
                />
                <Bar dataKey="count" fill={primaryColor} radius={[0, 4, 4, 0]} barSize={24} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Chart 3: Economic Impact (Area) */}
        <Card title="Climate Vulnerability Index" subtitle="Relative hazard risk by month (Peak Normalized to 100)" className="lg:col-span-2">
          <div className="h-[300px] w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={impactData}>
                <defs>
                  <linearGradient id="colorRisk" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={secondaryColor} stopOpacity={0.4}/>
                    <stop offset="95%" stopColor={secondaryColor} stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
                <XAxis dataKey="month" stroke={textColor} fontSize={12} tickLine={false} axisLine={false} dy={10} />
                <YAxis stroke={textColor} fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: isDark ? '#18181b' : '#fff', border: `1px solid ${gridColor}`, borderRadius: '8px' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="riskIndex" 
                  stroke={secondaryColor} 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorRisk)" 
                  name="Risk Index" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-6 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed italic">
              * The Risk Index highlights two distinct hazardous periods for the Indian Ocean: May (pre-monsoon) and October-December (post-monsoon). The October peak (100.0) represents the highest statistical probability of severe impact events in the North Indian Ocean basin.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Analytics;