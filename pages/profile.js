import React from 'react';
import style from "./../styles/Profile.module.css";
import Header from "./../components/header";
import MyButton from "./../components/button";
import {TextField} from "@mui/material";
import {useGetProfileQuery} from "../redux/rtk-api/profile/profile";
import {useGetFinishedCoursesQuery} from "../redux/rtk-api/finishedCourses/finishedCourses";


const Profile = () => {

    const {data} = useGetProfileQuery()
    const {data:finishData,isLoading,isError} = useGetFinishedCoursesQuery()


    return (
        <div>
            <Header/>
            <div className={style.main}>
                <div style={{display:"flex", alignItems:"center", justifyContent:"flex-start", marginBottom:"20px"}}>
                    <MyButton text = "Back"  href = "/subject"/>
                    <div className={style.accountText}>Account</div>
                </div>

                <div>
                    <div className={style.dataText}>Student Data</div>
                    <div style={{display:"flex"}}>

                        <div>
                            <div className={style.infoBlock}>
                                <div style={{marginRight:"5px", width:"150px"}}>Full name</div>
                                <TextField value={data?`${data?.result?.user?.first_name} ${data?.result?.user?.last_name} ${data?.result?.user?.middle_name}`:""} className={style.input}></TextField>
                            </div>
                            <div className={style.infoBlock}>
                                <div style={{marginRight:"5px", width:"150px"}}>Phone number</div>
                                <TextField value={data?data?.result?.user?.phone:""} className={style.input}></TextField>
                            </div>
                            <div className={style.infoBlock}>
                                <div style={{marginRight:"5px", width:"150px"}}>Mail</div>
                                <TextField value = {data?data?.result?.user?.email:""} className={style.input}></TextField>
                            </div>
                            <div className={style.infoBlock}>
                                <div style={{marginRight:"5px", width:"150px"}}>Region</div>
                                <TextField value = {data?data?.result?.user?.region:""} className={style.input}></TextField>
                            </div>

                        </div>
                    </div>
                </div>

                <hr style={{margin:"40px 0px"}}/>

                <div>
                    <div className={style.dataText}>Statistics</div>
                    <div style={{display:"flex"}}>
                        <div className={style.block2}><img src="/atom.svg" /></div>
                        <div>
                            <div className={style.infoBlock2}>
                                <div style={{marginRight:"15px",fontSize:"20px"}}>Name of course: {finishData&&finishData?.result[0]?.category?.course?.name}</div>
                            </div>
                            <div className={style.infoBlock2}>
                                <div style={{marginRight:"15px",fontSize:"20px"}}>Finished theme: {finishData&&finishData?.result[0]?.category?.name}</div>
                            </div>
                            <div className={style.infoBlock2}>
                                <div style={{marginRight:"15px",fontSize:"20px"}}>Class of finished theme: {finishData&&finishData?.result[0]?.category?.grade}</div>
                            </div>
                            <div className={style.infoBlock2}>
                                <div style={{marginRight:"15px",fontSize:"20px"}}>Grade: {finishData&&finishData?.result[0]?.answered_correct}</div>
                            </div>
                            <div className={style.infoBlock2}>
                                <div style={{marginRight:"15px",fontSize:"20px"}}>{finishData&&finishData?.result[0]?.passed_lectures} completed so far</div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </div>

    );
};

export default Profile;