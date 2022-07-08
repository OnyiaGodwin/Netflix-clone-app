import { useEffect, useState } from "react";

import movieTrailer from "movie-trailer"; //installed dependecy, used for showing the trailer
import YouTube from "react-youtube"; //installed dependecy, used for showing the trailer
import axios from "../axios";

import classes from "./Row.module.css";

const Row = (props) => {
  const [movies, setMovies] = useState([]);

  const [trailerUrl, setTrailerUrl] = useState("");

  const imgBaseURL = "https://image.tmdb.org/t/p/original";
  const fetchUrl = props.fetchUrl;

  // A snippet of code which runs based on a specific condition/variable
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const trailerHandler = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || "")
        .then((url) => {
          //console.log(url)        
          /*One of the url's ==> https://www.youtube.com/watch?v=nfKO9rYDmE8*/
          //NB: To get the video url ie value of v in (v=nfKO9rYDmE8 ==> nfKO9rYDmE8)
          const newUrl = new URL(url);
          const urlParams = new URLSearchParams(newUrl.search);
          const getExactTrailerUrl = urlParams.get("v");
          //console.log(getExactTrailerUrl)

          setTrailerUrl(getExactTrailerUrl);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className={classes.row}>
      {/** Title */}
      <h2>{props.title}</h2>
      <div className={classes.row__posters}>
        {/** several row__poster(s) */}
        {movies.map((movie) => {
          return (
            <img
              onClick={() => trailerHandler(movie)}
              key={movie.id}
              className={`${classes.row__poster} ${
                props.isLargeRow && `${classes.row__posterLarge}`
              }`}
              src={`${imgBaseURL}${
                props.isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.title}
              title={movie.title}
            ></img>
          );
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}></YouTube>}
    </div>
  );
};

export default Row;
