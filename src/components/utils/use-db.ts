import { getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const useDB = () => {
  const app = getApp();
  return getFirestore(app);
};
