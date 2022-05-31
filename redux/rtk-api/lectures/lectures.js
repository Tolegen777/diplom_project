import {baseApi} from "../BaseApi";

const endpoints = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getLectures: builder.query({
        query: (id) => ({
            url: `courses/${id}/lectures/`,
            method: 'GET',
        })
    })
})
})

export const {useGetLecturesQuery} = endpoints