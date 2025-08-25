import React, { useState } from 'react';
import Navbar from './RoomUI/Mainpanel/Navbar';
import Dashboard from './RoomUI/Mainpanel/Dashboard';
import Footer from './RoomUI/Mainpanel/Footer';

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
       <Footer/>
    </div>
  );
}
export default App