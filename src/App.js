import React, { useEffect, useState } from "react";
import Weather from "./components/weather/Weather";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=marrakesh&units=metric&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await axios.get(url).then((response) => {
          setData(response);
        });
      } catch {}
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Weather data={data?.data} />
    </div>
  );
}

export default App;
