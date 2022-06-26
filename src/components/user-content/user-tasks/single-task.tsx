import { FC, useState } from "react";
import { Task } from "./task-types";
import { deleteDoc, doc } from "firebase/firestore";
import { useDB } from "../../utils/use-db";

export const SingleTask: FC<{ task: Task; isUpdate?: boolean }> = ({
  task,
  isUpdate = false,
}) => {
  const db = useDB();
  const [update, setUpdate] = useState<boolean>(isUpdate);
  const onDeleteTask = async (taskId: string) => {
    await deleteDoc(doc(db, "tasks", taskId));
  };

  return (
    <span className="d-flex align-items-center">
      {task.title}
      <span>
        <button
          className="btn btn-link link-danger"
          onClick={() => onDeleteTask(task.uid)}
        >
          Delete
        </button>
      </span>
    </span>
  );
};
