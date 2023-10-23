/*const savedItemsReducer = (state = initialState, action) => {
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

export default savedItemsReducer; */
