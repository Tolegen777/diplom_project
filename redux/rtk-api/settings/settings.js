import {baseApi} from "../BaseApi";



const endpoints = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        updateProfile: builder.mutation({
        query: (formData) => ({
            url: `api/profile/`,
            method: 'PUT',
            body: formData
        })
    })
})
})



export const {useUpdateProfileMutation} = endpoints