// For adding item to the Cart
export const addToCart = (product) => {
    return {
      type: "ADD_ITEM",
      payload: product,
    };
  };
  
  // For deleting item from the Cart
  export const delFromCart = (product) => {
    return {
      type: "DEL_ITEM",
      payload: product,
    };
  };

  export const delProductFromCart = (product) => {
    return {
      type: "DEL_ONE_ITEM",
      payload: product,
    };
  };