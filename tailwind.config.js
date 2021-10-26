module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "hero-desktop": "url('../assets/images/image-hero-desktop.jpg')",
        "hero-mobile": "url('../assets/images/image-hero-mobile.jpg')",
      },
      fontFamily: {
        Commissioner: ["Commissioner", "sans-serif"]
      },
      height: {
        "300": "300px",
        "400": "400px",
        "500": "500px",
        "600": "600px",
      },
      colors: {
        "moderate-cyan": "#3cb4ac",
        "dark-cyan": "#147b74",
        "dark-gray": "#7a7a7a",
      }
    },
  },
  variants: {
    extend: {}
  },
  plugins: [],
}
