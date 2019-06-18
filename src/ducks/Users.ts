import { Dispatch } from "redux";
import { IServices } from "../services";

export interface ILogin {
  email: string;
  password: string;
}

export default function reducer(state = {}) {
  return state;
}

export const login = ({ email, password }: ILogin) => async (
  dispatch: Dispatch,
  getState: () => any,
  { auth }: IServices
) => await auth.signInWithEmailAndPassword(email, password);

/***
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (error) {
    // tslint:disable-next-line: no-console
    console.error("Error Result: ", error);
  }
 */

export const register = ({ email, password }: ILogin) => async (
  dispatch: Dispatch,
  getState: () => any,
  { auth, db }: IServices
) => {
  const userCredential = await auth.createUserWithEmailAndPassword(
    email,
    password
  );
  const { user } = userCredential;
  const id = user ? user.uid : undefined;

  const doc = db.collection("users").doc(id);
  await doc.set({ role: "user" });
};

/***
  try {
    const user = await auth.createUserWithEmailAndPassword(email, password);
    // tslint:disable-next-line: no-console
    console.log("New User: ", user);
  } catch (error) {
    // tslint:disable-next-line: no-console
    console.error("Error Result: ", error.message);
  }
 */
