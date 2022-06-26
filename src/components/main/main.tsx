import { FC } from "react";
import { Auth } from "../auth/auth";

export const Main: FC = () => {
  return (
    <div className="vw-100 vh-100 d-flex align-items-center justify-content-center">
      <Auth />
    </div>
  );
};
