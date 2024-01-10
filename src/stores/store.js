import Logo from "../assets/img/logo.jpeg";
import BlogTitle from "../assets/img/about.jpg";
import Slide from "../assets/img/slide.jpeg";
import { createStore } from "redux";

const initialState = {
  savedItems: JSON.parse(localStorage.getItem("saved-items") || "[]"),
  categories: [
    { id: 1, name: "vases", subCategories: null },
    { id: 2, name: "caskets & boxes", subCategories: null },
    { id: 3, name: "perfume bottles", subCategories: null },
    {
      id: 4,
      name: "plates & dinnerware",
      subCategories: ["plates", "tazza bowls"],
    },
    {
      id: 5,
      name: "drinkware",
      subCategories: ["decanters", "goblets", "glasses & cups", "ewers"],
    },
    { id: 6, name: "centerpieces", subCategories: null },
    { id: 7, name: "bowls", subCategories: ["punch bowls", "sugar bowls"] },
    { id: 8, name: "hookah bases", subCategories: null },
  ],
  products: [
    {
      id: 1,
      title: "product 1",
      subtitle:
        "kbdhufg kuoeurg uhogerg oif oiherg oihg g j ohgeohgerg ehroepg oheprger lerooger",
      imageUrl: Logo,
      subImages: [Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo],
      featured: true,
      categories: ["centerpieces", "punch bowls"],
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      dimensions: ["50 cm", "25 cm", "15 cm"],
    },
    {
      id: 2,
      title: "product 2",
      subtitle:
        "kbdhufg kuoeurg uhogerg oif oiherg oihg g j ohgeohgerg ehroepg oheprger lerooger",

      imageUrl: Logo,
      subImages: [Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo],
      featured: true,
      categories: ["vases"],
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      dimensions: ["50 cm", "25 cm"],
    },
    {
      id: 3,
      title: "product 3",
      subtitle:
        "kbdhufg kuoeurg uhogerg oif oiherg oihg g j ohgeohgerg ehroepg oheprger lerooger",

      imageUrl: Logo,
      subImages: [Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo],

      featured: true,
      categories: ["perfume bottles", "decanters"],
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      dimensions: ["50 cm", "25 cm", "15 cm"],
    },
    {
      id: 4,
      title: "product 4",
      subtitle:
        "kbdhufg kuoeurg uhogerg oif oiherg oihg g j ohgeohgerg ehroepg oheprger lerooger",

      imageUrl: Logo,
      subImages: [Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo],

      featured: true,
      categories: ["vases"],
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      dimensions: ["50 cm", "25 cm"],
    },
    {
      id: 5,
      title: "product 5",
      subtitle:
        "kbdhufg kuoeurg uhogerg oif oiherg oihg g j ohgeohgerg ehroepg oheprger lerooger",

      imageUrl: Logo,
      subImages: [Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo],

      featured: true,
      categories: ["decanters"],
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      dimensions: ["50 cm", "25 cm", "15 cm"],
    },
    {
      id: 6,
      title: "product 6",
      subtitle:
        "kbdhufg kuoeurg uhogerg oif oiherg oihg g j ohgeohgerg ehroepg oheprger lerooger",

      imageUrl: Logo,
      subImages: [Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo],

      featured: false,
      categories: ["goblets", "sugar bowls"],
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      dimensions: ["50 cm", "25 cm"],
    },
    {
      id: 7,
      title: "product 7",
      subtitle:
        "kbdhufg kuoeurg uhogerg oif oiherg oihg g j ohgeohgerg ehroepg oheprger lerooger",

      imageUrl: Logo,
      subImages: [Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo],

      featured: false,
      categories: ["vases", "glasses & cups"],
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      dimensions: ["50 cm", "25 cm", "15 cm"],
    },
    {
      id: 8,
      title: "product 8",
      subtitle:
        "kbdhufg kuoeurg uhogerg oif oiherg oihg g j ohgeohgerg ehroepg oheprger lerooger",

      imageUrl: Logo,
      subImages: [Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo],

      featured: false,
      categories: ["centerpieces", "goblets"],
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      dimensions: ["50 cm", "25 cm"],
    },
    {
      id: 9,
      title: "product 9",
      subtitle:
        "kbdhufg kuoeurg uhogerg oif oiherg oihg g j ohgeohgerg ehroepg oheprger lerooger",

      imageUrl: Logo,
      subImages: [Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo],

      featured: false,
      categories: ["vases", "goblets"],
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      dimensions: ["50 cm", "25 cm", "15 cm"],
    },
    {
      id: 10,
      title: "product 10",
      subtitle:
        "kbdhufg kuoeurg uhogerg oif oiherg oihg g j ohgeohgerg ehroepg oheprger lerooger",

      imageUrl: Logo,
      subImages: [Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo],

      featured: false,
      categories: ["centerpieces"],
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      dimensions: ["50 cm", "25 cm"],
    },
    {
      id: 11,
      title: "product 11",
      subtitle:
        "kbdhufg kuoeurg uhogerg oif oiherg oihg g j ohgeohgerg ehroepg oheprger lerooger",

      imageUrl: Logo,
      subImages: [Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo],

      featured: false,
      categories: ["vases", "centerpieces"],
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      dimensions: ["50 cm", "25 cm", "15 cm"],
    },
    {
      id: 12,
      title: "product 12",
      subtitle:
        "kbdhufg kuoeurg uhogerg oif oiherg oihg g j ohgeohgerg ehroepg oheprger lerooger",

      imageUrl: Logo,
      subImages: [Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo],

      featured: false,
      categories: ["punch bowls"],
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      dimensions: ["50 cm", "25 cm"],
    },
    {
      id: 13,
      title: "product 13",
      subtitle:
        "kbdhufg kuoeurg uhogerg oif oiherg oihg g j ohgeohgerg ehroepg oheprger lerooger",

      imageUrl: Logo,
      subImages: [Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo],

      featured: true,
      categories: ["hookah bases", "vases"],
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      dimensions: ["50 cm", "25 cm", "15 cm"],
    },
    {
      id: 14,
      title: "product 14",
      subtitle:
        "kbdhufg kuoeurg uhogerg oif oiherg oihg g j ohgeohgerg ehroepg oheprger lerooger",

      imageUrl: Logo,
      subImages: [Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo],

      featured: true,
      categories: ["vases"],
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      dimensions: ["50 cm", "25 cm"],
    },
    {
      id: 15,
      title: "product 15",
      subtitle:
        "kbdhufg kuoeurg uhogerg oif oiherg oihg g j ohgeohgerg ehroepg oheprger lerooger",

      imageUrl: Logo,
      subImages: [Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo],

      featured: true,
      categories: ["vases", "goblets"],
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      dimensions: ["50 cm", "25 cm", "15 cm"],
    },
    {
      id: 16,
      title: "product 16",
      subtitle:
        "kbdhufg kuoeurg uhogerg oif oiherg oihg g j ohgeohgerg ehroepg oheprger lerooger",

      imageUrl: Logo,
      subImages: [Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo],

      featured: false,
      categories: ["perfume bottles", "decanters"],
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      dimensions: ["50 cm", "25 cm"],
    },
    {
      id: 17,
      title: "product 17",
      subtitle:
        "kbdhufg kuoeurg uhogerg oif oiherg oihg g j ohgeohgerg ehroepg oheprger lerooger",

      imageUrl: Logo,
      subImages: [Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo],

      featured: false,
      categories: ["perfume bottles"],
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      dimensions: ["50 cm", "25 cm", "15 cm"],
    },
    {
      id: 18,
      title: "product 18",
      subtitle:
        "kbdhufg kuoeurg uhogerg oif oiherg oihg g j ohgeohgerg ehroepg oheprger lerooger",

      imageUrl: Logo,
      subImages: [Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo],

      featured: true,
      categories: ["centerpieces", "goblets"],
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      dimensions: ["50 cm", "25 cm"],
    },
    {
      id: 19,
      title: "product 19",
      subtitle:
        "kbdhufg kuoeurg uhogerg oif oiherg oihg g j ohgeohgerg ehroepg oheprger lerooger",

      imageUrl: Logo,
      subImages: [Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo],

      featured: false,
      categories: ["tazza bowls", "centerpieces"],
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      dimensions: ["50 cm", "25 cm", "15 cm"],
    },
    {
      id: 20,
      title: "product 20",
      subtitle:
        "kbdhufg kuoeurg uhogerg oif oiherg oihg g j ohgeohgerg ehroepg oheprger lerooger",

      imageUrl: Logo,
      subImages: [Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo],

      featured: true,
      categories: ["tazza bowls"],
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      dimensions: ["50 cm", "25 cm"],
    },
    {
      id: 21,
      title: "product 21",
      subtitle:
        "kbdhufg kuoeurg uhogerg oif oiherg oihg g j ohgeohgerg ehroepg oheprger lerooger",

      imageUrl: Logo,
      subImages: [Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo],
      featured: false,
      categories: ["caskets & boxes", "sugar bowls"],
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      dimensions: ["50 cm", "25 cm", "15 cm"],
    },
    {
      id: 22,
      title: "product 22",
      subtitle:
        "kbdhufg kuoeurg uhogerg oif oiherg oihg g j ohgeohgerg ehroepg oheprger lerooger",

      imageUrl: Logo,
      subImages: [Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo],

      featured: false,
      categories: ["caskets & boxes"],
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      dimensions: ["50 cm", "25 cm"],
    },
    {
      id: 23,
      title: "product 23",
      subtitle:
        "kbdhufg kuoeurg uhogerg oif oiherg oihg g j ohgeohgerg ehroepg oheprger lerooger",

      imageUrl: Logo,
      subImages: [Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo],

      featured: false,
      categories: ["centerpieces", "goblets"],
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      dimensions: ["50 cm", "25 cm", "15 cm"],
    },
    {
      id: 24,
      title: "product 24",
      subtitle:
        "kbdhufg kuoeurg uhogerg oif oiherg oihg g j ohgeohgerg ehroepg oheprger lerooger",

      imageUrl: Logo,
      subImages: [Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo],

      featured: true,
      categories: ["tazza bowls"],
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      dimensions: ["50 cm", "25 cm"],
    },
    {
      id: 25,
      title: "product 25",
      subtitle:
        "kbdhufg kuoeurg uhogerg oif oiherg oihg g j ohgeohgerg ehroepg oheprger lerooger",

      imageUrl: Logo,
      subImages: [Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo],

      featured: true,
      categories: ["vases"],
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      dimensions: ["50 cm", "25 cm", "15 cm"],
    },
    {
      id: 26,
      title: "product 26",
      subtitle:
        "kbdhufg kuoeurg uhogerg oif oiherg oihg g j ohgeohgerg ehroepg oheprger lerooger",

      imageUrl: Logo,
      subImages: [Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo],

      featured: false,
      categories: ["hookah bases"],
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      dimensions: ["50 cm", "25 cm"],
    },
  ],
  slides: [
    {
      id: 1,
      title: "title 1",
      subtitle: "subtitle 1",
      imageUrl: Slide,
      display: true,
    },
    {
      id: 2,
      title: "title 2",
      subtitle: "subtitle 2",
      imageUrl: Slide,
      display: true,
    },
    {
      id: 3,
      title: "title 3",
      subtitle: "subtitle 3",
      imageUrl: Slide,
      display: true,
    },
    {
      id: 4,
      title: "title 4",
      subtitle: "subtitle 4",
      imageUrl: Slide,
      display: true,
    },
    {
      id: 5,
      title: "title 5",
      subtitle: "subtitle 5",
      imageUrl: Slide,
      display: false,
    },
    {
      id: 6,
      title: "title 6",
      subtitle: "subtitle 6",
      imageUrl: Slide,
      display: false,
    },
    {
      id: 7,
      title: "title 7",
      subtitle: "subtitle 7",
      imageUrl: Slide,
      display: false,
    },
    {
      id: 8,
      title: "title 8",
      subtitle: "subtitle 8",
      imageUrl: Slide,
      display: false,
    },
  ],
  blogs: [
    {
      id: 1,
      sections: [
        {
          name: "first section",
          image: "https://picsum.photos/300/200",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        },

        {
          name: "second section",
          image: "https://picsum.photos/300/200",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        },
        {
          name: "third section",
          image: "https://picsum.photos/300/200",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        },
      ],
      cardImage: BlogTitle,
      title: "blog card 1",
      featured: false,
      published: true,
      introduction:
        "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
    },
    {
      id: 2,
      sections: [
        {
          name: "first section",
          image: "https://picsum.photos/300/200",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        },

        {
          name: "second section",
          image: "https://picsum.photos/300/200",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        },
        {
          name: "third section",
          image: "https://picsum.photos/300/200",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        },
      ],
      cardImage: BlogTitle,
      title: "blog card 2",
      featured: true,
      published: true,
      introduction:
        "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
    },
    {
      id: 3,
      sections: [
        {
          name: "first section",
          image: "https://picsum.photos/300/200",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        },

        {
          name: "second section",
          image: "https://picsum.photos/300/200",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        },
        {
          name: "third section",
          image: "https://picsum.photos/300/200",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        },
      ],
      cardImage: BlogTitle,
      title: "blog card 3",
      featured: false,
      published: true,
      introduction:
        "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
    },
    {
      id: 4,
      sections: [
        {
          name: "first section",
          image: "https://picsum.photos/300/200",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        },

        {
          name: "second section",
          image: "https://picsum.photos/300/200",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        },
        {
          name: "third section",
          image: "https://picsum.photos/300/200",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        },
      ],
      cardImage: BlogTitle,
      title: "blog card 4",
      featured: false,
      published: false,
      introduction:
        "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
    },
    {
      id: 5,
      sections: [
        {
          name: "first section",
          image: "https://picsum.photos/300/200",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        },

        {
          name: "second section",
          image: "https://picsum.photos/300/200",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        },
        {
          name: "third section",
          image: "https://picsum.photos/300/200",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        },
      ],
      cardImage: BlogTitle,
      title: "blog card 5",
      featured: true,
      published: true,
      introduction:
        "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
    },
    {
      id: 6,
      sections: [
        {
          name: "first section",
          image: "https://picsum.photos/300/200",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        },

        {
          name: "second section",
          image: "https://picsum.photos/300/200",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        },
        {
          name: "third section",
          image: "https://picsum.photos/300/200",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        },
      ],
      cardImage: BlogTitle,
      title: "blog card 6",
      featured: false,
      published: true,
      introduction:
        "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
    },
    {
      id: 7,
      sections: [
        {
          name: "first section",
          image: "https://picsum.photos/300/200",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        },

        {
          name: "second section",
          image: "https://picsum.photos/300/200",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        },
        {
          name: "third section",
          image: "https://picsum.photos/300/200",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        },
      ],
      cardImage: BlogTitle,
      title: "blog card 7",
      featured: false,
      published: false,
      introduction:
        "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
    },
    {
      id: 8,
      sections: [
        {
          name: "first section",
          image: "https://picsum.photos/300/200",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        },

        {
          name: "second section",
          image: "https://picsum.photos/300/200",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        },
        {
          name: "third section",
          image: "https://picsum.photos/300/200",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        },
      ],
      cardImage: BlogTitle,
      title: "blog card 8",
      featured: true,
      published: true,
      introduction:
        "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
    },
  ],
};

export const getCategories = () => (state) => {
  return state.categories;
};

export const getSubCategories = (categorieId) => (state) => {
  return state.categories.filter((category) => category.id == categorieId)
    .subCategories;
};

export const getFeaturedBlogs = () => (state) => {
  return state.blogs.filter((blog) => blog.featured === true);
};

export const getBlogs = () => (state) => {
  return state.blogs.filter((blog) => blog.published === true);
};

export const getSlides = () => (state) => {
  return state.slides.filter((slide) => slide.display === true);
};

export const getLatestProducts = (num) => (state) =>
  state.products.slice(state.products.length - num, state.products.length);

export const getFeaturedProducts = (num) => (state) => {
  const featured = state.products.filter(
    (product) => product.featured === true
  );
  return featured.slice(featured.length - num, featured.length);
};

export const saveItem = (id) => {
  return { type: "SAVE_ITEM", payload: id };
};
export const unsaveItem = (id) => {
  return { type: "UNSAVE_ITEM", payload: id };
};

const savedItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_ITEM":
      const newSavedItems = [...state.savedItems, action.payload];
      localStorage.setItem("saved-items", JSON.stringify(newSavedItems));

      return { ...state, savedItems: [...state.savedItems, action.payload] };
    case "UNSAVE_ITEM":
      const remainingItems = state.savedItems.filter(
        (id) => id !== action.payload
      );
      localStorage.setItem("saved-items", JSON.stringify(remainingItems));
      return {
        ...state,
        savedItems: state.savedItems.filter((id) => id !== action.payload),
      };
    default:
      return state;
  }
};

export const store = createStore(savedItemsReducer);
