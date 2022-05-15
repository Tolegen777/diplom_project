import React, {useState} from 'react';
import style from "./../styles/Sign.module.css";
import SwitchingButtons from "./../components/switchingButtons";
import SignIn from "./../components/signIn";
import SignUp from "./../components/signUp";
import {useSelector} from "react-redux";

const Sign = () => {

    const [isSwitchMode, setSwitchMode] = useState(false)



    return (
        <div className={style.main}>
            <div className={style.form}>
                <div className={style.switch}>
                    <SwitchingButtons/>
                </div>
                <div className={style.mainText}>
                    <span onClick={()=>setSwitchMode(false)} className={!isSwitchMode?style.active:""}>Sign up</span>
                    <span> | </span>
                    <span onClick={()=>setSwitchMode(true)} className={isSwitchMode?style.active:""}>Sign In</span>
                </div>
                {!isSwitchMode?<SignUp/>:<SignIn/>}
            </div>
        </div>
    );
};

export default Sign;