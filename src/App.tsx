import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import CategoryTabs from './components/CategoryTabs';
import VideoGrid from './components/VideoGrid';

const App: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Header />
      <div className="flex">
        {/* <Sidebar /> */}
        <main className="flex-1 p-4 sm:p-6">
          <CategoryTabs />
          <VideoGrid />
        </main>
      </div>
    </div>
  );
};

export default App;
