import React from 'react';
import style from "./../styles/Settings.module.css";
import Header from "./../components/header";
import MyButton from "./../components/button";
import {TextField} from "@mui/material";




const Settings = () => {
    return (
        <div>
            <Header/>
            <div className={style.main}>

                <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"20px"}}>
                    <div style={{display:"flex", alignItems:"center"}}>
                        <MyButton text = "Назад"  href = "/subject"/>
                        <div className={style.headText}>Settings</div>
                    </div>
                </div>

                <div style={{border:"1px solid #000000", padding:"10px"}}>
<div className={style.accSettings}>Account settings</div>
                    <div>
                        <div className={style.text}>Name</div>
                        <div><TextField size={"small"} className={style.input}/></div>
                    </div>
                    <div>
                        <div className={style.text}>SureName</div>
                        <div><TextField size={"small"} className={style.input}/></div>
                    </div>
                    <div>
                        <div className={style.text}>Email</div>
                        <div><TextField size={"small"} className={style.input} sx={{width:"500px"}}/></div>
                    </div>
                    <div>
                        <div className={style.text}>UserName</div>
                        <div><TextField size={"small"} className={style.input} sx={{width:"500px"}}/></div>
                    </div>
                    <div>
                        <div className={style.text}>Password</div>
                        <div><TextField size={"small"} className={style.input} sx={{width:"500px"}}/></div>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default Settings;


