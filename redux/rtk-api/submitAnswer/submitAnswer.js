import {baseApi} from "../BaseApi";

const endpoints = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        submitAnswer: builder.mutation({
        // query: ({id:categoryId,question:page2,answer_option:option}) => ({
        query: (data) => ({
            url: `courses/${data.categoryId}/submit/`,
            method: 'POST',
            body: {question:data.page2,answer_option:data.option}

        })
    })
})
})
export const {useSubmitAnswerMutation} = endpoints