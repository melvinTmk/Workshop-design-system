import React from "react";

const Register = () => {
  return (
    <section id="signUp">
      <div className="container">
        <div className="container-inside">
          <div className="titre">
            <h1>Sign Up</h1>
            <p>
              You already have an account ?{" "}
              <span className="link-color-primary">
                <a> Log In</a>
              </span>
            </p>
          </div>

          <form class="bg-white rounded px-8 pb-8 mb-4">
            <div className="grid gap-4 md:grid-cols-2 ">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 label-form"
                  for="username"
                >
                  First Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="firstName"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 label-form"
                  for="username"
                >
                  Last Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="lastName"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 label-form"
                  for="username"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder=" Ex: name@mail.com "
                />
              </div>
              <div class="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 label-form"
                  for="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="8 characters minimum"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 label-form"
                  for="email"
                >
                  Confirm your email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="confirm-email"
                  type="text"
                  placeholder="Enter your email"
                />
              </div>
              <div class="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 label-form"
                  for="password"
                >
                  Confirm your password
                </label>
                <input
                  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="confirm-password"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline button-form"
                type="button"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
