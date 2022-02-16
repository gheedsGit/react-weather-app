import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const CustomInput = ({ inputValue, setInputValue }) => {
  const [input, setInput] = useState("");

  return (
    <>
      <TextField
        variant="filled"
        value={inputValue}
        placeholder="Search..."
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div>{inputValue}</div>
    </>
  );
};

export default CustomInput;
