import { createStore } from "vuex";
import { resultState } from "./result"

export const store = createStore({
    state () {
        return resultState;
    },
    mutations: {
        increment(state, type) {
            state[type]++;
        }
    }
})