// src/components/Dashboard.jsx
import React, { useState } from 'react';

export default function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-900 text-white">
      
      {/* Navbar */}
      <nav className="max-w-6xl mx-auto flex items-center justify-between p-6">
        <div className="text-2xl font-bold">AetherSync</div>
        <ul className="hidden lg:flex space-x-8 text-sm font-medium">
          {['Home','Features','Support','Blog'].map(label => (
            <li key={label} className="cursor-pointer hover:underline">
              {label}
            </li>
          ))}
        </ul>
        <button
          className="lg:hidden p-2 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {/* simple hamburger */}
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white" />
            <span className="block w-6 h-0.5 bg-white" />
            <span className="block w-6 h-0.5 bg-white" />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-indigo-800">
          <ul className="flex flex-col items-center space-y-4 py-4 text-sm">
            {['Home','Features','Support','Blog'].map(label => (
              <li key={label} className="cursor-pointer hover:underline">
                {label}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Hero/Main */}
      <main className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center px-6 py-12">
        {/* Left */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h1 className="text-5xl font-extrabold leading-tight">
            Group Chat That’s All{' '}
            <span className="text-indigo-400">Fun &amp; Games</span>
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

        {/* Right */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img
            src="/assets/mockup.png"
            alt="App mockup"
            className="w-full rounded-lg shadow-2xl"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-6 bg-indigo-800">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center text-sm">
          <p>© 2025 MyApp, Inc. All rights reserved.</p>
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
