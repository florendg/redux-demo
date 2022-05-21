import {configureStore, createReducer, createStore} from "@reduxjs/toolkit";

interface CounterState {
    value: number;
}

const initialState = {
    value: 0
};


const reducer = createReducer(initialState, (builder) => {

});

const appStore = configureStore({
    reducer: reducer,
    
});

export default appStore;
