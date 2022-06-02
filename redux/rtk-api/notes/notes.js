import {baseApi} from "../BaseApi";

const endpoints = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getNotes: builder.query({
        query: (id) => ({
            url: `courses/${id}/note/`,
            method: 'GET',
        }),
            providesTags: ['note']
    }),
        createNote: builder.mutation({
            query: (data) => ({
                url: `courses/${data.categoryId}/post_note/`,
                method: 'POST',
                body: {note:data.note}

            }),
            invalidatesTags:['note']
        }),
})
})

export const {useGetNotesQuery,useCreateNoteMutation} = endpoints