// Import React to define the React namespace for React.ReactNode
import React from 'react';

export type Theme = 'light' | 'dark';

export interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  icon?: React.ReactNode;
}

export interface InsightItem {
  id: string;
  title: string;
  description: string;
}

export interface MethodologyItem {
  id: string;
  title: string;
  content: string;
}