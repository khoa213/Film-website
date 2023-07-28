export const movie = {
  state: {
    movies: [],
    filterData: [],
    reviews: [],
  },
  reducers: {
    setDataMovies(state, movies) {
      return {
        ...state,
        movies,
      };
    },
    setDataMoviesFilterData(state, filterData) {
      return {
        ...state,
        filterData,
      };
    },
    setDataReviews(state, reviews) {
      return {
        state,
        reviews,
      };
    },
  },
  effects: (dispatch) => ({
    async getAll() {
      const data = await fetch("http://localhost:8080/movies")
        .then((res) => res.json())
        .catch((error) =>
          console.log("Authorization failed: " + error.message)
        );
      const MOVIES = data.data;
      this.setDataMovies(MOVIES);
      this.setDataMoviesFilterData(MOVIES);
    },
    async searchMoviesByNameAndActor(searchObj) {
      const data = await fetch(
        "http://localhost:8080/movies/search?name=" +
          searchObj.name +
          "&actor=" +
          searchObj.actor
      )
        .then((res) => res.json())
        .catch((error) =>
          console.log("Authorization failed: " + error.message)
        );
      const MOVIES = data.data;
      this.setDataMoviesFilterData(MOVIES);
    },
    async getReviews(movieId) {
      const data = await fetch(
        "http://localhost:8080/review/review-movie?movieId=" + movieId
      )
        .then((res) => res.json())
        .catch((error) =>
          console.log("Authorization failed: " + error.message)
        );
      this.setDataReviews(data.data);
    },
  }),
};
