module.exports = {
  content: [
    "./index.html",
    "./src/components/**/*.{html,js,jsx}",
    "./src/pages/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        primaryLight: '#e0f2fe',
        secondary: '#be123c',
        light: '#334155'
      },
    },
  },
  plugins: [],
}

