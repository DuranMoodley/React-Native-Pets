const filterMoviesByYear = moviesList => {
  return moviesList.filter(movie => parseInt(movie.releaseYear) > 2000);
};

const randomMovie = movieList => {
  const randomNumber = Math.floor(Math.random() * (movieList?.length - 1)) + 1;
  const randomMovieSelection = movieList?.find(
    movie => parseInt(movie.id) === randomNumber,
  );

  console.log(randomNumber)

  return randomMovieSelection?.title;
};

export {filterMoviesByYear, randomMovie};
