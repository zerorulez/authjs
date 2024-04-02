const { Prisma } = require("@prisma/client");

const pickaxes = [
  {
    name: "Dawnstar",
    description: "",
    price: 0,
    multiplier: 1,
  },
  {
    name: "Ebony Shadow",
    description: "",
    price: 0,
    multiplier: 1,
  },
  {
    name: "Twilight Blade",
    description: "",
    price: 0,
    multiplier: 1,
  },
  {
    name: "Celestial Gleam",
    description: "",
    price: 0,
    multiplier: 1,
  },
  {
    name: "Black Diamond",
    description: "",
    price: 0,
    multiplier: 1,
  },
];

const planets = [
  {
    name: "Orinthus",
    description: "",
    price: 0,
    multiplier: 1,
  },
  {
    name: "Zephyria",
    description: "",
    price: 0,
    multiplier: 1,
  },
  {
    name: "Thalassia",
    description: "",
    price: 0,
    multiplier: 1,
  },
  {
    name: "Aerion",
    description: "",
    price: 0,
    multiplier: 1,
  },
  {
    name: "Nefarion",
    description: "",
    price: 0,
    multiplier: 1,
  },
];

const supplies = [
  {
    name: "Nutrient Bars",
    description: "",
    price: 0,
    multiplier: 1,
  },
  {
    name: "Dried fruits",
    description: "",
    price: 0,
    multiplier: 1,
  },
  {
    name: "Frozen Vegetables",
    description: "",
    price: 0,
    multiplier: 1,
  },
  {
    name: "Dehydrated soups",
    description: "",
    price: 0,
    multiplier: 1,
  },
  {
    name: "Packed Sandwich",
    description: "",
    price: 0,
    multiplier: 1,
  },
];

const items = [
  {
    name: "Meteormite",
    description: "",
    price: 0,
    multiplier: 1,
  },
  {
    name: "Cometite",
    description: "",
    price: 0,
    multiplier: 1,
  },
  {
    name: "Novaite",
    description: "",
    price: 0,
    multiplier: 1,
  },
  {
    name: "Lunarium",
    description: "",
    price: 0,
    multiplier: 1,
  },
  {
    name: "Solarium",
    description: "",
    price: 0,
    multiplier: 1,
  },
];

module.exports = {
  pickaxes,
  planets,
  items,
  supplies,
};
