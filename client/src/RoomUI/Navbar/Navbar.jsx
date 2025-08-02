import { useState } from "react";


function Navbar() {
  const [menuOpen, SetMenuOpen] = useState(true);
  return (
    <div className="max-w-6xl mx-auto px-4 py-4">
      <div className="flex items-center justify-between" >
        <div className="text-2xl font-serif ">
          AetherSync
        </div>
        <ul className="hidden md:flex space-x-6">
          {["quest", "devloper", "support", "blog"].map((label) => (
            <li key={label}   className="hover:text-indigo-300 transition-colors"
            >{label}</li>
          ))}
        </ul>
        <button className="absolute top-4 right-4 z-10 w-10 h-10 flex 
                               items-center justify-center bg-white/20
                               hover:bg-white/40 rounded-full transition"
          onClick={() => SetMenuOpen(!menuOpen)}
          aria-label="Open menu">
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
        {menuOpen && (
          <div className="lg:hidden bg-indigo-800">
            <ul className="flex flex-col items-center space-y-4 py-4 text-sm">
              {['Home', 'Features', 'Support', 'Blog'].map(label => (
                <li key={label} className="cursor-pointer hover:underline">
                  {label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>


   </div>
  );
}

export default Navbar;