import React, {useEffect, useState} from 'react';

import {Button, CircularProgress} from "@mui/material";
import Header from "./../components/header";

import style from "./../styles/Subject.module.css";

import SubjectTopic from "./subjectTopic";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {useGetCategoriesQuery} from "../redux/rtk-api/categories/categories";
import {setCategoryId} from "../redux/store/reducers/course/course.slice";
import AuthWindow from "../components/AuthWindow";
import {useFormik} from "formik";
import SearchComponent from "../components/SearchComponent";
import MyButton from "../components/button";
const arr = [
    {
        id: 1,
        text: "Account",
        icon:"/user.svg",
        href:'/profile'
    },
    {
        id: 2,
        text: "My completed materials",
        icon:"/complete.svg",
        href:'/passedMaterials'
    },
    {
        id: 3,
        text: "My notes",
        icon:"/note.svg",
        href:'/notes'
    },
    {
        id: 4,
        text: "My achievements",
        icon:"/achievements.svg",
        href:'/achievements'
    },
]



const Subject = () => {

    const courseId = useSelector(state=>state.course.courseId)

    const {data:categories} = useGetCategoriesQuery(courseId)

    const formik = useFormik({
        initialValues: {
            search:''
        },

        onSubmit: values => {
            console.log("yes")
        },
    });



    const dispatch = useDispatch()

    useEffect(()=>{
        if (categories&&categories.result[0]&&categories.result[0].id) {
           dispatch(setCategoryId(categories?.result[0]?.id))
        }
    },categories)

    const isAuth = useSelector(state=>state.auth.isAuth)

    const [searchedName,setSearchedName] = useState('')


    const [isOpen,setOpen] = useState(false)

    const handleOpenWindow = () => {
        if (!isAuth){
            setOpen(true)

        }
    }



    return (
        <div>
            {isOpen&&<AuthWindow isWindowOpen={isOpen} closeWindow={()=>setOpen(false)}/>}
            {categories&&categories.result[0]&&categories.result[0].id?<>
                <Header/>
                <div className={style.main}>
                <div className={style.first}>
                <div>
                <div className={style.first_text}>Subject: <p style={{textDecoration:"underline"}}>{categories.result[0].course.name}</p></div>
                <div className="search">

                    <form>
                        <SearchComponent formik={formik} placeholder={"Search"} searchedName = {searchedName}
                                         setSearchedName={setSearchedName}
                        />
                    </form>
                </div>
                </div>
                <div className={style.scndBlock}>
                <div className={style.first_second}>
                </div>
                <div className={style.profileBlock}>
            {arr.map(i => <div key={i.id} style={{borderRight:"1px solid #FAB536"}}>
                <Link href={isAuth?i.href:''} ><Button startIcon={<img src={i.icon}/>} className={style.profileBtns} onClick={handleOpenWindow} variant={"text"}>{i.text}</Button></Link>
            </div>)}
                </div>
                </div>
                </div>
                <SubjectTopic category = {categories?.result} searchedName={searchedName}/>
                </div>
            </>:<div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", marginTop:"40vh"}}>
                <div style={{marginBottom:"20px", fontSize:"25px"}}>There are no materials in this course!</div>
                <div><MyButton href = {"/"} text={"back"}/></div>
                </div>}



        </div>
    );
};

export default Subject;