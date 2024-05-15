// import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Data } from "../Data/Data";
// import ProductDisplay from "../ProductDisplay/ProductDisplay";

function StoreUserProduct() {
const { userId } = useParams();
const products = Data.find((x) =>
  console.log(x.id, parseInt(userId)
  
));
  console.log(userId);

 console.log(products);

  return (
    <div>
      <h3>User: </h3>
      {/* {product.map((items) => (
        <div key={items.id}>
         { console.log(items)}
          <ProductDisplay key={items.id} item={items} />
        </div>
      ))} */}
    </div>
  );
}

export default StoreUserProduct;
