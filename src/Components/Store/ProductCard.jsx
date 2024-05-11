/* eslint-disable react/prop-types */
import {userProduct} from '..//../Context/ProductContext'
function ProductCard({ product }) {
const {addToCart}=userProduct()
const add =()=>{
  addToCart(product);  
}

  return (
    <>
      <div className="flex justify-center mt-12 ">
        <div className="max-w-xs bg-white shadow-md rounded-lg overflow-hidden ">
          <img
            className="w-full h-60 object-cover transition duration-700 ease-in transform hover:scale-150"
            src={product.imageUrl}
            alt={product.title}
          />
          <div className="p-4 ">
            <h3 className="text-gray-900 font-semibold text-lg my-12">{""}</h3>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-bold">${product.price}</span>
              <button onClick={()=>add(product)} className="px-2 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none ml-14">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
