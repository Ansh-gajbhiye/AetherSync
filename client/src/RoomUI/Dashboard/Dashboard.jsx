import React from 'react'

const Dashboard = () => {
  return (
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
  )
}

export default Dashboard