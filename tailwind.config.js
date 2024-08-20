/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter:["Inter","sans-serif"]
      },
      height:{
        0.5:"2px",
        0.25:'0.5px',
        90:'360px'
      },
      borderWidth:{
        0.25:'0.5px',
        1:'1px'
      },
      boxShadow:{
        '3xl':'0 4px 8px 0 rgba(0, 0, 0, 0.6);',
      },
      gridTemplateColumns:{
        custom:'3fr 2fr 2fr 1fr '
      }
      
    },
  },
  plugins: [],
}

