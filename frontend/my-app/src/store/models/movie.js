const a = {
        statusCode: 0,
        message: null,
        data: [
            {
                id: 1,
                title: "NameFilm",
                desc: null,
                releaseDate: null,
                duration: 100,
                price: 0,
                movieLink: null,
                movieImage: "https://drive.google.com/file/d/1_uSWcQiB2-tOOsPfIiXFrtpHE_pZ-qW6/view?usp=sharing",
                language: null,
                bgColor: null,
                itemColor: null,
                genreName: [
                    "HORROR"
                ],
                genreId: null
            },
            {
                id: 2,
                title: "NameFilm2",
                desc: null,
                releaseDate: null,
                duration: 40,
                price: 0,
                movieLink: null,
                movieImage: "https://drive.google.com/file/d/1AitXDfrEEsUeQmvCVH2yglmcsP8k99e9/view?usp=drive_link",
                language: null,
                bgColor: null,
                itemColor: null,
                genreName: [
                    "ACTION",
                    "HORROR"
                ],
                genreId: null
            },
            {
                id: 2,
                title: "NameFilm2",
                desc: null,
                releaseDate: null,
                duration: 40,
                price: 0,
                movieLink: null,
                movieImage: "https://drive.google.com/file/d/1AitXDfrEEsUeQmvCVH2yglmcsP8k99e9/view?usp=drive_link",
                language: null,
                bgColor: null,
                itemColor: null,
                genreName: [
                    "ACTION",
                    "HORROR"
                ],
                genreId: null
            },
            {
                id: 2,
                title: "NameFilm2",
                desc: null,
                releaseDate: null,
                duration: 40,
                price: 0,
                movieLink: null,
                movieImage: "https://drive.google.com/file/d/1AitXDfrEEsUeQmvCVH2yglmcsP8k99e9/view?usp=drive_link",
                language: null,
                bgColor: null,
                itemColor: null,
                genreName: [
                    "ACTION",
                    "HORROR"
                ],
                genreId: null
            }
        ]
    }
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
            // const MOVIES = data.data;
            // this.setData(MOVIES);
            this.setData(a.data);
        },
    }),
};