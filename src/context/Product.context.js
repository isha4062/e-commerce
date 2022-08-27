/* eslint-disable array-callback-return */
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { cartReducer } from "../misc/custom-hooks";
import Products from '../products.json';

const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
  const [state , dispatch] = useReducer(cartReducer , {
    products: Products,
    cart: []
  });
  useEffect(() => {
    localStorage.setItem('inCart' , JSON.stringify(state.cart));
  }, [state.cart]);
  return (
    <ProductContext.Provider value={{state , dispatch}}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
