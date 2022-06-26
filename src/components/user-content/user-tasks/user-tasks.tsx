import { FC, useContext, useEffect, useState } from "react";
import { userContext } from "../../utils/user-context";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import type { Task } from "./task-types";
import { useDB } from "../../utils/use-db";
import { CreateTask } from "./create-task";

export const UserTasks: FC = () => {
  const user = useContext(userContext);
  const db = useDB();
  const userUid = user!.uid;
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const q = query(collection(db, "tasks"), where("userId", "==", userUid));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const result: Task[] = [];
      snapshot.docs.forEach((doc) => {
        result.push({ ...(doc.data() as Task), uid: doc.id });
      });
      setTasks(result);
    });
  }, [userUid, db]);

  return (
    <div>
      {tasks && tasks.length ? (
        <ul>
          {tasks.map((task) => {
            return <li key={task.uid}>{task.title}</li>;
          })}
        </ul>
      ) : (
        <p>No tasks available</p>
      )}
      <CreateTask />
    </div>
  );
};
