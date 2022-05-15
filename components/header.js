import React from 'react';
import style from "./../styles/Header.module.css"
import Link from "next/link";

const Header = () => {
    return (
        <div className={style.main}>
            <div className={style.first}>
                <div>BeGreat with us!</div>
            </div>
            <div className={style.second}>
                <div className={style.btn}><Link href={'settings'}>Settings</Link></div>
                <div className={style.btn}><Link href={'support'}>Support</Link></div>
                <div className={style.second_first}>
                    <div className={style.circle}></div>
                    <div className={style.circle}></div>
                </div>
            </div>


        </div>
    );
};

export default Header;