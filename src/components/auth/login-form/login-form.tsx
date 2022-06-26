import { FC, FormEvent, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const LoginForm: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const auth = getAuth();

  const onLogin = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    ev.stopPropagation();
    signInWithEmailAndPassword(auth, email, password);
  };

  return (
    <form onSubmit={onLogin}>
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
        Log In
      </button>
    </form>
  );
};
