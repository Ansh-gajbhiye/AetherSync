import { useEffect, useRef, useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [activeItem, setActiveItem] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Quest", "Developer", "Support", "Blog"];

  return (
    <div className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-gray-900/90 backdrop-blur-lg py-2 shadow-xl" 
        : "bg-gray-900/60 backdrop-blur-md py-3"
    }`}>
      <div className="max-w-8xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo with Discord-like purple accent */}
          <div className="flex items-center space-x-2">
           
            <div className="text-2xl font-bold text-white font-sans tracking-tight">
              <span className="text-indigo-400">Aether</span>Sync
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-1">
            {navItems.map((label) => (
              <li key={label}>
                <a 
                  href="#" 
                  className={`relative px-4 py-2 rounded-md transition-all duration-300 group ${
                    activeItem === label
                      ? "text-white bg-indigo-600/30"
                      : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                  }`}
                  onClick={() => setActiveItem(label)}
                >
                  {label}
                  <span className={`absolute left-0 bottom-0 h-0.5 bg-indigo-400 transition-all duration-300 ${
                    activeItem === label ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
                </a>
              </li>  
            ))}
          </ul>
          
          {/* Login Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="#" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Login
            </a>
            <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white transition-colors duration-300 shadow-lg shadow-indigo-500/20">
              Sign Up
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-20 w-10 h-10 flex flex-col justify-center items-center focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              menuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}></span>
            <span className={`block w-6 h-0.5 bg-white my-1.5 transition-opacity duration-300 ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            }`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}></span>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {menuOpen && (
          <div
            ref={menuRef}
            className={`md:hidden fixed left-0 right-0 top-16 bg-gray-800 z-10 transition-all duration-300 ease-in-out transform ${
              menuOpen ? 'translate-y-0' : '-translate-y-full'
            }`}
          >
            <div className="bg-gray-800/95 backdrop-blur-xl border-t border-gray-700">
              <ul className="flex flex-col py-4 text-lg">
                {navItems.map(label => (
                  <li key={label}>
                    <a
                      href="#"
                      className={`block py-3 px-6 transition-colors duration-300 ${
                        activeItem === label
                          ? 'text-white bg-indigo-600/30 border-l-4 border-indigo-400'
                          : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                      }`}
                      onClick={() => {
                        setActiveItem(label);
                        setMenuOpen(false);
                      }}
                    >
                      {label}
                    </a>
                  </li>
                ))}
                <li className="mt-4 px-6">
                  <a
                    href="#"
                    className="block py-3 text-center text-gray-300 hover:text-white transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    Login
                  </a>
                </li>
                <li className="px-6 pb-4">
                  <button 
                    className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white transition-colors duration-300 shadow-lg shadow-indigo-500/20"
                    onClick={() => setMenuOpen(false)}
                  >
                    Sign Up
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;