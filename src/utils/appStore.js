import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";
import MoviesReducer from "./MovieSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";

const appStore = configureStore({
    reducer : {
        user : userReducer,
        movies: MoviesReducer,
        gpt : gptReducer,
        config : configReducer,
    },
});

export default appStore;