import React, { useState } from "react";

import Row from "./components/Row";
import request from "./requests";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";

import classes from './App.module.css';
import AuthForm from "./components/Auth/AuthForm";


function App() {
  const [loggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className={classes.App}>
     {loggedIn && <AuthForm></AuthForm>}
      <NavBar></NavBar>
      <Banner></Banner>
      <Row title="Action Movies" fetchUrl={request.fetchAction} isLargeRow={true} ></Row>
      <Row title="Trending Now" fetchUrl={request.fetchTrending}></Row>
      <Row title="Romance Movies" fetchUrl={request.fetchRomance} isLargeRow={true}></Row>
      <Row title="Top Rated" fetchUrl={request.fetchTopRated}></Row>
      <Row title="Comedy Movies" fetchUrl={request.fetchComedy} isLargeRow={true}></Row>
      <Row title="Horror Movies" fetchUrl={request.fetchHorror}></Row>
      <Row title="Documentaries Movies" fetchUrl={request.fetchDocumentaries} isLargeRow></Row>
    <div className={classes.fadeBottom}>
    <Row title="" fetchUrl={request.fetchTopRated}></Row>
    <Row title="" fetchUrl={request.fetchHorror}></Row>
    </div>
    </div>
  );
}; 

export default App;
