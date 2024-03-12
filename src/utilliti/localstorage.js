const getStorageCart = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    return JSON.parse(storedCartString);
  }
  return [];
};

const saveCartToLocalStorage = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

// add data to local storage********
const addToLocalStorage = (id) => {
  const cart = getStorageCart();
  cart.push(id);
  saveCartToLocalStorage(cart);
};

export { addToLocalStorage, getStorageCart };
