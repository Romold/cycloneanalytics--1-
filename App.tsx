import React, { useState, useEffect } from 'react';
import ThemeToggle from './components/ThemeToggle';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import Analytics from './components/Analytics';
import Insights from './components/Insights';
import Methodology from './components/Methodology';
import Footer from './components/Footer';
import { Theme } from './types';

function App() {
  // Initialize theme from localStorage or system preference
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  // Apply theme class to HTML element
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-teal-500/20 selection:text-teal-700 dark:selection:text-teal-300">
      
      {/* Header / Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 border-b border-zinc-200/50 dark:border-zinc-800/50 backdrop-blur-md bg-white/70 dark:bg-zinc-950/70">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-teal-500 to-blue-600"></div>
            <span className="font-bold text-lg tracking-tight">CycloneAnalytics</span>
          </div>
          
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
              <a 
                href="https://www.ncei.noaa.gov/products/international-best-track-archive" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                Data
              </a>
              <a href="#methodology" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Methodology</a>
            </nav>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Dashboard />
        <Analytics theme={theme} />
        <Insights />
        <Methodology />
      </main>

      <Footer />
    </div>
  );
}

export default App;