import { useState } from "react";


function Navbar() {
  const [menuOpen, SetMenuOpen] = useState(false);
  return (
    <div className="max-w-6xl mx-auto px-4 py-4 sticky top-0 bg-gray-900 z-50">
      <div className="flex items-center justify-between" >
        <div className="text-2xl font-serif text-white ">
          AetherSync
        </div>
        <ul className="hidden md:flex space-x-8">
          {["Quest", "Devloper", "Support", "Blog"].map((label) => (
            <li key={label}>
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors duration-300 py-2 px-3 rounded-md hover:bg-gray-700"
                onClick={() => (true)}
              >
                {label}
              </a>
            </li>  
            
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
              {['Quest', 'Devloper', 'Support', 'Blog'].map(label => (
                <li key={label} className="cursor-pointer hover:underline">
                  {label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
      </div>
   </div>
   
   
  );
}

export default Navbar;