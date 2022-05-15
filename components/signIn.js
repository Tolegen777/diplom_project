import React from 'react';
import style from './../styles/SignIn.module.css'
import {Box, TextField, Typography} from "@mui/material";
import {setHandleAuth} from "../redux/store/reducers/auth/auth.slice";
import {useDispatch} from "react-redux";

const SignUp = () => {

    const dispatch = useDispatch()

    return (
        <div>
            <div className={style.secondText}>
                <span>lets get started!</span>
            </div>

            <div>
                <div>
                    <Typography>UserName or Email</Typography>
                    <TextField id="outlined-required" required variant="outlined" size={"small"} value={""}
                               sx={{backgroundColor: "rgba(104, 103, 112, 0.05)"}}
                               fullWidth/>
                </div>
                <div>
                    <Typography>Password</Typography>
                    <TextField id="outlined-required" required variant="outlined" size={"small"} value={""}
                               sx={{backgroundColor: "rgba(104, 103, 112, 0.05)"}}
                               fullWidth/>
                </div>

            </div>

            <div style={{marginTop: "20px"}}>
                <hr style={{
                    width: "40%",
                    float: "left"
                }}/>
                <div style={{
                    display: "inline-block", width: "20%", textAlign: "center",
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '30px',
                    lineHeight: '35px',
                    color: '#000000'
                }}>Or
                </div>
                <hr style={{
                    width: "40%",
                    float: "right"
                }}/>
            </div>

            <div style={{textAlign: "center"}}>
                <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'rgba(104, 103, 112, 0.05)',
                    border: '1px solid #000000',
                    display: "inline-block",
                    borderRadius: "50px"
                }}>
                </div>
                <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'rgba(104, 103, 112, 0.05)',
                    border: '1px solid #000000',
                    display: "inline-block",
                    borderRadius: "50px",
                    marginLeft: "20px"
                }}>
                </div>
                <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'rgba(104, 103, 112, 0.05)',
                    border: '1px solid #000000',
                    display: "inline-block",
                    borderRadius: "50px",
                    marginLeft: "20px"
                }}>
                </div>
                <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'rgba(104, 103, 112, 0.05)',
                    border: '1px solid #000000',
                    display: "inline-block",
                    borderRadius: "50px",
                    marginLeft: "20px"
                }}>
                </div>
            </div>
            <div style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"10px"}}>
                <button className={style.btn1}>Sign in</button>
                <button className={style.btn2} onClick={()=>dispatch(setHandleAuth())}>Enter without registration</button>
            </div>


        </div>
    );
};

export default SignUp;


