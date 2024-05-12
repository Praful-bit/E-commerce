/* eslint-disable no-unused-vars */
import Header from "./Components/Header/Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { ProductProvider } from "./Context/ProductContext";
import Footer from "./Components/Footer/Footer";
function Layout() {
  const [cartActive, setCartActive] = useState(false);
   const [quan, setQuan] = useState(1);
  const [item, setProducts] = useState([]);
  const addToCart = (products) => {
    setProducts((prev) => [
      ...prev,
      {id:Date.now(), products },
    ]);
};
const deleteCartItem =(id)=>{
setProducts((prev) => prev.filter((product) => product.id !== id));
}
const setQuantity =(quantity,id)=>{
  setProducts((prev) =>
    prev.map((prevT) => (prevT.id === id ? { ...prevT, quantity } : prevT))
  );
}
const handleSet = (quantity, id) => {
  setQuantity(parseInt(quantity), id);
};

  return (
    <ProductProvider
      value={{ addToCart, item, deleteCartItem, setQuantity, handleSet }}
    >
      <Header setCartActive={setCartActive} cartActive={cartActive} />
      <Outlet cartActive={cartActive} />
      <Footer />
    </ProductProvider>
  );
}

export default Layout;
