/* eslint-disable no-unused-vars */
import Header from "./Components/Header/Header";
import { Outlet } from "react-router-dom";
import { useContext, useState } from "react";
import { ProductProvider } from "./Context/ProductContext";
import Footer from "./Components/Footer/Footer";
import LoginPage from "./Components/Login&SignUp/LoginPage";
import { AuthContext } from "./Context/AuthContext";



function Layout() {
  const {token} = useContext(AuthContext)
  console.log(token);
  
  const [cartActive, setCartActive] = useState(false);

  const [item, setProducts] = useState([]);
  const addToCart = (products) => {
    setProducts((prev) => [...prev, { id: Date.now(), products }]);
  };
  const deleteCartItem = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };
  const setQuantity = (quantity, id) => {
    setProducts((prev) =>
      prev.map((prevT) => (prevT.id === id ? { ...prevT, quantity } : prevT))
    );
  };
  const handleSet = (quantity, id) => {
    setQuantity(parseInt(quantity), id);
  };

  const handleApiCall = async (user) => {
    try {
      const response = await fetch(
        `https://ecom-api-8ff76-default-rtdb.firebaseio.com/user.json`,
        {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
       const data = await response.json();
        console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <ProductProvider
      value={{
        addToCart,
        item,
        deleteCartItem,
        setQuantity,
        handleSet,
        handleApiCall,
      }}
    >
      
      {!token && <LoginPage />}
      {token && (
        <div>
          <Header setCartActive={setCartActive} cartActive={cartActive} />
          <Outlet cartActive={cartActive} />
          <Footer />
        </div>
      )}
    </ProductProvider>
  );
}

export default Layout;
