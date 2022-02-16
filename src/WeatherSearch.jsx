import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import CustomInput from "./components/CustomInput";
import CustomButton from "./components/CustomButton";
import { API_KEY } from "./config";
import axios from "axios";

const WeatherSearch = () => {
  const [inputValue, setInputValue] = useState("");
  const [weatherObject, setWeatherObject] = useState({});
  const getInputValue = (childInput) => setInputValue(childInput);

  const listenApi = () => {
    if (inputValue) {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&APPID=${API_KEY}`
        )
        .then((response) => {
          setWeatherObject(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const showFetchResult = () => {
    if (Object.keys(weatherObject).length !== 0) {
      console.log(weatherObject);
    }
  };

  return (
    <Container>
      <CustomInput inputValue={inputValue} setInputValue={getInputValue} />
      <CustomButton onClick={listenApi}>FETCH API</CustomButton>
      <CustomButton onClick={showFetchResult}>SHOW RESULT</CustomButton>
    </Container>
  );
};

export default WeatherSearch;
