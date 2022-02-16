import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2),
    clipPath: "polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0)",
    backgroundColor: "gold",
    border: "1px solid ",
    width: "130px",
    boxShadow: "2px 2px #00f0ff",
  },
}));

const CustomButton = ({ children, onClick }) => {
  const styles = useStyles();

  return (
    <>
      <Button className={styles.root} onClick={onClick}>{children}</Button>
    </>
  );
};

export default CustomButton;
