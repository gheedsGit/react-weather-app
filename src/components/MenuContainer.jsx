import React from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    margin: "auto",
    padding: "10px",
    display: "flex",
    width: "900px",
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
    border: "2px solid",
    boxShadow: "2px 2px #00f0ff",
  },
}));

const MenuContainer = ({ children }) => {
    const styles = useStyles();

  return <Container className={styles.root} component={Card}>{children}</Container>;
};

export default MenuContainer;
