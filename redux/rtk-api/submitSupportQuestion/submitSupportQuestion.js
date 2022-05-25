import {baseApi} from "../BaseApi";

const endpoints = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        submitSupport: builder.mutation({
        query: (data) => ({
            url: `support/ask/`,
            method: 'POST',
            body: {title:data.title,text:data.value}

        })
    })
})
})
export const {useSubmitSupportMutation} = endpoints