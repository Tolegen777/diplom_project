import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    courseId:null
};

const courseReducer = createSlice({
    name: "course",
    reducers: {
        setCourseId: (state,{payload}) => {
            state.courseId = payload
        },
    },
    initialState,
    extraReducers: (builder) => {
    },
});

export const {setCourseId} = courseReducer.actions

export default courseReducer.reducer;
