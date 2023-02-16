import React from "react";
import InputField from "./SubComponents/inputField";
import ButtonField from "./SubComponents/buttonField";
import FormHeader from "./SubComponents/formHeader";

const Login = () => {
  return (
    <section id="signIn">
      <div className="container">
        <div className="container-inside">
          <FormHeader
            title="Sign In"
            subtitle="You don’t have an account yet ?"
            subtitleLink="Sign Up"
          />

          <form class="  rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <InputField
                label="Email"
                id="email"
                type="email"
                placeholder="Enter your email"
              />

              <InputField
                label="Password"
                id="password"
                type="password"
                placeholder="Enter your password"
              />

              <p className="align-left">
                {" "}
                <a
                  className="typography-small-text forgot-password-link"
                  href="#"
                >
                  Forgot Password?
                </a>
              </p>
            </div>
            <div className="button-container">
              <ButtonField text="Login" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
