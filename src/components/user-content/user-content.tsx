import { FC, useContext } from "react";
import { userContext } from "../utils/user-context";

export const UserContent: FC = () => {
  const user = useContext(userContext);

  return (
    <div className="d-flex flex-column align-items-center">
      <p>Welcome, {user?.displayName}</p>
    </div>
  );
};
