import axios from "axios";

export const user = {
    state: {
        token: null,
        isSave: false,
        isUserPackage: false
    },
    reducers: {
        setDataToken(state, token) {
            return {
                state,
                token
            }
        },
        setDataSave(state, isSave) {
            return {
                state,
                isSave
            }
        },
    },
    effects: (dispatch) => ({
        async login(formData1) {
            // const formData = new FormData();
            // formData.append('username', 'quangbao12356@gmail.com');
            // formData.append('password', '123456789');
              try {
                const formData={
                    username:'quangbao12356@gmail.com',
                    password:'123456789'
                }
                const config = {
                    headers: {
                      // "Content-Type": "application/json",
                      "Content-Type": "multipart/form-data",
                    },
                  };
              
                  const { data } = await axios.post(
                    `http://localhost:8080/signin`,
                    formData,
                    config
                  );
                  if (data.statusCode != 200 ) {
                    return null;
                  }
                  return data.data;
              } catch (error) {
                return null;
              }
        },
        async checkUserPackage() {

            try {
                const formData={
                    username:'quangbao12356@gmail.com',
                    password:'123456789'
                }
                const config = {
                    headers: {
                      // "Content-Type": "application/json",
                      "Content-Type": "multipart/form-data",
                    },
                  };
              
                  const { data } = await axios.post(
                    `http://localhost:8080/signin`,
                    formData,
                    config
                  );
                  if (data.statusCode != 200 ) {
                    return null;
                  }
                  return data.data;
              } catch (error) {
                return null;
              }
              
            const data = await fetch('http://localhost:8080/user/package')
                .then(res => res.json())
                .catch(error => console.log('Authorization failed: ' + error.message));
            return data.data;
        },
        async buyPackage(obj) {
            try {
                const config = {
                    headers: {
                      "Authorization" : `Bearer ${obj.token}`
                    },
                  };
                  const { data } = await axios.post(
                    `http://localhost:8080/order/buyPackage?idPackage=` + obj.idPackage,'',
                    config
                  );
                  if (data.statusCode != 200 ) {
                    return null;
                  }
                  return data.data;
              } catch (error) {
                return null;
              }
        },
    }),
};