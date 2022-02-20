import React, { useState, useEffect } from "react";
import CustomButton from "./components/CustomButton";
import { API_KEY } from "./config";
import axios from "axios";

const WeatherByGeo = () => {
  const [status, setStatus] = useState("");
  const [coords, setCoords] = useState({});
  const [weatherObject, setWeatherObject] = useState({});

  const listenApi = async () => {
    const { lat, lon } = coords;
    try {
      const resp = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );
      await setWeatherObject(resp.data);
    } catch (err) {
      console.error(err);
    }
  };

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoords({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  const logCoords = () => {
    if (Object.keys(weatherObject).length !== 0) {
      console.log(weatherObject);
    }
  };

  return (
    <>
      <CustomButton onClick={() => listenApi()}>Get weather</CustomButton>
      <CustomButton onClick={() => logCoords()}>By geo</CustomButton>
    </>
  );
};

export default WeatherByGeo;
