import { FC, useContext } from "react";
import { userContext } from "../utils/user-context";
import { Logout } from "./logout/logout";
import { UserTasks } from "./user-tasks/user-tasks";

export const UserContent: FC = () => {
  const user = useContext(userContext);

  return (
    <div className="d-flex flex-column align-items-center">
      <p>Welcome, {user?.displayName}</p>
      <UserTasks />
      <Logout />
    </div>
  );
};
