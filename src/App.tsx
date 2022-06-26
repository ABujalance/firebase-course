import { FC, useState } from "react";
import { Main } from "./components/main/main";
import { userContext } from "./components/utils/user-context";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

const App: FC = () => {
  const auth = getAuth();
  onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser) {
      setUser({ ...firebaseUser });
    } else {
      setUser(null);
    }
  });

  const [user, setUser] = useState<User | null>(auth.currentUser);

  return (
    <userContext.Provider value={user}>
      <Main />
    </userContext.Provider>
  );
};

export default App;
