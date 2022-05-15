import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuth: false,
    error: null,

};

const authReducer = createSlice({
    name: "auth",
    reducers: {
        setHandleAuth: (state) => {
            state.isAuth = true
        },
    },
    initialState,
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(login.pending, (state) => {
    //             state.status = ActionsEnum.LOADING;
    //         })
    //         .addCase(login.fulfilled, (state, { payload }) => {
    //             state.status = ActionsEnum.SUCCESS;
    //             state.isAuth = true;
    //         })
    //         .addCase(login.rejected, (state, { error }) => {
    //             state.status = ActionsEnum.ERROR;
    //             state.error = error;
    //         })
    //         // .addCase(checkAuth.fulfilled, (state, { payload }) => {
    //         //   state.
    //         // })
    //         .addCase(logout.fulfilled, () => {
    //             return initialState;
    //         });
    // },
});

export const {setHandleAuth} = authReducer.actions

export default authReducer.reducer;
