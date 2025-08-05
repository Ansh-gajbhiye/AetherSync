import { useEffect, useRef, useState } from "react";


function Navbar() {
  const [menuOpen, SetMenuOpen] = useState(false);
  const menuref =useRef(null);

  useEffect(() => {
    const handleclickoutside = (event) =>{
      if (menuref.current && !menuref.current.contains(event.target) ){
        SetMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleclickoutside);
    return ()=>{
      document.removeEventListener("mousedown", handleclickoutside)
    }
  }, []);
   useEffect (()=>{
    const handlekey =(event)=>{
      if (event.key==="Escape")SetMenuOpen(false);
    };
    document.addEventListener("keydown" ,handlekey);
    return()=>document.removeEventListener("keydown", handlekey)
   }, []);

  return (
    <div className="max-w-8xl mx-auto px-4 py-4 sticky top-0 bg-gray-900 z-50">
      <div className="flex items-center justify-between" >
        <div className=" text-2xl font-serif text-white ">
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
         <button
          className="md:hidden z-20 w-10 h-10 flex flex-col justify-center items-center focus:outline-none"
          onClick={() => SetMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white my-1.5 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
        </div>
        {menuOpen && (
          <div
             ref={menuref}
             className={`md:hidden fixed left-0 right-0 top-16 bg-gray-800 z-10 transition-transform duration-300 ease-in-out transform ${menuOpen ? 'translate-y-0' : '-translate-y-full'}`}
          >

        <ul className="flex flex-col items-center space-y-6 py-8 text-lg">
          {['Quest', 'Developer', 'Support', 'Blog'].map(label => (
            <li key={label}>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-300 py-3 px-6 rounded-md hover:bg-gray-700 block w-full text-center"
                onClick={() => SetMenuOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
        )}
   </div>
  );
}

export default Navbar;