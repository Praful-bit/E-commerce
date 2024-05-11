import { useState } from "react";
import CartCard from "./CartCard";
import { userProduct } from "../../Context/ProductContext";

function Cart() {
  const { item } = userProduct();
  const [cartOpen, setCartOpen] = useState(false);
 
  const toggleCart = () => {
    if (item.length === 0) {
      
      alert("Your cart is empty!");
    } else {
      setCartOpen(!cartOpen);
    }
  };
  return (
    <>
      <button
        onClick={toggleCart}
        className="text-lg border-2 border-teal-600 cursor-pointer text-white py-1 px-4 rounded inline-block justify-end"
      >
        Cart
      </button>
      {cartOpen && (
        <div className="fixed top-0 right-0 bg-white p-4 border border-gray-300 text-black">
          {item.map((products) => (
            <CartCard key={products.id}  products={products} setCartOpen={setCartOpen} />
          ))}
        </div>
      )}
    </>
  );
}

export default Cart;
