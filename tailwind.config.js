/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
    },
  },
  plugins: [],
}
// Dark
// --primary-100:#FFC107;
// --primary-200:#dda400;
// --primary-300:#916400;
// --accent-100:#8BC34A;
// --accent-200:#286400;
// --text-100:#FFFFFF;
// --text-200:#e0e0e0;
// --bg-100:#1B1B1B;
// --bg-200:#2a2a2a;
// --bg-300:#424242;

// Light
// --primary-100:#FFC107;
// --primary-200:#dda400;
// --primary-300:#916400;
// --accent-100:#673AB7;
// --accent-200:#ffc8ff;
// --text-100:#333333;
// --text-200:#5c5c5c;
// --bg-100:#F5F5F5;
// --bg-200:#ebebeb;
// --bg-300:#c2c2c2;
  