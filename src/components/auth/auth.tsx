import { FC } from "react";
import { GoogleAuth } from "./google-auth/google-auth";
export const Auth: FC = () => {
  /**Tell where people can find grid system for bootstrap*/
  return (
    <div className="container">
      <div className="row gx-5">
        <div className="col-sm d-flex flex-column align-items-center">
          <GoogleAuth></GoogleAuth>
        </div>
      </div>
    </div>
  );
};
