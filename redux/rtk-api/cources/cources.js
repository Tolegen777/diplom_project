import {baseApi} from "../BaseApi";

const endpoints = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getCourses: builder.query({
        query: () => ({
            url: `courses/`,
            method: 'GET',
        })
    })
})
})

export const {useGetCoursesQuery} = endpoints