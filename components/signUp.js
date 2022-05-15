import React from 'react';
import style from './../styles/SignUp.module.css'
import {Box, TextField, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {setHandleAuth} from "../redux/store/reducers/auth/auth.slice";

const SignUp = () => {

    const dispatch = useDispatch()
    return (
        <>

            <div className={style.secondText}>
                <span>Join our community and be great!</span>
            </div>

            <div>
                <div className={style.inputDiv1}>
                    <Typography>Name</Typography>
                    <TextField id="outlined-required" required variant="outlined" size={"small"} value={""}
                               sx={{backgroundColor: "rgba(104, 103, 112, 0.05)"}}/>
                </div>
                <div className={style.inputDiv2}>
                    <Typography>Surname</Typography>
                    <TextField id="outlined-required" required variant="outlined" size={"small"} value={""}
                               sx={{backgroundColor: "rgba(104, 103, 112, 0.05)"}}/>
                </div>
                <div className={style.inputDiv}>
                    <Typography>Email</Typography>
                    <TextField id="outlined-required" required variant="outlined" size={"small"} value={""}
                               sx={{backgroundColor: "rgba(104, 103, 112, 0.05)"}}
                               fullWidth/>
                </div>
                <div className={style.inputDiv}>
                    <Typography>Username</Typography>
                    <TextField id="outlined-required" required variant="outlined" size={"small"} value={""}
                               sx={{backgroundColor: "rgba(104, 103, 112, 0.05)"}}
                               fullWidth/>
                </div>
                <div className={style.inputDiv}>
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

            <div style={{textAlign: "center", marginBottom:"10px"}}>
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

            <div style={{display: "flex"}}>
                <input type="checkbox" style={{width: "50px"}}/>
                I agree with privacy policy. Terms of Use and Notifications
            </div>


            <div style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"10px"}}>
                <button className={style.btn1}>Create an account</button>
                <button className={style.btn2} onClick={()=>dispatch(setHandleAuth())}>Enter without registration</button>
            </div>


        </>
    );

};

export default SignUp;





