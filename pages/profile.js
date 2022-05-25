import React from 'react';
import style from "./../styles/Profile.module.css";
import Header from "./../components/header";
import MyButton from "./../components/button";
import {TextField} from "@mui/material";
import {useGetProfileQuery} from "../redux/rtk-api/profile/profile";




const Profile = () => {

    const {data} = useGetProfileQuery()
    // console.log(data)

    return (
        <div>
            <Header/>
            <div className={style.main}>
                <div style={{display:"flex", alignItems:"center", justifyContent:"flex-start", marginBottom:"20px"}}>
                    <MyButton text = "Назад"  href = "/subject"/>
                    <div className={style.accountText}>Account</div>
                </div>

                <div>
                    <div className={style.dataText}>Student Data</div>
                    <div style={{display:"flex"}}>

                        <div className={style.imgBlock}><img src={data?data?.result.avatar:""} alt=""/></div>
                        <div>
                            <div className={style.infoBlock}>
                                <div style={{marginRight:"5px"}}>Full name</div>
                                <TextField value={data?`${data?.result?.user?.first_name} ${data?.result?.user?.last_name} ${data?.result?.user?.middle_name}`:""}></TextField>
                            </div>
                            <div className={style.infoBlock}>
                                <div style={{marginRight:"5px"}}>Phone number</div>
                                <TextField value={data?data?.result?.user?.phone:""}></TextField>
                            </div>
                            <div className={style.infoBlock}>
                                <div style={{marginRight:"5px"}}>Mail</div>
                                <TextField value = {data?data?.result?.user?.email:""}></TextField>
                            </div>
                            <div className={style.infoBlock}>
                                <div style={{marginRight:"5px"}}>Region</div>
                                <TextField value = {data?data?.result?.user?.region:""}></TextField>
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
                                <div style={{marginRight:"15px"}}>Initial assessment</div>
                            </div>
                            <div className={style.infoBlock2}>
                                <div style={{marginRight:"15px"}}>For the first month of May</div>
                            </div>
                            <div className={style.infoBlock2}>
                                <div style={{marginRight:"15px"}}>Full report</div>
                            </div>
                            <div className={style.infoBlock2}>
                                <div style={{marginRight:"15px"}}>This is where the average score so far will be recorded.</div>
                            </div>
                            <div className={style.infoBlock2}>
                                <div style={{marginRight:"15px"}}>48 topics/200 completed so far</div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </div>

    );
};

export default Profile;