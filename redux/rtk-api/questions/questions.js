import {baseApi} from "../BaseApi";


const endpoints = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getQuestions: builder.query({
        query: ({categoryId, page=1}) => ({
            url: `courses/${categoryId}/questionaire/?page=${page}`,
            method: 'GET',
        })
    })
})
})

export const {useGetQuestionsQuery} = endpoints