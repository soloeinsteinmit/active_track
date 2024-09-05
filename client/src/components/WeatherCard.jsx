import { useEffect, useState } from "react";
import {
  PiCloudFill,
  PiCloudFog,
  PiDropBold,
  PiMapPinAreaFill,
  PiWindBold,
  PiThermometer,
} from "react-icons/pi";
import WeatherProperties from "./WeatherProperties";
import { Spinner } from "@nextui-org/react";
import axios from "axios";
import { IoRainy, IoCloudy, IoSnow, IoWarning } from "react-icons/io5";

const WeatherCard = ({ location = "Location" }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const latitude = 5.116622; // Latitude
  const longitude = -1.290954; // Longitude

  /*   useEffect(() => {
    // Fetch weather data
    const fetchWeatherData = async () => {
      try {
        const apiKey = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
        );
        console.log("API Response:", response.data); // Debugging line
        setWeatherData(response.data); // Set weather data
        setLoading(false); // Stop loading
      } catch (error) {
        console.error("API Error:", error); // More detailed error logging
        setError("Failed to fetch weather data. Please try again later."); 
        setLoading(false); // Stop loading even if there's an error
      }
    };

    fetchWeatherData(); // Call the function to fetch data when component mounts
  }, []); */

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center w-[380px]">
        <Spinner size="sm" />
        <p>Loading weather data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center w[300px]">
        <IoWarning />
        <p>Error: {error}</p>
      </div>
    );
  }

  // Ensure weatherData is not null before using it
  if (!weatherData || !weatherData.main || !weatherData.wind) {
    return <p>No weather data available</p>;
  }

  const cityName = weatherData.name;

  // Determine the icon based on the weather condition
  const weatherIcon = {
    Rain: <IoRainy className="text-white text-6xl" />,
    Clouds: <IoCloudy className="text-white text-6xl" />,
    Snow: <IoSnow className="text-white text-6xl" />,
  }[weatherData.weather[0].main] || (
    <PiCloudFill className="text-white text-6xl" />
  );

  const weatherProperties = [
    {
      icon: <PiThermometer />,
      weatherType: "Temperature",
      weatherValue: `${Math.round(weatherData.main.temp)}°C`,
    },
    {
      icon: <PiDropBold />,
      weatherType: "Humidity",
      weatherValue: `${weatherData.main.humidity}%`,
    },
    {
      icon: <PiWindBold />,
      weatherType: "Wind Speed",
      weatherValue: `${weatherData.wind.speed} m/s`,
    },
    {
      icon: <PiThermometer />,
      weatherType: "Pressure",
      weatherValue: `${weatherData.main.pressure} hPa`,
    },
    {
      icon: <PiThermometer />,
      weatherType: "Feels Like",
      weatherValue: `${Math.round(weatherData.main.feels_like)}°C`,
    },
  ];

  return (
    <div className="shadow-small h-52 w-96 rounded-medium p-5 flex flex-col justify-between">
      <div className="flex w-full justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-sm font-bold">Weather</span>
          <div className="flex gap-1">
            <PiMapPinAreaFill className="text-2xl text-primary" />
            <p className="font-bold text-primary text-large">{cityName}</p>
          </div>
        </div>

        <div className="bg-primary p-3 flex items-center justify-center rounded-medium">
          {/* <PiCloudFill className="text-white text-6xl" /> */}
          {weatherIcon}
        </div>
      </div>

      {/* Weather features */}
      <div className="flex justify-between">
        {weatherProperties.map((property, index) => (
          <WeatherProperties
            key={index}
            icon={property.icon}
            weatherType={property.weatherType}
            weatherValue={property.weatherValue}
          />
        ))}
      </div>
    </div>
  );
};

export default WeatherCard;
