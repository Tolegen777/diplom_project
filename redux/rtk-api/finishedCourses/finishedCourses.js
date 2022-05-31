import {baseApi} from "../BaseApi";

const endpoints = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getFinishedCourses: builder.query({
        query: (id) => ({
            url: `api/profile/finished_courses/`,
            method: 'GET',
        })
    })
})
})

export const {useGetFinishedCoursesQuery} = endpoints