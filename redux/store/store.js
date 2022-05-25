//library
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

//reducer

import authReducer from "./../store/reducers/auth/auth.slice";
import courseReducer from "./../store/reducers/course/course.slice";

import {baseApi} from "../rtk-api/BaseApi";

//rtk


const rootReducer = combineReducers({
    auth: authReducer,
    course:courseReducer,
    [baseApi.reducerPath]: baseApi.reducer,

});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),

    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().concat(bannerApi.middleware),
});


