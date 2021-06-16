import React from "react";
import { useDispatch } from "react-redux";
import { loginWithGitHub } from "../../actions/auth";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const loginGitHub = () => {
    dispatch(loginWithGitHub());
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div>
        <Typography variant="h1" color="initial">
          Hello, this is my app!
        </Typography>
        <Button
          type="submit"
          onClick={loginGitHub}
          variant="contained"
          style={{
            backgroundColor: "#2a9d8f",
            color: "white",
            width: "35vw",
            height: "10vh",
          }}
          startIcon={<GitHubIcon />}
        >
          LOGIN WHITH GITHUB
        </Button>
      </div>
    </div>
  );
};
