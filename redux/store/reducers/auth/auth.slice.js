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
    middle_name:'',
    phone: '',
    password: '',
    region: '',
    avatar: null,
    isSuccess:false,
    goWithoutAuth:false

};

const authReducer = createSlice({
    name: "auth",
    reducers: {
        setHandleAuth: (state) => {
            state.isAuth = true
        },
        setHandleNoAuth: (state) => {
            state.goWithoutAuth = false
        },
        setUpdateProfileData: (state, {payload}) => {

           if (payload.avatar){
               state.avatar = payload.avatar
           }
            if (payload.email){
                state.email = payload.email
            }
            if (payload.first_name){
                state.first_name = payload.first_name
            }
            if (payload.last_name){
                state.last_name = payload.last_name
            }
            if (payload.middle_name){
                state.middle_name = payload.middle_name
            }
            if (payload.phone){
                state.phone = payload.phone
            }
            if (payload.password){
                state.password = payload.password
            }
            if (payload.region){
                state.region = payload.region
            }
            if (payload.avatar){
                state.avatar = payload.avatar
            }
        },
        setWithoutAuth: (state) => {
            state.goWithoutAuth = true
            if (localStorage.getItem("token")!==''){
                localStorage.removeItem("token")
            }
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

                // console.log(payload)
                state.isLoading = true
                state.email = payload.result.user.email
                state.first_name = payload.result.user.first_name
                state.last_name = payload.result.user.last_name
                state.middle_name = payload.result.user.middle_name
                if (payload.result.user.phone){
                    state.phone = payload.result.user.phone
                }
                if (payload.result.user.password){
                    state.password = payload.result.user.password
                }

                // state.status = ActionsEnum.SUCCESS;
                state.isAuth = true;
                state.isLoading = false;
                state.error = null
                state.goWithoutAuth = false
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
                state.isSuccess = true
                state.goWithoutAuth = false
            })
            .addCase(signUp.rejected, (state, { error }) => {

                //state.status = ActionsEnum.ERROR;
                 state.error2 = error;
                state.isLoading2 = false
                state.isSuccess = false
            })
            // .addCase(checkAuth.fulfilled, (state, { payload }) => {
            //   state.
            // })
            // .addCase(logout.fulfilled, () => {
            //     return initialState;
            // });
    },
});

export const {setHandleAuth, setUpdateProfileData,setWithoutAuth,setHandleNoAuth} = authReducer.actions

export default authReducer.reducer;
