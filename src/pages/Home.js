import React from "react";
import Hero from "../components/Hero";
import Row from "../components/Row";
import endpoints from "../services/movieServices";

const Home = () => {
  return (
    <div>
      <Hero />
        <Row rowID='1' title='Popular' fetchURL={endpoints.requestPopular} />
        <Row rowID='2' title='Top Rated' fetchURL={endpoints.requestTopRated} />
        <Row rowID='3' title='Action Movies' fetchURL={endpoints.requestActionMovies} />
        <Row rowID='4' title='Comedy Movies' fetchURL={endpoints.requestComedyMovies} />
        <Row rowID='5' title='Horror Movies' fetchURL={endpoints.requestHorrorMovies} />
        <Row rowID='6' title='Romance Movies' fetchURL={endpoints.requestRomanceMovies} />
    </div>
  );
};

export default Home;
