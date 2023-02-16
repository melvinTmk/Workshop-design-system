import React from "react";
import InputField from "./SubComponents/inputField";
import ButtonField from "./SubComponents/buttonField";
import FormHeader from "./SubComponents/formHeader";

const Register = () => {
  return (
    <section id="signUp">
      <div className="container">
        <div className="container-inside">
          <FormHeader
            title="Sign Up"
            subtitle="You already have an account ?"
            subtitleLink="Sign In"
          />

          <form class=" rounded pt-6 px-8 pb-8 mb-4">
            <div className="grid gap-4 md:grid-cols-2 ">
              <InputField
                label="First Name"
                id="firstName"
                type="text"
                placeholder="First Name"
              />

              <InputField
                label="Last Name"
                id="lastName"
                type="text"
                placeholder="Last Name"
              />

              <InputField
                label="Email"
                id="email"
                type="email"
                placeholder="Ex: name@mail.com"
              />

              <InputField
                label="Password"
                id="password"
                type="password"
                placeholder="8 characters minimum"
              />

              <InputField
                label="Confirm your email"
                id="confirm-email"
                type="email"
                placeholder="Enter your email"
              />

              <InputField
                label="Confirm your password"
                id="confirm-password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-center">
              <ButtonField text="Sign Up" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
