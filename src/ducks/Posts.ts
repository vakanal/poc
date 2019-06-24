import { firestore } from "firebase";
import { AnyAction, Dispatch } from "redux";
import { IServices } from "../services";

const START = "posts/fetch-start";
const SUCCESS = "posts/fetch-success";
const ERROR = "posts/fetch-error";

export interface IPostsData {
  [key: string]: {
    comment: string;
    createdAt: firestore.Timestamp;
    imageURL: string;
    userId: string;
  };
}

const fetchStart = () => ({
  type: START
});
const fetchSuccess = (payload: IPostsData) => ({
  payload,
  type: SUCCESS
});
const fetchError = (error: Error) => ({
  error,
  type: ERROR
});

const initalState = {
  data: {},
  fetched: false,
  fetching: false
};

export default function reducer(state = initalState, action: AnyAction) {
  switch (action.type) {
    case START:
      return {
        ...state,
        fetching: true
      };
    case SUCCESS:
      return {
        ...state,
        data: action.payload,
        fetched: true,
        fetching: false
      };
    case ERROR:
      return {
        ...state,
        error: action.error,
        fetching: false
      };
    default:
      return state;
  }
}

export const fetchPosts = () => async (
  dispatch: Dispatch,
  getState: () => any,
  { db, storage }: IServices
) => {
  dispatch(fetchStart());

  try {
    const posts = {};

    const snaps = await db.collection("posts").get();
    snaps.forEach(x => (posts[x.id] = x.data()));

    const imgIds = await Promise.all(
      Object.keys(posts).map(async x => {
        const ref = storage.ref(`posts/${x}.jpg`);
        const url = await ref.getDownloadURL();
        return [x, url];
      })
    );

    const keyedImages = {};
    imgIds.forEach(x => (keyedImages[x[0]] = x[1]));

    Object.keys(posts).forEach(
      x =>
        (posts[x] = {
          ...posts[x],
          imageURL: keyedImages[x]
        })
    );

    dispatch(fetchSuccess(posts));
  } catch (error) {
    // tslint:disable-next-line: no-console
    console.log(error);
    dispatch(fetchError(error));
  }
};

export const like = (id: string) => async (
  dispatch: Dispatch,
  getState: () => any,
  { auth }: IServices
) => {
  // tslint:disable-next-line: no-console
  console.log(id);
  if (!auth.currentUser) {
    return;
  }
  const token = await auth.currentUser.getIdToken();
  const result = await fetch("/api/posts", {
    headers: {
      authorization: token
    }
  });
  const text = result.text();
  // tslint:disable-next-line: no-console
  console.log(text);
};

export const share = (id: string) => async (
  dispatch: Dispatch,
  getState: () => any,
  {  }: IServices
) => {
  // tslint:disable-next-line: no-console
  console.log(id);
};
