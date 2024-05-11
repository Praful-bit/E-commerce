/* eslint-disable react/prop-types */

import { userProduct } from "../../Context/ProductContext";

function CartCard({ products, setCartOpen }) {
  const { deleteCartItem } = userProduct();
  const handleBuy = () => {
    alert("Thank you for your purchase!");
    setCartOpen(false)
  };

  return (
    <>
      <div className="flex items-center h-full p-4 border border-gray-300 rounded-lg shadow-md">
        <div className="flex-shrink-0 mr-4">
          <img
            src={products.products.imageUrl}
            alt={products.products.title}
            className="w-16 h-16 object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{products.products.title}</h3>
          <p className="text-gray-600">${products.products.price}</p>
          <div className="mt-2 flex items-center">
            <input
              type="number"
              min="1"
              defaultValue="1"
              className="w-16 h-8 border border-gray-300 rounded-md px-2"
            />
            <button
              onClick={() => deleteCartItem(products.id,setCartOpen(false))}
              className="ml-2 px-3 py-1 bg-red-500 text-white rounded-md"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <button onClick={handleBuy}>Purchase</button>
    </>
  );
}

export default CartCard;
