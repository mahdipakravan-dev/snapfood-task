// src/store/rootReducer.js
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import vendorsReducer from './vendors/slice.ts';

const rootReducer = combineReducers({
    vendors: vendorsReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type ReducerType = ReturnType<typeof rootReducer>
export default store;
