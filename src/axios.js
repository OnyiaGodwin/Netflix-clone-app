import axios from "axios";

/** base url for making request to the movie database */
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default instance;

//https://api.themoviedb.org/3/movie/latest?api_key=c999ef7e21594a0265bdfd168532bc84&language=en-US
//https://api.themoviedb.org/3/discover/movie?api_key=c999ef7e21594a0265bdfd168532bc84&language=en-US
//https://api.themoviedb.org/3/trending/all/day?api_key=c999ef7e21594a0265bdfd168532bc84
//https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1
//https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
// Testing how to update repo
