/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        'default': '370px',
        '50': '50px',
        '80': '80px',
        '100': '100px',
        '150': '150px',
        '180': '180px',
        '200': '200px'
      },
      colors: {
        'blue-main': '#3e8df4',
        'blue-dark': '#2980f2',
        'blue-medium': '#6ea9f7',
        'blue-semilight': '#9fc6f9',
        'blue-light': '#cfe2fc',

        'gray-main': '#999999',
        'gray-medium': '#cccccc',
        'gray-semilight': '#f5f5f5',
        'gray-light': '#fafbff'
      }
    },
  },
  plugins: [],
}
