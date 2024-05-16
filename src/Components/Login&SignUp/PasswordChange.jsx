/* eslint-disable react/prop-types */
import { useRef } from "react";

function PasswordChange({ openPass, setOpenPass }) {
  const newEmail = useRef();

  const handleForget = (e) => {
    e.preventDefault();
    const enteredEmail = newEmail.current.value;

    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCOKftyHAw8eiitYZ7E54Hx5nRCbbX1iKQ`,
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "PASSWORD_RESET",
          email: enteredEmail,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    ).then((res) => {
      res.json();
    });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-lime-200">
      <form
        onSubmit={handleForget}
        className="bg-white p-8 rounded-xl shadow-lg"
      >
        <div className="mb-6">
          <label
            htmlFor="Email"
            className="block text-lg font-medium text-gray-700"
          >
            Email:
          </label>
          <input
            type="email"
            id="Email"
            ref={newEmail}
            required
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50 h-10"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-md transition duration-300 hover:bg-green-600"
        >
          Forget PassWord
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
