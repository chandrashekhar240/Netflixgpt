
import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",

    initialState: {
        showGptSearch: localStorage.getItem("showGptSearch") === "true",
    },

    reducers: {
        toggleGptSearch: (state) => {
            state.showGptSearch = !state.showGptSearch;

            localStorage.setItem(
                "showGptSearch",
                state.showGptSearch
            );
        }
    }
});

export const { toggleGptSearch } = gptSlice.actions;

export default gptSlice.reducer;
