import { createSlice } from "@reduxjs/toolkit";
let slice = createSlice({
    name: 'counter',
    initialState: {
        count: 10
    },
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            if (state.count > 0) {
                state.count -= 1;
            }
        },
        reset: (state) => {
            state.count = 0
        }
    }

})

export default slice.reducer;
export const {increment,decrement,reset}=slice.actions;