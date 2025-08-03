
import React, { useState } from 'react';
import Navbar from './RoomUI/Navbar/Navbar';
import Dashboard from './RoomUI/Dashboard/Dashboard';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-900 text-white">
      <Navbar/>
     <Dashboard/>
      <footer className="mt-auto py-6 bg-indigo-800">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center text-sm">
          <p>© 2025 AetherSync, Inc. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default App