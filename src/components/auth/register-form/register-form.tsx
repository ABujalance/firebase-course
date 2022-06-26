import { FC, FormEvent, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

export const RegisterForm: FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const auth = getAuth();

  const onRegister = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    ev.stopPropagation();
    createUserWithEmailAndPassword(auth, email, password).then((response) => {
      const user = response.user;
      return updateProfile(user, { displayName: name });
    });
  };

  return (
    <form onSubmit={onRegister}>
      <div className="form-group">
        <label>
          Full Name{" "}
          <input
            type="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </label>
      </div>
      <div className="form-group">
        <label>
          Email address{" "}
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </label>
      </div>
      <div className="form-group">
        <label>
          Password{" "}
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </label>
      </div>
      <button type="submit" className="btn btn-primary mt-4">
        Register
      </button>
    </form>
  );
};
