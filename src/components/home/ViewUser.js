import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  img: {
    maxWidth: 200,
  },
}));

export const ViewUser = ({ data, repositories }) => {
  const classes = useStyles();

  const { login, avatar_url, type } = data;

  return (
    <div>
      <Hidden xsDown>
        <div>
          <Accordion style={{ backgroundColor: "#e9c46a" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Grid
                container
                justify="center"
                alignItems="center"
                direction="row"
              >
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={3} style={{ textAlign: "center" }}>
                      <Typography>UserName</Typography>
                    </Grid>
                    <Grid item xs={3} style={{ textAlign: "center" }}>
                      <Typography>Avatar</Typography>
                    </Grid>
                    <Grid item xs={3} style={{ textAlign: "center" }}>
                      <Typography>Respositorios</Typography>
                    </Grid>
                    <Grid item xs={2} style={{ textAlign: "center" }}>
                      <Typography>Organizacion</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails style={{ marginLeft: "150px" }}>
              <Grid container>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={2}>
                      <Typography>{login}</Typography>
                    </Grid>
                    <Grid item xs={3} style={{ textAlign: "center" }}>
                      <img src={avatar_url} alt="alt" className={classes.img} />
                    </Grid>
                    <Grid item xs={3}>
                      {repositories.map((info) => (
                        <ListItem
                          key={info.name}
                          style={{ textAlign: "center" }}
                        >
                          <ListItemText primary={info.name} />
                        </ListItem>
                      ))}
                    </Grid>
                    <Grid item xs={3} style={{ textAlign: "center" }}>
                      {type === "User" ? (
                        <Typography>No</Typography>
                      ) : (
                        <Typography>Si</Typography>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </div>
      </Hidden>
      <Hidden smUp>
        <div style={{ marginTop: "50px" }}>
          <Accordion style={{ backgroundColor: "#e9c46a" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>UserName</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6" color="initial">
                {login}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ backgroundColor: "#e9c46a" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Avatar</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <img src={avatar_url} alt="alt" className={classes.img} />
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ backgroundColor: "#e9c46a" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Repositorios</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {repositories.map((info) => (
                <ListItem key={info.name} style={{ textAlign: "center" }}>
                  <ListItemText primary={info.name} />
                </ListItem>
              ))}
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ backgroundColor: "#e9c46a" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Organizaciones</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {type === "User" ? (
                <Typography>No</Typography>
              ) : (
                <Typography>Si</Typography>
              )}
            </AccordionDetails>
          </Accordion>
        </div>
      </Hidden>
    </div>
  );
};
