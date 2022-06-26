import { FC } from "react";
import { GoogleAuth } from "./google-auth/google-auth";
import { LoginForm } from "./login-form/login-form";
import { RegisterForm } from "./register-form/register-form";

export const Auth: FC = () => {
  /**Tell where people can find grid system for bootstrap*/
  return (
    <div className="container">
      <div className="row gx-5">
        <div className="col-sm d-flex flex-column align-items-center">
          <GoogleAuth></GoogleAuth>
        </div>
        <div className="col-sm d-flex flex-column d-flex flex-column">
          <RegisterForm></RegisterForm>
        </div>
        <div className="col-sm d-flex flex-column d-flex flex-column">
          <LoginForm></LoginForm>
        </div>
      </div>
    </div>
  );
};
