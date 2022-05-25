import {createAsyncThunk} from "@reduxjs/toolkit";
import {AuthService} from "../../../service/auth/auth.service";

export const login = createAsyncThunk(
    "auth/login",
    async function (data, { rejectWithValue }) {

        try {

            const response = await AuthService.login(data);
            // console.log(response)
            // console.log("de")
            //localStorage.setItem("access_token", response.data.access_token);
            localStorage.setItem('token',response.data.result.token)
            return response.data;
        } catch (e) {
            return rejectWithValue(e);
        }
    }
);

export const signUp = createAsyncThunk(
    'auth/signUp',
    async function (data, { rejectWithValue }) {
        try {
            const response = await AuthService.signUp(data)
            // console.log(response.data.result.token)
            //token
            // localStorage.setItem('token',response.data.result.token)
            // const shop = user.shops[0] as IShop;
            // return { user, shop }
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)