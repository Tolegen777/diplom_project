import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {DEV_API} from "../api";

export const baseQuery = fetchBaseQuery({
    baseUrl: DEV_API,
    prepareHeaders: (headers) => {
        const token = localStorage.getItem('token');
        if (token) {
            headers.set('Authorization', `${token}`)
        } else {
            headers.set('Authorization', 'NO HEADER')
        }
        return headers
    },
});

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQuery,
    tagTypes: ['courses'],
    endpoints: () => ({}),
})