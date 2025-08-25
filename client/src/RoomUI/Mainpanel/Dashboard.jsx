import React, { useState } from 'react';

const Dashboard = ({darkMode}) => {
  const [activeTab, setActiveTab] = useState('home');
  const [startchatpage, setstartpage] = useState();
  return (
    <div className={`min-h-screen w-full relative overflow-hidden transition-colors duration-500 ${darkMode ? 'bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800' : 'bg-gradient-to-br from-blue-50 to-purple-100'}`}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 mt-40 leading-tight ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              <span className="block">Listen Together,</span>
              <span className={`block mt-2 ${darkMode ? 'text-indigo-300' : 'text-indigo-600'}`}>
                Chat Together
              </span>
            </h1>
            
            <p className={`text-lg mb-8 max-w-xl mx-auto lg:mx-0 ${darkMode ? 'text-indigo-200' : 'text-gray-600'}`}>
              AetherSync brings people together through shared musical experiences. 
              Discover new tracks, share your favorites, and chat in real-time.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button className={`px-6 py-3 rounded-full font-medium transition-all transform hover:scale-105 ${
                darkMode 
                  ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/30' 
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/30'
              }`}
              onClick={startchatpage}>
                Start chatting 
              </button>
              <button className={`px-6 py-3 rounded-full font-medium border transition-colors ${
                darkMode 
                  ? 'border-indigo-400 text-indigo-300 hover:bg-indigo-900/50' 
                  : 'border-indigo-400 text-indigo-600 hover:bg-indigo-100'
              }`}>
                How It Works
              </button>
            </div>
          </div>
          
          
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Real-time Chat",
              description: "Chat with friends while listening to the same music",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              )
            },
            {
              title: "Synchronized Playback",
              description: "Everyone hears the music at the same time",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              )
            },
            {
              title: "Music Discovery",
              description: "Find new music through friends and communities",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              )
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className={`p-6 rounded-2xl backdrop-blur-sm transition-all transform hover:scale-[1.02] ${
                darkMode 
                  ? 'bg-gray-800/30 border border-gray-700' 
                  : 'bg-white/70 border border-gray-200'
              }`}
            >
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${
                darkMode ? 'bg-indigo-900/50' : 'bg-indigo-100'
              }`}>
                {feature.icon}
              </div>
              <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {feature.title}
              </h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        <div className={`rounded-2xl overflow-hidden shadow-xl ${
          darkMode ? 'bg-gray-800/40 backdrop-blur-sm' : 'bg-white/80 backdrop-blur-sm'
        }`}>
          <div className={`p-4 border-b ${
            darkMode ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <h3 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              # general-chat
            </h3>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Currently playing: Blinding Lights - The Weeknd
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            <div className={`p-4 rounded-xl ${
              darkMode ? 'bg-gray-900/30' : 'bg-gray-100'
            }`}>
              <div className="h-64 overflow-y-auto pr-2">
                {[
                  { user: 'Ansh', message: 'This song is amazing! 🎵', time: '2:45 PM' },
                  { user: 'Shantanu', message: 'I know right? This artist is my favorite', time: '2:46 PM' },
                  { user: 'Danis', message: 'Can we add this to our group playlist?', time: '2:47 PM' },
                  { user: '??', message: 'Already added it! 😄', time: '2:48 PM' },
                ].map((msg, index) => (
                  <div key={index} className="mb-4 last:mb-0">
                    <div className="flex">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 ${
                        darkMode ? 'bg-indigo-600 text-white' : 'bg-indigo-500 text-white'
                      }`}>
                        {msg.user.charAt(0)}
                      </div>
                      <div>
                        <div className="flex items-baseline">
                          <span className={`font-bold mr-2 ${
                            darkMode ? 'text-indigo-300' : 'text-indigo-600'
                          }`}>
                            {msg.user}
                          </span>
                          <span className={`text-xs ${
                            darkMode ? 'text-gray-500' : 'text-gray-400'
                          }`}>
                            {msg.time}
                          </span>
                        </div>
                        <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                          {msg.message}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 flex">
                <input 
                  type="text" 
                  placeholder="Message #general-chat"
                  className={`flex-1 py-2 px-4 rounded-l-lg focus:outline-none ${
                    darkMode 
                      ? 'bg-gray-800 text-white placeholder-gray-500' 
                      : 'bg-white text-gray-800 placeholder-gray-400'
                  }`}
                />
                <button className={`px-4 py-2 rounded-r-lg ${
                  darkMode 
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
                    : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                }`}>
                  Send
                </button>
              </div>
            </div>
            
            <div className={`p-4 rounded-xl ${
              darkMode ? 'bg-gray-900/30' : 'bg-gray-100'
            }`}>
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 rounded-lg mr-4 ${
                  darkMode ? 'bg-gradient-to-br from-indigo-600 to-purple-600' : 'bg-gradient-to-br from-indigo-400 to-purple-400'
                }`}></div>
                <div>
                  <h4 className={`text-lg font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    Blinding Lights
                  </h4>
                  <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                    The Weeknd
                  </p>
                </div>
              </div>
              
              <div className="mb-4">
                <div className={`h-1 rounded-full mb-2 ${
                  darkMode ? 'bg-gray-700' : 'bg-gray-300'
                }`}>
                  <div className={`h-1 rounded-full ${
                    darkMode ? 'bg-indigo-500' : 'bg-indigo-400'
                  }`} style={{ width: '45%' }}></div>
                </div>
                <div className="flex justify-between text-sm">
                  <span className={darkMode ? 'text-gray-500' : 'text-gray-400'}>
                    1:45
                  </span>
                  <span className={darkMode ? 'text-gray-500' : 'text-gray-400'}>
                    3:20
                  </span>
                </div>
              </div>
              
              <div className="flex justify-center space-x-6">
                <button className={darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-800'}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>
                </button>
                
                <button className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  darkMode 
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
                    : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                }`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  </svg>
                </button>
                
                <button className={darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-800'}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;