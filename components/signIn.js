import React from 'react';
import style from './../styles/SignIn.module.css'
import {Box, CircularProgress, TextField, Typography} from "@mui/material";
import {setHandleAuth} from "../redux/store/reducers/auth/auth.slice";
import {useDispatch, useSelector} from "react-redux";
import * as yup from "yup";
import {useFormik} from "formik";
import {login} from "../redux/store/reducers/auth/auth.action";

const SignUp = () => {
    const isLoading = useSelector(state=>state.auth.isLoading)
    const error = useSelector(state=>state.auth.error)

    const validationSchema = yup.object({
        email: yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required'),
        password: yup
            .string('Enter your password')
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required'),

    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            anonymous_token: 'token'

        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // console.log(values)
            dispatch(login(values))
            // console.log(JSON.parse(JSON.stringify(values, null, 2)))
            // console.log(typeof JSON.parse(JSON.stringify(values, null, 2)))
            // alert(JSON.stringify(values, null, 2));

        },
    });


    const dispatch = useDispatch()


    return (
        <>
            {isLoading&&<CircularProgress/>}
            {error&&<div>Произошла ошибка</div>}

            <div className={style.secondText}>
                <span>lets get started!</span>
            </div>

            <form onSubmit={formik.handleSubmit}>

                <div>
                    <div className={style.inputDiv}>
                        <Typography>Email</Typography>
                        <TextField id="outlined-required" required variant="outlined" size={"small"}
                                   sx={{backgroundColor: "rgba(104, 103, 112, 0.05)"}}
                                   fullWidth
                                   name="email"
                                   type={"email"}
                                   value={formik.values.email}
                                   onChange={formik.handleChange}
                                   error={formik.touched.email && Boolean(formik.errors.email)}
                                   helperText={formik.touched.email && formik.errors.email}
                        />
                    </div>

                    <div className={style.inputDiv}>
                        <Typography>Password</Typography>
                        <TextField id="outlined-required" required variant="outlined" size={"small"}
                                   sx={{backgroundColor: "rgba(104, 103, 112, 0.05)"}}
                                   fullWidth
                                   name="password"
                                   value={formik.values.password}
                                   onChange={formik.handleChange}
                                   error={formik.touched.password && Boolean(formik.errors.password)}
                                   helperText={formik.touched.password && formik.errors.password}
                        />
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

                <div style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"10px"}}>
                    <button className={style.btn1} type={"submit"}>Sign in</button>
                    {/*<button className={style.btn2} onClick={()=>dispatch(setHandleAuth())}>Enter without registration</button>*/}
                </div>

            </form>

        </>
    );





};

export default SignUp;


