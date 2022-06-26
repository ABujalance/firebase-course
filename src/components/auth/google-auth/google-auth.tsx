import { FC } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const GoogleAuth: FC = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const onLoginClick = () => {
    signInWithPopup(auth, provider);
  };

  return (
    <button className="btn btn-primary" onClick={onLoginClick}>
      Google Login
    </button>
  );
};
