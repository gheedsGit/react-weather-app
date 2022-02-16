import React from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    paddingTop: theme.spacing(3),
    display: "flex",
    width: "320px",
    flexDirection: "column",
    alignItems: "center",
    height: "445px",
    border: "2px solid",
    boxShadow: "2px 2px #00f0ff",
  },
}));

const MainContainer = ({ children }) => {
    const styles = useStyles();

  return <Container className={styles.root} component={Card}>{children}</Container>;
};

export default MainContainer;
