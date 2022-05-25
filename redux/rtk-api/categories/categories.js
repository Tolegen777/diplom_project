import {baseApi} from "../BaseApi";

const endpoints = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getCategories: builder.query({
        query: (id) => ({
            url: `courses/${id}/categories/`,
            method: 'GET',
        })
    })
})
})

export const {useGetCategoriesQuery} = endpoints