export const addToLocalStorage = (products) => {
  localStorage.setItem('products', JSON.stringify(products));
};

export const getFromLocalStorage = () => {
  const cart = JSON.parse(localStorage.getItem('products'));
  return cart;
};
