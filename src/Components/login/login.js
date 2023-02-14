import React from "react";

const Login = () => {
  return (
    <section id="signIn">
      <div className="container">
        <div className="container-inside">
          <div className="titre">
            <h1>Sign In</h1>
            <p>
              You don’t have an account yet ?{" "}
              <span className="link-color-primary">
                <a> Sign Up</a>
              </span>
            </p>
          </div>

          <form class="bg-white  rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 label-form"
                for="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Enter your email"
              />
            </div>
            <div class="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 label-form"
                for="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
              <p className="float-left">
                {" "}
                <a
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  href="#"
                >
                  Forgot Password?
                </a>
              </p>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline button-form"
                type="button"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
