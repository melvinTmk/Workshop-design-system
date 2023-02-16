import React from "react";
import InputField from "./SubComponents/inputField";
import ButtonField from "./SubComponents/buttonField";
import FormHeader from "./SubComponents/formHeader";

const Register = () => {
  return (
    <section id="reset-password">
      <div className="container">
        <div className="container-inside">
          <FormHeader
            title="Reset Password"
            subtitle="You forgot your password ? Create a new one here."
          />

          <form class=" rounded pt-6 px-8 pb-8 mb-4">
            <div className="grid gap-4 md:grid-cols-1 ">
              <InputField
                label="New Password"
                id="newPassword"
                type="password"
                placeholder="Enter your new password"
              />

              <InputField
                label="Confirm New Password"
                id="confirmNewPassword"
                type="password"
                placeholder="Enter your new Password"
              />
            </div>
            <div className="flex items-center justify-center gap-6">
              <ButtonField text="Cancel" name="cancel" />
              <ButtonField text="Confirm" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
