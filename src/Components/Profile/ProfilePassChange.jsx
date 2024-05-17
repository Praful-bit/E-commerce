import { useContext,useRef } from 'react'
import { AuthContext } from "../../Context/AuthContext";
import { Link } from 'react-router-dom';
function ProfilePassChange() {
const {token} = useContext(AuthContext)
// console.log(token)
 const  newPasswordInput = useRef() 
 const handlePasswordChange =async(e)=>{
 e.preventDefault();
 const EnteredPassWord = newPasswordInput.current.value;
 try{
 const res = await fetch(
   `https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCOKftyHAw8eiitYZ7E54Hx5nRCbbX1iKQ`,
   {
     method: "POST",
     body: JSON.stringify({
       idToken: token,
       password: EnteredPassWord,
       returnSecureToken: false,
     }),
   }
 );
 const resData = await res.json()
  console.log(resData)
 } catch(err){
console.log(err)
 }

 }
  return (
    <div>
      <Link to="/profile"></Link>
      <div className="flex justify-center items-center h-screen bg-pink-200">
        <form
          onSubmit={handlePasswordChange}
          className="bg-white p-8 rounded-xl shadow-lg"
        >
          <div className="mb-6">
            <label
              htmlFor="pass"
              className="block text-lg font-medium text-gray-700"
            >
              Password:
            </label>
            <input
              type="password"
              id="pass"
              minLength="6"
              maxLength="10"
              ref={newPasswordInput}
              required
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50 h-10"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-md transition duration-300 hover:bg-green-600"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProfilePassChange