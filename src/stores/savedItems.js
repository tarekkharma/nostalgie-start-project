import Logo from "../assets/img/logo.jpeg";
import Slide from "../assets/img/slide.jpeg";
import { createStore, combineReducers } from "redux";

const initialState = {
  savedItems: JSON.parse(localStorage.getItem("saved-items") || "[]"),
  products: [
    {
      id: 1,
      title: "product 1",
      imageUrl: Logo,
      featured: true,
    },
    {
      id: 2,
      title: "product 2",
      imageUrl: Logo,
      featured: true,
    },
    {
      id: 3,
      title: "product 3",
      imageUrl: Logo,
      featured: true,
    },
    {
      id: 4,
      title: "product 4",
      imageUrl: Logo,
      featured: true,
    },
    {
      id: 5,
      title: "product 5",
      imageUrl: Logo,
      featured: true,
    },
    {
      id: 6,
      title: "product 6",
      imageUrl: Logo,
      featured: false,
    },
    {
      id: 7,
      title: "product 7",
      imageUrl: Logo,
      featured: false,
    },
    {
      id: 8,
      title: "product 8",
      imageUrl: Logo,
      featured: false,
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
