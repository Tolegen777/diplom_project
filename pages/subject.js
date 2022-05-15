import React from 'react';

import {IconButton, InputAdornment, TextField} from "@mui/material";
import Header from "./../components/header";

import style from "./../styles/Subject.module.css";
import SearchIcon from '@mui/icons-material/Search';

import SubjectTopic from "./subjectTopic";
import Link from "next/link";

const icons = [1, 2, 3, 4]
const arr = [
    {
        id: 1,
        text: "Аккаунт",
        href:'/profile'
    },
    {
        id: 2,
        text: "Мои пройденные материалы",
        href:'/passedMaterials'
    },
    {
        id: 3,
        text: "Мои заметки",
        href:'/notes'
    },
    {
        id: 4,
        text: "Достиженя",
        href:'/achievements'
    },
]

const Subject = () => {
    return (
        <div>
            <Header/>
            <div className={style.main}>
                <div className={style.first}>
                    <div>
                        <div className={style.first_text}>Subject: History</div>
                        <div className="search"><TextField placeholder={"Search"}
                                                           InputProps={{
                                                               style: {color: "primary.main"},
                                                               endAdornment: <InputAdornment position="end"><IconButton
                                                                   sx={{p: '10px', color: "primary.main"}}>
                                                                   <SearchIcon color={"action"}/>
                                                               </IconButton></InputAdornment>
                                                           }}
                        /></div>
                    </div>
                    <div className={style.scndBlock}>
                        <div className={style.first_second}>
                            {icons.map((i,ind) => <div key={ind} className={style.icon}></div>)}
                        </div>
                        <div className={style.profileBlock}>
                            <img src="/user.svg" className={style.uIcon} alt=""/>
                            {arr.map(i => <Link href={i.href} key={i.id}><button   className={style.profileBtns}>{i.text}</button></Link>)}
                        </div>
                    </div>
                </div>
                <SubjectTopic/>
            </div>

        </div>
    );
};

export default Subject;