/** @type {import('tailwindcss').Config} */
  module.exports = {
 content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
    extend: {
      colors: {
        primary: {
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
        },
        accent: {
          600: '#7c3aed',
          500: '#8b5cf6',
          400: '#a78bfa',
        },
        discord: {
          dark: '#36393f',
          darker: '#2f3136',
          blue: '#5865f2',
        }
      }
    }
  },
  plugins: [],
}

