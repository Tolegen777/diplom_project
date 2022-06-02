import {baseApi} from "../BaseApi";

const endpoints = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getMultiTestResult: builder.query({
        query: (text) => ({
            url: `courses/multitest/result/`,
            method: 'GET',
        })
    })
})
})

export const {useGetMultiTestResultQuery} = endpoints