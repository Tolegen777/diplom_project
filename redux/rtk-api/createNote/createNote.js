import {baseApi} from "../BaseApi";

const endpoints = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createNote: builder.mutation({
        query: (data) => ({
            url: `courses/${data.categoryId}/post_note/`,
            method: 'POST',
            body: {note:data.note}

        })
    })
})
})
export const {useCreateNoteMutation} = endpoints