import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar, TopHeader } from '../components/UI';

const DashboardLayout: React.FC = () => {
  return (
    <div className="flex h-screen bg-slate-950 overflow-hidden">
      {/* Sidebar - hidden on mobile, visible on desktop */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <TopHeader />

        {/* Scrollable page content */}
        <main className="flex-1 overflow-y-auto bg-slate-950">
          <Outlet />
          
          {/* Subtle footer */}
          <footer className="py-6 px-8 border-t border-slate-800/60 text-center text-xs text-slate-600 bg-slate-950">
            &copy; {new Date().getFullYear()} Capgemini Prep Arena. This is an independent preparation platform and is not affiliated with Capgemini.
          </footer>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
