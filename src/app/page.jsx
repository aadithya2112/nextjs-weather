"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("chennai");
  const [weather, setWeather] = useState("");

  const handleClick = () => {
    console.log(name);
    fetch(`/api/${name}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setWeather(data);
      });
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };
  return (
    <>
      {/* I need an input button and a submit button below the submit button, weather information will be display */}
      <div>
        <input
          type="text"
          placeholder="Enter City Name"
          value={name}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Submit</button>
      </div>
      {/* I need a div to display the weather information */}
      {weather && (
        <div>
          <h1>{weather.name}</h1>
          <h2>{weather.weather[0].description}</h2>
          <h3>{weather.main.temp}</h3>
        </div>
      )}
    </>
  );
}
