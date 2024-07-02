import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
// import todoRecuder from "../features/todo/todoSlice";


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        // todo: todoRecuder,
    },
    });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; // The AppDispatch type is used to infer the type of the dispatch function in the components.
