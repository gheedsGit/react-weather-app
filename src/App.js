import React from "react";
import MenuContainer from "./components/MenuContainer";
import WeatherSearch from "./WeatherSearch";
import WeatherByGeo from "./WeatherByGeo";

const App = () => {
  return (
    <>
      <MenuContainer>
        <WeatherSearch />
        <WeatherByGeo />
      </MenuContainer>
    </>
  );
};

export default App;
