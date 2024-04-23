import React from "react";
import {
  QuoteDisplay,
  WeatherDisplay,
  DailyNews,
  RecipesDisplay,
} from "../../components/index";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <QuoteDisplay />
      <WeatherDisplay />
      <DailyNews />
      <RecipesDisplay />
    </div>
  );
}

export default Home;
