import { API_KEY } from "./apiKeys";

export const fetchPictureOfTheDay = async () => {
  const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error uploading the Astronomy Picture of the Day");
    }
    const pictureData = await response.json();
    return pictureData;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchPictureOfTheMonth = async date => {
  const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`;
  console.log(url)
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error uploading the Astronomy Picture of the Day");
    }
    const pictureData = await response.json();
    return pictureData;
  } catch (error) {
    throw new Error(error.message);
  }
};