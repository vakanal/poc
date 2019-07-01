import { AnyAction, Dispatch } from "redux";
import { IServices } from "../services";

const SUCCESS = "users/login-success";
const ERROR = "users/login-error";

export interface ILogin {
  email: string;
  password: string;
}

const loginSuccess = (payload: any) => ({
  payload,
  type: SUCCESS
});

const loginError = (error: Error) => ({
  error,
  type: ERROR
});

const initalState = {
  data: {},
  errorMessage: ""
};

export default function reducer(state = initalState, action: AnyAction) {
  switch (action.type) {
    case SUCCESS:
      return {
        ...state,
        data: action.payload
      };
    case ERROR:
      return {
        ...state,
        errorMessage: action.error
      };
    default:
      return state;
  }
}

export const login = ({ email, password }: ILogin) => async (
  dispatch: Dispatch,
  getState: () => any,
  { auth }: IServices
) => {
  try {
    const user = await auth.signInWithEmailAndPassword(email, password);
    // tslint:disable-next-line: no-console
    console.log("User: ", user);
    dispatch(loginSuccess(user));
  } catch (error) {
    // tslint:disable-next-line: no-console
    console.log(error);
    dispatch(loginError(error));
  }
};

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

export const logout = () => async (
  dispatch: Dispatch,
  getState: () => any,
  { auth }: IServices
) => {
  // tslint:disable-next-line: no-console
  console.log("LogOut");
  await auth.signOut();
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
