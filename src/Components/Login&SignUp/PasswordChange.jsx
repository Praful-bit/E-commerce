/* eslint-disable react/prop-types */
import { useContext, useRef } from "react";
import { AuthContext } from "../../Context/AuthContext";

function PasswordChange({ openPass, setOpenPass }) {
  const authCnx = useContext(AuthContext);
  console.log(authCnx.token);
  const newPasswordInput = useRef();

  const handlePasswordChange = (e) => {
    e.preventDefault();
    const enteredPassword = newPasswordInput.current.value;

    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCOKftyHAw8eiitYZ7E54Hx5nRCbbX1iKQ`,
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCnx.token,
          password: enteredPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    )
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-green-100">
      <form
        onSubmit={handlePasswordChange}
        className="bg-white p-8 rounded-xl shadow-lg"
      >
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-lg font-medium text-gray-700"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
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

        {openPass && (
          <button
            className="w-full mt-2 bg-green-500 text-white font-semibold py-2 px-4 rounded-md transition duration-300 hover:bg-green-600"
            onClick={() => setOpenPass(false)}
          >
            Back To login Page!
          </button>
        )}
      </form>
    </div>
  );
}

export default PasswordChange;
