import React, { useState } from 'react';
import Navbar from './RoomUI/Navbar/Navbar';
import Dashboard from './RoomUI/Dashboard/Dashboard';

function App() {
  const [darkMode, setDarkMode]=useState(true);
  return (
     <div className={`min-h-screen flex flex-col transition-colors duration-500 ${
      darkMode ? 'bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800' : 'bg-gradient-to-br from-blue-50 to-purple-100'
    }`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <main className="flex-grow">
        <Dashboard darkMode={darkMode} />
      </main>
       <footer className="mt-auto py-6 bg-gray-900/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center text-sm">
          <p className="text-gray-400">© 2025 AetherSync, Inc. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <a href="#" className="text-gray-300 hover:text-indigo-400 transition">Privacy</a>
            <a href="#" className="text-gray-300 hover:text-indigo-400 transition">Terms</a>
            <a href="#" className="text-gray-300 hover:text-indigo-400 transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default App