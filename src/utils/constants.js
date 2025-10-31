export const weatherOptions = [
  {
    day: true,
    condition: "clear",
    url: new URL("../images/Day/clear.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "clouds",
    url: new URL("../images/Day/cloudy.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "clear",
    url: new URL("../images/Night/clear.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "clouds",
    url: new URL("../images/Night/cloudy.png", import.meta.url).href,
  },
];

export const defaultWeatherOptions = {
  day: {
    url: new URL("../images/Day/default.png", import.meta.url).href,
  },
  night: {
    url: new URL("../images/Night/default.png", import.meta.url).href,
  },
};

export const coordinates = {
  latitude: 40.114956,
  longitude: -111.654922,
};

export const apiKey = "30d249a0c413cda1c4bc3ff50668ead2";
