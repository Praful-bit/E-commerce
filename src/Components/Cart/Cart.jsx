import {  useState } from "react";
import { userProduct } from "../../Context/ProductContext";

function Cart() {
  const { item,deleteCartItem,handleSet } = userProduct();
  const [cartOpen, setCartOpen] = useState(false);
  



  const toggleCart = () => {
    if (item.length === 0) {
      alert("Your cart is empty!");
    } else {
      setCartOpen(!cartOpen);
    }
  };
   const handleBuy = () => {
     alert("Thank you for your purchase!");
     setCartOpen(false);
   };

  

   const calculateTotalAmount = () => {
     let total = 0;
     item.forEach((products) => {
       total += products.products.price * (products.quantity || 1);
     });
     return total;
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
        <div className="fixed top-0 right-0 bg-white p-4 border border-gray-300 text-black ">
          {item.map((products) => (
            <div
              key={products.id}
              className="flex items-center h-full p-4 border border-gray-300 rounded-lg shadow-md mb-4"
            >
              <div className="flex-shrink-0 mr-4">
                <img
                  src={products.products.imageUrl}
                  alt={products.products.title}
                  className="w-16 h-16 object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">
                  {products.products.title}
                </h3>
                <p className="text-gray-600">${products.products.price}</p>
                <div className="mt-2 flex items-center">
                  <input
                    type="number"
                    min="1"
                    defaultValue="1"
                    
                    onChange={(e) => handleSet(e.target.value, products.id)}
                    className="w-16 h-8 border border-gray-300 rounded-md px-2"
                  />
                
                  <button
                    onClick={() => deleteCartItem(products.id)}
                    className="ml-2 px-3 py-1 bg-red-500 text-white rounded-md"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
          <p className="flex justify-end text-black ">
            Total:{calculateTotalAmount()}
          </p>
          <button
            className="flex justify-center items-center bg-blue-700 text-white py-2 px-4 mt-2 rounded-lg"
            onClick={handleBuy}
          >
            Purchase
          </button>
        </div>
      )}
    </>
  );
}

export default Cart;
