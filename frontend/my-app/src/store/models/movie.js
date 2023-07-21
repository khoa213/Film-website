export const movie = {
    state: {
        movies: [],
        filterData: []
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
        },
        getDataFilter(limit) {
            if (limit >= this.filterData.length ) {
                return rawDataFilter.slice(0, this.filterData.length);
            } else {
                // data = rawDataFilter.slice(0, row);
                setData(...rawDataFilter.slice(0, row));
            }
            return 
        }
    },
    effects: (dispatch) => ({
        async getAll() {
            const data = await fetch('http://localhost:8080/movies/all')
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