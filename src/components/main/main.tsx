import { FC, useContext } from "react";
import { Auth } from "../auth/auth";
import { UserContent } from "../user-content/user-content";
import { userContext } from "../utils/user-context";

export const Main: FC = () => {
  const user = useContext(userContext);
  return (
    <div className="vw-100 vh-100 d-flex align-items-center justify-content-center">
      {user ? <UserContent></UserContent> : <Auth></Auth>}
    </div>
  );
};
