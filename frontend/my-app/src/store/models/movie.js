export const movie = {
    state: {
        movies: [],
        filterData: []
    },
    reducers: {
        setData (state, movies) {
            return {
                state,
                movies,
                filterData: movies
            }
        },
        setDataFilterData (state, filterData) {
            return {
                ...state,
                filterData
            }
        }
    },
    effects: (dispatch) => ({
        async getAll() {
            const data = await fetch('http://localhost:8080/movie/all')
                .then(res => res.json())
                .catch(error => console.log('Authorization failed: ' + error.message));
            const MOVIES = data.data;
            this.setData(MOVIES);
        },
    }),
};