import axios from "axios";

const auth = axios.create({
  baseURL: "https://lit-eyrie-97447.herokuapp.com",
  //   withCredentials: true,
  headers: {
    "Content-type": "application/json",
  },
});

export const getUser = (id) => auth.get(`/users/${id}`);

export const createUser = (name) =>
  auth.post(`/users`, {
    name: name,
  });

export const modifyUser = ({ id, data }) => {
  auth.put(`/users/${id}`, {
    name: data.name,
    minPitch: data.minPitch,
    maxPitch: data.maxPitch,
  });
};

export const selectSong = ({ userId, songId, category }) => {
  auth.post(`/users/${userId}/songs/select`, {
    id: songId,
    category: category,
  });
};

export const getEvaluation = ({ userId }) => {
  auth.get(`/users/${userId}/songs/select`);
};

export const getRecommendation = ({ userId, moods }) => {
  auth.get(`/users/${userId}/recomendations?moods=` + moods);
};
