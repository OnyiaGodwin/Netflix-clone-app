import { useEffect, useState } from "react";

import axios from "../axios";
import requests from "../requests";

import classes from "./Banner.module.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchTopRated);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * (request.data.results.length - 1))
        ]
      );
      return request;
    };
    fetchData();
  }, []);

  // This function helps to reduced a lengthy string by adding "..." and the ending part eg (I am an example of...)
  const truncate = (str, num) => {
    return (
      str?.length > num ? str.substr(0, num - 1) + "..." : str
    );
  };

  console.log(movie);


  return (
      <header
      className={classes.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      {/**<<< Has Background image */}
      <div className={classes.banner__contents}>
        {/**Title*/}
        <h1>{movie.title || movie.original_title}</h1>
        {/**div with 2 buttons*/}
        <div className={classes.banner__buttons}>
          <button className={classes.banner__button}>Play</button>
          <button className={classes.banner__button}>My List</button>
        </div>
        {/**description*/}
        <h1 className={classes.banner__description}>
        {truncate(movie.overview, 200)}
        </h1>
      </div>
      <div className={classes.banner__fadeBottom} />
    </header>
  );
};

export default Banner;
