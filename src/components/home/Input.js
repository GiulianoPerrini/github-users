import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Typography } from "@material-ui/core";

export const Input = ({ setuser }) => {
  const [state, setstate] = useState([]);

  const handleInputChange = (e) => {
    setstate(e.target.value);
  };

  const searchUsers = (e) => {
    e.preventDefault();
    setuser((user) => [...user, state]);
  };

  const useStyles = makeStyles((theme) => ({
    gridContainer: {
      height: "10vh",
      width: "100vw",
      margin: "20px",
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <Typography
        variant="h3"
        align="center"
        style={{ marginTop: "50px", color: "white" }}
      >
        Search GitHub Users
      </Typography>
      <form onSubmit={searchUsers}>
        <Grid
          container
          className={classes.gridContainer}
          justify="center"
          alignItems="center"
        >
          <TextField
            type="text"
            variant="outlined"
            value={state}
            label="user..."
            onChange={handleInputChange}
            style={{ width: "300px", minWidth: 100 }}
          />
          <Button
            variant="contained"
            type="submit"
            size="large"
            style={{
              backgroundColor: "#2a9d8f",
              color: "white",
              marginLeft: "10px",
            }}
          >
            Search users
          </Button>
        </Grid>
      </form>
    </div>
  );
};
