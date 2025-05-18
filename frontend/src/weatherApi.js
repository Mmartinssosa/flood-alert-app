// Reemplaza por tu propia API key de OpenWeatherMap
const API_KEY = "339ab770edb82abe8f80f5376d863304";
const LAT = -34.8451;
const LON = -58.3941;

export async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&units=metric&lang=es&appid=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  return {
    temp: Math.round(data.main.temp),
    desc: data.weather[0].description,
    icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
    city: data.name,
  };
}
