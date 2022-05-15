//library
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

//reducer

import authReducer from "./../store/reducers/auth/auth.slice";

//rtk


const rootReducer = combineReducers({
    auth: authReducer,

});

export const store = configureStore({
    reducer: rootReducer,

    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().concat(bannerApi.middleware),
});


