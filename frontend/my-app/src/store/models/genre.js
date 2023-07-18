const a ={
    statusCode: 0,
    message: null,
    data: [
        {
            id: 1,
            name: "HORROR",
            desc: "HORROR"
        },
        {
            id: 2,
            name: "ACTION",
            desc: "ACTION"
        },
        {
            id: 3,
            name: "TALK",
            desc: "TALK"
        },
        {
            id: 4,
            name: "WAR",
            desc: "WAR"
        },
        {
            id: 8,
            name: "BIOGRAPHY",
            desc: "BIOGRAPHY"
        },
        {
            id : 9,
            name: "DRAMA",
            desc: "DRAMA"
        },
        {
            id: 10,
            name: "HISTORY",
            desc: "HISTORY"
        }
    ]
}

export const genre = {
    state: {
        genres: []
    },
    reducers: {
        setData(state, genres) {
            return {
                state,
                genres
            }
        },
    },
    effects: (dispatch) => ({
        async getAll() {
            const data = await fetch('http://localhost:8080/genre/all')
                .then(res => res.json())
                .catch(error => console.log('Authorization failed: ' + error.message));
            // this.setData(data.data);
            this.setData(a.data);
        },
    }),
};