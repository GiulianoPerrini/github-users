import { firebase, gitAuthProvider } from "../firebase/firebase-config";
import { types } from "../types/types";

export const loginWithGitHub = () => {
  return (dispatch) => {
    firebase.auth().signInWithPopup(gitAuthProvider);
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch(logout());
  };
};

export const login = (email, photoURL) => ({
  type: types.login,
  payload: {
    email,
    photoURL,
  },
});

export const logout = () => ({
  type: types.logout,
});
