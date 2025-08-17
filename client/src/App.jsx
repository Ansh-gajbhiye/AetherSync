
import React, { useState } from 'react';
import Navbar from './RoomUI/Navbar/Navbar';
import Dashboard from './RoomUI/Dashboard/Dashboard';
import hero from './assets/hero.jpg'

function App() {
  return (
    <div 
      className=" 'bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800' : 'bg-gradient-to-br from-blue-50 to-purple-100">
      <Navbar/>
      <Dashboard/>
      <footer className="mt-auto py-6 bg-discord-dark">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center text-sm">
          <p className="text-gray-400">© 2025 AetherSync, Inc. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <a href="#" className="text-gray-300 hover:text-accent-400 transition">Privacy</a>
            <a href="#" className="text-gray-300 hover:text-accent-400 transition">Terms</a>
            <a href="#" className="text-gray-300 hover:text-accent-400 transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default App