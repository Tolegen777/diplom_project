import { createSlice } from "@reduxjs/toolkit";
import {login, signUp} from "./auth.action";

const initialState = {
    isAuth: false,
    error: null,
    email: '',
    isSignUp: false,
    error2:null,
    isLoading2:false,
    first_name:'',
    last_name:'',
    middle_name:''

};

const authReducer = createSlice({
    name: "auth",
    reducers: {
        setHandleAuth: (state) => {
            state.isAuth = true
        },
    },
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {

                state.isLoading = true
                state.error = null
            })
            .addCase(login.fulfilled, (state, { payload }) => {

                console.log(payload)
                state.isLoading = true
                state.email = payload.result.user.email
                state.email = payload.result.user.first_name
                state.email = payload.result.user.last_name
                state.email = payload.result.user.middle_name
                // state.status = ActionsEnum.SUCCESS;
                state.isAuth = true;
                state.isLoading = false;
                state.error = null
            })
            .addCase(login.rejected, (state, { error }) => {

                //state.status = ActionsEnum.ERROR;
                state.error = error;
                state.isLoading = false
            })

            .addCase(signUp.pending, (state) => {

                state.isLoading2 = true
                state.error2 = null;
            })
            .addCase(signUp.fulfilled, (state, { payload }) => {

                // console.log(payload)
                // state.status = ActionsEnum.SUCCESS;
                //state.isAuth = true;
                state.isSignUp = true
                state.error2 = null;
                state.isLoading2 = false
            })
            .addCase(signUp.rejected, (state, { error }) => {

                //state.status = ActionsEnum.ERROR;
                 state.error2 = error;
                state.isLoading2 = false
            })
            // .addCase(checkAuth.fulfilled, (state, { payload }) => {
            //   state.
            // })
            // .addCase(logout.fulfilled, () => {
            //     return initialState;
            // });
    },
});

export const {setHandleAuth} = authReducer.actions

export default authReducer.reducer;
