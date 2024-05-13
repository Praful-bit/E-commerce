import { useEffect } from 'react';
import {useParams} from 'react-router-dom'

function StoreUserProduct() {
   const { userId } = useParams();
useEffect(()=>{
    fetch()
})
  return (
    <div>
      User: {userId}
     
    </div>
  );
}

export default StoreUserProduct