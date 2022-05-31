import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    courseId:null,
    categoryId:null
};

const courseReducer = createSlice({
    name: "course",
    reducers: {
        setCourseId: (state,{payload}) => {
            state.courseId = payload
        },
        setCategoryId: (state,{payload}) => {
            state.categoryId = payload
        },

    },
    initialState,
    extraReducers: (builder) => {
    },
});

export const {setCourseId, setCategoryId} = courseReducer.actions

export default courseReducer.reducer;
