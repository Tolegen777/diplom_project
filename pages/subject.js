import React, {useEffect, useState} from 'react';

import {CircularProgress, IconButton, InputAdornment, TextField} from "@mui/material";
import Header from "./../components/header";

import style from "./../styles/Subject.module.css";
import SearchIcon from '@mui/icons-material/Search';

import SubjectTopic from "./subjectTopic";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {useGetCategoriesQuery} from "../redux/rtk-api/categories/categories";
import {useRouter} from "next/router";
import {setCategoryId} from "../redux/store/reducers/course/course.slice";
import AuthWindow from "../components/AuthWindow";

const icons = [1, 2, 3, 4]
const arr = [
    {
        id: 1,
        text: "Account",
        href:'/profile'
    },
    {
        id: 2,
        text: "My completed materials",
        href:'/passedMaterials'
    },
    {
        id: 3,
        text: "My notes",
        href:'/notes'
    },
    {
        id: 4,
        text: "Achievements",
        href:'/achievements'
    },
]



const Subject = () => {

    const courseId = useSelector(state=>state.course.courseId)

    const {data:categories} = useGetCategoriesQuery(courseId)


    const dispatch = useDispatch()

    useEffect(()=>{
        if (categories) {
           dispatch(setCategoryId(categories.result[0].id))
        }
    },categories)

    const goWithoutAuth = useSelector(state=>state.auth.goWithoutAuth)
    const isAuth = useSelector(state=>state.auth.isAuth)

    if (!isAuth){
        if (!goWithoutAuth){
            router.push("sign")
        }
    }

    const [isOpen,setOpen] = useState(false)

    const handleOpenWindow = () => {
        if (!isAuth){
            setOpen(true)
        }
    }



    return (
        <div>
            {isOpen&&<AuthWindow isWindowOpen={isOpen} closeWindow={()=>setOpen(false)}/>}
            {categories===undefined?<CircularProgress/>:<>
                <Header/>
                <div className={style.main}>
                <div className={style.first}>
                <div>
                <div className={style.first_text}>Subject: {categories.result[0].course.name}</div>
                <div className="search">
            {/*        <TextField placeholder={"Search"}*/}
            {/*    InputProps={{*/}
            {/*    style: {color: "primary.main"},*/}
            {/*    endAdornment: <InputAdornment position="end"><IconButton*/}
            {/*    sx={{p: '10px', color: "primary.main"}}>*/}
            {/*    <SearchIcon color={"action"}/>*/}
            {/*    </IconButton></InputAdornment>*/}
            {/*}}*/}
            {/*    />*/}
                </div>
                </div>
                <div className={style.scndBlock}>
                <div className={style.first_second}>
            {icons.map((i,ind) => <div key={ind} className={style.icon}></div>)}
                </div>
                <div className={style.profileBlock}>
                <img src="/user.svg" className={style.uIcon} alt=""/>
            {arr.map(i => <Link href={!isAuth&&i.href} key={i.id}><button className={style.profileBtns} onClick={handleOpenWindow}>{i.text}</button></Link>)}
                </div>
                </div>
                </div>
                <SubjectTopic category = {categories?.result}/>
                </div>
            </>}



        </div>
    );
};

export default Subject;