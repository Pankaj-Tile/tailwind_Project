/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens:{ 
      // we cannot extend screens
      xsm:'500px',
      md:'768px'


    },
    extend: {
      spacing:{
        // creating our own tailwind code here
      13: '300px'
      },
      fontSize:{
        '10xl' :['9rem',{lineHeight:'1.2'}]
      }
    },
  },
  plugins: [],
}

