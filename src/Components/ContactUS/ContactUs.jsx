import {useState} from 'react'
import { Link } from 'react-router-dom';
import { userProduct } from '../../Context/ProductContext';
function ContactUs() {
    
    const [userName,setUserName] = useState("")
    const [userEmail,setUserEmail] = useState("")
    const [userPhone,setUserPhone] = useState(0)
const {handleApiCall} = userProduct()

    

    const handleSubmit = (e) => {
      e.preventDefault();
       const user ={
         name:userName,
         email:userEmail,
         number:userPhone
       }
       handleApiCall(user)
      setUserEmail('')
      setUserName('')
      setUserPhone(0)
    };

  return (
    <div className='h-screen pt-24'>
    <Link to="/contactUs"></Link>
      <div className="container mx-auto mt-8">
        <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={userName}
              onChange={(e)=>setUserName(e.target.value)}
              placeholder="Enter your name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userEmail}
              onChange={(e)=>setUserEmail(e.target.value)}
              placeholder="Enter your email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="phone"
              className="block text-gray-700 font-bold mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={userPhone}
              onChange={(e)=>setUserPhone(e.target.value)}
              placeholder="Enter your phone number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs