import React from 'react';
import style from "./../styles/Profile.module.css";
import Header from "./../components/header";
import MyButton from "./../components/button";
import {TextField} from "@mui/material";




const Profile = () => {
    return (
        <div>
            <Header/>
            <div className={style.main}>
                <div style={{display:"flex", alignItems:"center", justifyContent:"flex-start", marginBottom:"20px"}}>
                    <MyButton text = "Назад"  href = "/subject"/>
                    <div className={style.accountText}>Account</div>
                </div>

                <div>
                    <div className={style.dataText}>Данные студента</div>
                    <div style={{display:"flex"}}>
                        <div className={style.imgBlock}></div>
                        <div>
                            <div className={style.infoBlock}>
                                <div style={{marginRight:"5px"}}>Имя и фамилия</div>
                                <TextField></TextField>
                            </div>
                            <div className={style.infoBlock}>
                                <div style={{marginRight:"5px"}}>Номер телефона</div>
                                <TextField></TextField>
                            </div>
                            <div className={style.infoBlock}>
                                <div style={{marginRight:"5px"}}>Почта</div>
                                <TextField></TextField>
                            </div>
                            <div className={style.infoBlock}>
                                <div style={{marginRight:"5px"}}>Регион</div>
                                <TextField></TextField>
                            </div>

                        </div>
                    </div>
                </div>

                <hr style={{margin:"40px 0px"}}/>

                <div>
                    <div className={style.dataText}>Статистика</div>
                    <div style={{display:"flex"}}>
                        <div className={style.block2}><img src="/atomIcon.svg" /></div>
                        <div>
                            <div className={style.infoBlock2}>
                                <div style={{marginRight:"15px"}}>Первоночальная оценка</div>
                            </div>
                            <div className={style.infoBlock2}>
                                <div style={{marginRight:"15px"}}>За первый май месяц</div>
                            </div>
                            <div className={style.infoBlock2}>
                                <div style={{marginRight:"15px"}}>Полный отчет</div>
                            </div>
                            <div className={style.infoBlock2}>
                                <div style={{marginRight:"15px"}}>Здесь будет записываться средняя оценка на данный момент</div>
                            </div>
                            <div className={style.infoBlock2}>
                                <div style={{marginRight:"15px"}}>На данный момент пройдено 48 тем/200</div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </div>

    );
};

export default Profile;