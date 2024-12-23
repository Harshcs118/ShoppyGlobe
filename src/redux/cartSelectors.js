export const selectCartItems = (state) => state.cart.cartItems;

export const selectTotalPrice = (state) => {
  return state.cart.cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
};
