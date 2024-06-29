// const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    extend: {
      colors: {
        "accent-1": "#E76F51",
        "accent-2": "#F4A261",
        "accent-3": "#E9C46A",
        "accent-4": "#36BA98",
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
