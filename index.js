const plugin = require("tailwindcss/plugin");

const touch = plugin(({ addVariant }) => {
  addVariant("pointer-coarse", "@media (pointer: coarse)");
  addVariant("pointer-fine", "@media (pointer: fine)");
  addVariant("pointer-none", "@media (pointer: none)");
  addVariant("hover-hover", "@media (hover: hover)");
  addVariant("hover-none", "@media (hover: none)");
});

module.exports = touch;
