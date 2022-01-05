module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        brand: '#11C353',
        highlight: '#AC1313',
        base1: '#FFFFFF',
        base2: '#F2F3F5',
        text: '#000000',
        'text-light': '#6C6C6C'
      },

    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
