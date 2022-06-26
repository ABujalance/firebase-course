import { FC } from "react";
import { getApp } from "firebase/app";
const App: FC = () => {
  return <div>{JSON.stringify(getApp())}</div>;
};

export default App;
