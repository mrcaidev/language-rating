/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["src/{components,pages}/**/*.astro"],
  theme: {
    extend: {
      animation: {
        "github-corner": "github-corner 560ms ease-in-out",
      },
      keyframes: {
        "github-corner": {
          "0%, 100%": {
            transform: "rotate(0)",
          },
          "20%, 60%": {
            transform: "rotate(-25deg)",
          },
          "40%, 80%": {
            transform: "rotate(10deg)",
          },
        },
      },
    },
  },
};
