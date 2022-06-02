import React, {useEffect, useState} from 'react';
import style from "./../styles/Sign.module.css";
import SignIn from "./../components/signIn";
import SignUp from "./../components/signUp";
import {useDispatch, useSelector} from "react-redux";
import {setWithoutAuth} from "../redux/store/reducers/auth/auth.slice";
import {useRouter} from "next/router";
import {CircularProgress} from "@mui/material";

const Sign = () => {

    const [isSwitchMode, setSwitchMode] = useState(false)

    const isSignUp = useSelector(state=>state.auth.isSignUp)

    const isLoading2 = useSelector(state=>state.auth.isLoading2)

    const dispatch = useDispatch()

    const {isAuth} = useSelector(state=>state.auth)
    const {goWithoutAuth} = useSelector(state=>state.auth)
    const router = useRouter()

    if (isAuth||goWithoutAuth){
        router.push("categorySubject")
    }


    useEffect(()=>{
        if (isSignUp) {
            setSwitchMode(true)
        }

    }, [isSignUp])

    return (
        <>

            <div className={style.main}>
                {isLoading2&&<CircularProgress/>}
                <div className={style.form}>

                    <div className={style.mainText}>
                        <span onClick={()=>setSwitchMode(false)} className={!isSwitchMode?style.active:""} style={{cursor:"pointer"}}>Sign up</span>
                        <span> | </span>
                        <span onClick={()=>setSwitchMode(true)} className={isSwitchMode?style.active:"" } style={{cursor:"pointer"}}>Sign In</span>
                    </div>
                    {!isSwitchMode?<SignUp/>:<SignIn/>}
                    {!isSwitchMode&&<div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <button className={style.btn2} onClick={() => dispatch(setWithoutAuth())}>Enter without
                            registration
                        </button>
                    </div>}

                </div>
            </div></>

    );
};

export default Sign;