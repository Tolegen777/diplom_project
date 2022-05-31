import {baseApi} from "../BaseApi";


const endpoints = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getGenerateQuestions: builder.query({
        query: (page=1) => ({
            url: `courses/multitest/get_questions/?page=${page}`,
            method: 'GET',
        })
    }),
        submitTestAnswer: builder.mutation({
            // query: ({id:categoryId,question:page2,answer_option:option}) => ({
            query: (data) => ({
                url: `courses/multitest/answer/${data.categoryId}/`,
                method: 'POST',
                body: {question:data.page2,answer_option:data.option}

            })
        }),
        generate: builder.mutation({
            query: () => ({
                url: `courses/multitests/generate/`,
                method: 'POST',

            })
        })
    })
})

export const {useGetGenerateQuestionsQuery,useSubmitTestAnswerMutation, useGenerateMutation} = endpoints