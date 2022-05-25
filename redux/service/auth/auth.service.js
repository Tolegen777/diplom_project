import {$api, DEV_API} from "./../../api/index"
import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

export class AuthService {
    static async login(data) {
        const formData = new FormData();

        formData.append('email', data.email);
        formData.append('password', data.password);
        formData.append('anonymous_token', data.anonymous_token);




        return $api.post(`auth/sign_in/`, formData,
        );
    }

    static async signUp(data) {
    return $api.post(`auth/sign_up/`, data)
}
}

