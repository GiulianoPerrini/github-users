import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { Home } from "../components/home/Home";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { firebase } from "../firebase/firebase-config";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
import { AuthRouter } from "./AuthRouter";

export const AppRouter = () => {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        setisAuthenticated(true);
        dispatch(login(user.email, user.photoURL));
        console.log(user);
      } else {
        setisAuthenticated(false);
      }
    });
  }, [dispatch, isAuthenticated]);

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/auth"
            component={AuthRouter}
            isAuthenticated={isAuthenticated}
          />
          <PrivateRoute
            exact
            path="/"
            component={Home}
            isAuthenticated={isAuthenticated}
          />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
