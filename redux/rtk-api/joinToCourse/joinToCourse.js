import {baseApi} from "../BaseApi";

const endpoints = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        joinToCourse: builder.mutation({
        // query: ({id:categoryId,question:page2,answer_option:option}) => ({
        query: (categoryId) => ({
            url: `courses/join/`,
            method: 'POST',
            body: {category_id:categoryId}

        })
    })
})
})
export const {useJoinToCourseMutation} = endpoints