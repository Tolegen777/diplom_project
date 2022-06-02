import React,{useState} from 'react';
import style from "./../styles/Header.module.css"
import Link from "next/link";
import AuthWindow from "./AuthWindow";
import {useSelector} from "react-redux";

const Header = () => {

    const [isOpen,setOpen] = useState(false)
    const isAuth = useSelector(state=>state.auth.isAuth)

    const handleCheckAuth = () => {
        if (!isAuth){
            setOpen(true)
        }
    }

    return (

        <>
            {isOpen&&<AuthWindow isWindowOpen={isOpen} closeWindow={()=>setOpen(false)}/>}
            <div className={style.main}>
                <div className={style.first}>
                    <img src="/logo.svg" />
                </div>
                <div className={style.second}>
                    <div className={style.btn} onClick={handleCheckAuth}><Link href={isAuth?'settings':""}>Settings</Link></div>
                    <div className={style.btn} onClick={handleCheckAuth}><Link href={isAuth?'support':""}>Support</Link></div>
                    {/*<div className={style.second_first}>*/}
                    {/*    <div className={style.circle}></div>*/}
                    {/*    <div className={style.circle}></div>*/}
                    {/*</div>*/}
                </div>


            </div>
        </>

    );
};

export default Header;