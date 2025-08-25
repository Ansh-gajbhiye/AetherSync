import React from 'react'

const Footer = () => {
  return (
    <div>
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
  )
}

export default Footer