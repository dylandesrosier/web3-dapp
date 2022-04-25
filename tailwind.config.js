module.exports = {
  darkMode: "media",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      main: ['"OpenSans"'],
      title: ['"CerebriSans"'],
    },
    extend: {
      colors: {
        darkestBlue: "#01010f",
        darkBlue: "#05051C",
      },
    },
  },
  // variants: {
  //   extend: {
  //     backgroundColor: ["active"],
  //     textColor: ["active"],
  //     borderWidth: ["last", "hover", "active", "focus"],
  //     borderColor: ["hover", "active"],
  //     margin: ["group-hover", "last", "first"],
  //     opacity: ["hover"],
  //     textOpacity: ["hover"],
  //     backgroundOpacity: ["hover"],
  //     boxShadow: ["hover"],
  //   },
  // },
  plugins: [],
};
