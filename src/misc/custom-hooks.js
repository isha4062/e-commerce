export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case "ADD_QTY":
      return{
        ...state,
        cart: state.cart.filter((c) => {
          if (c.id === action.payload.id){
            c.qty = c.qty+1
          }
          return state.cart
        })
      }
    default:
      return state;
  }
};