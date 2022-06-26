import { FC, FormEvent, useState } from "react";
import { useDB } from "../../utils/use-db";
import { addDoc, collection } from "firebase/firestore";
import { userContext } from "../../utils/user-context";
import { useContext } from "react";

export const CreateTask: FC = () => {
  const [title, setTitle] = useState<string>("");
  const db = useDB();
  const user = useContext(userContext);

  const onCreateTask = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    ev.stopPropagation();
    await addDoc(collection(db, "tasks"), {
      title: title,
      userId: user!.uid,
    });
    setTitle("");
  };
  return (
    <form onSubmit={onCreateTask} className="d-flex btn-group m-2">
      <div className="form-group">
        <input
          type="title"
          className="form-control"
          placeholder="New task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
      </div>
      <button type="submit" className="btn btn-primary">
        Create
      </button>
    </form>
  );
};
