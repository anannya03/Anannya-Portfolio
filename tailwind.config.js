const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'blue': '#010127',
      'amber': '#F9E897',
      'amber-dark': '#e1c432',
      'white': '#fff',
      'black': '#000',
      'gridCircle': '#5e5e8e',
      'hoverCircle': 'rgb(82 82 91);',
      'contact': 'rgb(43, 43, 64);',
      'project': 'rgb(54, 54, 66);',
      'projectModal': 'rgb(25, 25, 46);'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
