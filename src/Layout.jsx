/* eslint-disable no-unused-vars */
import Header from "./Components/Header/Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { ProductProvider } from "./Context/ProductContext";
import Footer from "./Components/Footer/Footer";
function Layout() {
  const [cartActive, setCartActive] = useState(false);
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
  return (
    <ProductProvider value={{ addToCart,item,deleteCartItem }}>
      <Header setCartActive={setCartActive} cartActive={cartActive} />
      <Outlet cartActive={cartActive} />
      <Footer/>
    </ProductProvider>
  );
}

export default Layout;
