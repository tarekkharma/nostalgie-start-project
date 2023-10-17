import Logo from "../assets/img/logo.jpeg";
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
};

export const saveItem = (id) => {
  return { type: "SAVE_ITEM", payload: id };
};

export const getLatestProducts = (num) => (state) =>
  state.products.slice(state.products.length - num, state.products.length);

export const getFeaturedProducts = (num) => (state) => {
  const filtered = state.products.filter(
    (product) => product.featured === true
  );
  return filtered.slice(filtered.length - num, filtered.length);
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
