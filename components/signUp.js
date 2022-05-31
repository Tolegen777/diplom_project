import React from 'react';
import style from './../styles/SignUp.module.css'
import {Box, Button, CircularProgress, TextField, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setHandleAuth, setWithoutAuth} from "../redux/store/reducers/auth/auth.slice";
import * as yup from 'yup';
import formik, {useFormik} from "formik";
import {signUp} from "../redux/store/reducers/auth/auth.action";



const SignUp = () => {

    const isLoading2 = useSelector(state=>state.auth.isLoading2)
    const error2 = useSelector(state=>state.auth.error2)

    const validationSchema = yup.object({
        first_name: yup
            .string('Enter your name')
            .required('Name is required'),
        last_name:yup
            .string('Enter your surname')
            .required('Surname is required'),
        middle_name:'',
        email: yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required'),
        password: yup
            .string('Enter your password')
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required'),
        phone: yup
            .string('Enter your phone number')
            .min(10, 'phone number should be 11 characters length')
            .max(12, 'phone number should be 11 characters length')
            .required('phone number is required'),
    });

    const formik = useFormik({
            initialValues: {
                first_name: '',
                last_name:'',
                middle_name:'',
                email: '',
                phone:'',
                password: '',
            },
            validationSchema: validationSchema,
            onSubmit: (values) => {
                dispatch(signUp(values))
            },
        });


    const dispatch = useDispatch()


    return (
        <>
            {isLoading2&&<CircularProgress/>}
            {error2&&<div style={{color:"red", textAlign:"center"}}>Произошла ошибка</div>}

            <div className={style.secondText}>
                <span>Join our community and be great!</span>
            </div>

            <form onSubmit={formik.handleSubmit}>

                <div>
                    <div className={style.inputDiv1}>
                        <Typography>Name</Typography>
                        <TextField id="outlined-required" required variant="outlined" size={"small"}
                                   sx={{backgroundColor: "rgba(104, 103, 112, 0.05)"}}
                                   name="first_name"
                                   value={formik.values.first_name}
                                   onChange={formik.handleChange}
                                   error={formik.touched.first_name && Boolean(formik.errors.first_name)}
                                   helperText={formik.touched.first_name && formik.errors.first_name}
                        />
                    </div>
                    <div className={style.inputDiv2}>
                        <Typography>Surname</Typography>
                        <TextField id="outlined-required" required variant="outlined" size={"small"}
                                   sx={{backgroundColor: "rgba(104, 103, 112, 0.05)"}}
                                   name="last_name"
                                   value={formik.values.last_name}
                                   onChange={formik.handleChange}
                                   error={formik.touched.last_name && Boolean(formik.errors.last_name)}
                                   helperText={formik.touched.last_name && formik.errors.last_name}
                        />
                    </div>
                    <div className={style.inputDiv}>
                        <Typography>Middle name</Typography>
                        <TextField id="outlined-required" required variant="outlined" size={"small"}
                                   sx={{backgroundColor: "rgba(104, 103, 112, 0.05)"}}
                                   fullWidth
                                   name="middle_name"
                                   value={formik.values.middle_name}
                                   onChange={formik.handleChange}
                                   error={formik.touched.middle_name && Boolean(formik.errors.middle_name)}
                                   helperText={formik.touched.middle_name && formik.errors.middle_name}
                        />
                    </div>
                    <div className={style.inputDiv}>
                        <Typography>Phone</Typography>
                        <TextField id="outlined-required" required variant="outlined" size={"small"}
                                   sx={{backgroundColor: "rgba(104, 103, 112, 0.05)"}}
                                   fullWidth
                                   name="phone"
                                   value={formik.values.phone}
                                   onChange={formik.handleChange}
                                   error={formik.touched.phone && Boolean(formik.errors.phone)}
                                   helperText={formik.touched.phone && formik.errors.phone}
                        />
                    </div>

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

                <div style={{display: "flex"}}>
                    <input type="checkbox" style={{width: "50px"}}/>
                    I agree with privacy policy. Terms of Use and Notifications
                </div>


                <div style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"10px"}}>
                    <button className={style.btn1} type={"submit"}>Create an account</button>
                    <button className={style.btn2} onClick={()=>dispatch(setWithoutAuth())}>Enter without registration</button>
                </div>

            </form>
        </>
    );

};

export default SignUp;





