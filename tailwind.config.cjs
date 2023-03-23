module.exports = {
  mode:"jit",
  content: [
    "./src/components/home/**/*.{html,jsx}",
    "./src/pages/**/*.{html,jsx}",
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

