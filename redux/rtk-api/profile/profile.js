import {baseApi} from "../BaseApi";

const endpoints = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getProfile: builder.query({
        query: () => ({
            url: `api/profile/`,
            method: 'GET',
        })
    })
})
})

export const {useGetProfileQuery} = endpoints