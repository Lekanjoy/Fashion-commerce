import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../firebase";

const Login = () => {
  // Handle Login With credentials
  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();


  async function handleLogin(e) {
    e.preventDefault();
    try {
      await login(emailRef.current.value, passwordRef.current.value);
      navigate('/cart')
    } catch (error) {
      alert("Invalid Credentials");
    }
  }

  return (
    <div class="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-md">
      <h2 class="text-2xl font-bold mb-5">Login</h2>
      <form onSubmit={handleLogin}>
        <div class="mb-4">
          <label class="block font-semibold mb-2" for="email">
            Email
          </label>
          <input
          ref={emailRef}
            class="w-full px-3 py-2 border rounded-md"
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block font-semibold mb-2" for="password">
            Password
          </label>
          <input
          ref={passwordRef}
            class="w-full px-3 py-2 border rounded-md"
            type="password"
            id="password"
            name="password"
            required
          />
        </div>
        <button
          class="w-full px-4 py-2 text-white font-semibold bg-blue-500 rounded-md hover:bg-blue-600"
          type="submit"
        >
          Login
        </button>
        <hr class="my-5 border-gray-300" />
        <button
          class="w-full px-4 py-2 text-white font-semibold bg-red-500 rounded-md hover:bg-red-600"
          type="button"
        >
          Login with Google
        </button>
      </form>
      <p className="mt-5 text-center">
        Do not have an account?{" "}
        <Link
          to="/signup"
          className="text-blue-500 font-semibold hover:underline"
          href="#"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Login;
