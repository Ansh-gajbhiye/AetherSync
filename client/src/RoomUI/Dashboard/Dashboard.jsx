import React from 'react'

const Dashboard = () => {
  return (
      <div 
      className="relative w-full min-h-screen"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.9), url('https://images.unsplash.com/photo-1519681393784-d120267933ba')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center px-6 py-12 relative z-10">
          <h1 className="text-5xl text-white font-extrabold leading-tight">
             Chat With Music{' '}
            <span className="text-indigo-400">Songs &amp; fun</span>
          </h1>
          <p className="text-lg text-white max-w-md">
            MyApp makes it easy to hang out, build communities, and share moments.
          </p>
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-indigo-500 rounded-full font-semibold hover:bg-indigo-600 transition">
              Open in Browser
            </button>
            <button className="px-6 py-3 bg-white border-2 border-white rounded-full font-semibold hover:bg-white hover:text-indigo-900 transition">
              Download Desktop
            </button>
          </div>
        </div>

    
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          
        </div>
      </div>
  )
}

export default Dashboard