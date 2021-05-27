import axios from "axios";

const auth = axios.create({
  baseURL: "https://lit-eyrie-97447.herokuapp.com",
  headers: {
    "Content-type": "application/json",
  },
});

export const getUser = (id) => auth.get(`/users/${id}`);

export const createUser = (name, age) =>
  auth.post(`/users`, {
    name: name,
    age: age * 1,
  });

export const modifyUser = (id, data) =>
  auth.put(`/users/${id}`, {
    minPitch: data.minPitch,
    maxPitch: data.maxPitch,
  });

export const selectSong = (userId, songs, category) => {
  let postList = [];
  songs.map((song) =>
    postList.push({
      id: song.id,
      category: category,
    })
  );

  const data = JSON.stringify(postList);
  const config = {
    headers: { "Content-Type": "application/json" },
  };
  console.log(data);
  return auth.post(`/users/${userId}/songs/select`, data, config);
};

export const getEvaluation = ({ userId }) => {
  auth.get(`/users/${userId}/songs/select`);
};

export const getRecommendation = ({ userId, moods }) => {
  auth.get(`/users/${userId}/recomendations?moods=` + moods);
};
