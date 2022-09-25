import axios from "axios";

export const getHomeTopStories = () => {
  return axios.get(
    "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=fWESWGBIAC7hRAGf3zCEt7fD5Mgjxs9J"
  );
};
export const getUSTopStories = () => {
  return axios.get(
    "https://api.nytimes.com/svc/topstories/v2/us.json?api-key=fWESWGBIAC7hRAGf3zCEt7fD5Mgjxs9J"
  );
};
export const getWorldTopStories = () => {
  return axios.get(
    "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=fWESWGBIAC7hRAGf3zCEt7fD5Mgjxs9J"
  );
};
export const getScienceTopStories = () => {
  return axios.get(
    "https://api.nytimes.com/svc/topstories/v2/science.json?api-key=fWESWGBIAC7hRAGf3zCEt7fD5Mgjxs9J"
  );
};
export const getArtsTopStories = () => {
  return axios.get(
    "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=fWESWGBIAC7hRAGf3zCEt7fD5Mgjxs9J"
  );
};
