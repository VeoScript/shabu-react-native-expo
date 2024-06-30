// const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    extend: {
      colors: {
        "accent-1": "#FFFFFF",
        "accent-2": "#2D2D2D",
        "accent-3": "#A8A8A8",
        "accent-4": "#ED3737",
      },
      fontFamily: {
        "space-mono": ["SpaceMono"],
        poppins: ["Poppins"],
        "poppins-bold": ["PoppinsBold"],
        "poppins-light": ["PoppinsLight"],
      },
    },
  },
  // plugins: [
  //   plugin(({ addUtilities }) => {
  //     addUtilities({
  //       "backgroundImage": {
  //         backgroundImage: 'Poppins-Regular',
  //       },
  //     });
  //   }),
  // ],
};
