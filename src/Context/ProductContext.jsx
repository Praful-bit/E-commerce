/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";

export const ProductContext = createContext({
  item: [
    {
      id: 1,
      title: "Title",
      quantity: 0,
      price: 0,
    },
  ],
  addToCart: (products) => {},
  deleteCartItem:(id)=>{}
});

export const ProductProvider = ProductContext.Provider;

export const  userProduct =()=> {
  return useContext(ProductContext);
}
