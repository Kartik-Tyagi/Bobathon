/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        ibm: {
          blue: '#0066FF',
          darkblue: '#1D70B8',
          lightblue: '#4589FF',
        },
      },
    },
  },
  plugins: [],
}

// Made with Bob
