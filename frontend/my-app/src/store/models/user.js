import axios from "axios";

export const user = {
    state: {
        token: null,
        isSave: false
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
        async login(formData) {
              try {
                const config = {
                    headers: {
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
        async signUp(formData) {
          try {
            const config = {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              };
          
              const { data } = await axios.post(
                `http://localhost:8080/signup`,
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
        async checkUserPackage(token) {
            try {
                const config = {
                    headers: {
                      "Authorization" : `Bearer ${token}`
                    },
                  };
                  const { data } = await axios.post(
                    `http://localhost:8080/order/check-user-package`,
                    "",
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