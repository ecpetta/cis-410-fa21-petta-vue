import { createStore } from 'vuex';
import axios from 'axios';
export default createStore({
    state: {
        token: null,
        user: null,
        products: [],

    },
    mutations: {
        storeTokenInApp(state, myToken) {
            state.token = myToken;
        },

        storeUserInApp(state, theUser) {
            state.user = theUser;
        },
        storeProducts(state, products) {
            state.products = products;
        }
    },
    actions: {
        getProducts({ commit }) {
            axios.get("/products").then((aResponse) => {
                console.log("reponse in /products", aResponse);
                commit("storeProducts", aResponse.data);
            })
        }
    },
});