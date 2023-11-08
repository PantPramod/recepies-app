import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CounterState = {
    value: number;
    flag: boolean
};

const initialState = {
    value: 0,
    flag: false
} as CounterState;

export const counter = createSlice({
    name: "counter",
    initialState,
    reducers: {
        reset: () => initialState,
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
        decrementByAmount: (state, action: PayloadAction<number>) => {
            state.value -= action.payload;
        },
        toogleFlag: (state) => {
            state.flag = !state.flag
        }
    },
});

export const {
    increment,
    incrementByAmount,
    decrement,
    decrementByAmount,
    reset,
    toogleFlag
} = counter.actions;
export default counter.reducer;