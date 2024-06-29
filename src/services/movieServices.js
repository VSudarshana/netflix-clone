const key = '34c962f5515ac1a604214039c66ef1b4';

const endpoints = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US`,
  requestActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=28`,
  requestComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=35`,
  requestHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=27`,
  requestRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=10749`
};

export default endpoints;
