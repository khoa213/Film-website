export const movie = {
  state: {
      movies: [],
      filterData: [],
      
  },
  reducers: {
      setDataMovies (state, movies) {
          return {
              ...state,
              movies
          }
      },
      setDataMoviesFilterData (state, filterData) {
          return {
              ...state,
              filterData
          }
      }
  },
  effects: (dispatch) => ({
      async getAll() {
          const data = await fetch('http://localhost:8080/movies')
              .then(res => res.json())
              .catch(error => console.log('Authorization failed: ' + error.message));
          const MOVIES = data.data;
          this.setDataMovies(MOVIES);
          this.setDataMoviesFilterData(MOVIES);
      },
      async searchMoviesByNameAndActor(searchObj) {
          const data = await fetch('http://localhost:8080/movies/search?name=' + searchObj.name + '&actor=' + searchObj.actor)
              .then(res => res.json())
              .catch(error => console.log('Authorization failed: ' + error.message));
          const MOVIES = data.data;
          this.setDataMoviesFilterData(MOVIES);
      },
  }),
};