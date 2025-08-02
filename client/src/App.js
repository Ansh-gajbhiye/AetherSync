
import React, { useState } from 'react';
import Navbar from './RoomUI/Navbar/Navbar';

export default function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-900 text-white">
      
      <Navbar/>
      <main className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center px-6 py-12">
     
        <div className="w-full lg:w-1/2 space-y-6">
          <h1 className="text-5xl font-extrabold leading-tight">
             Chat With Music{' '}
            <span className="text-indigo-400">Songs &amp; fun</span>
          </h1>
          <p className="text-lg max-w-md">
            MyApp makes it easy to hang out, build communities, and share moments.
          </p>
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-indigo-500 rounded-full font-semibold hover:bg-indigo-600 transition">
              Open in Browser
            </button>
            <button className="px-6 py-3 border-2 border-white rounded-full font-semibold hover:bg-white hover:text-indigo-900 transition">
              Download Desktop
            </button>
          </div>
        </div>

    
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img
            src="/assets/mockup.png"
            alt="App mockup"
            className="w-full rounded-lg shadow-2xl"
          />
        </div>
      </main>

    
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
