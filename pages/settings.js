import React from 'react';
import style from "./../styles/Settings.module.css";
import Header from "./../components/header";
import MyButton from "./../components/button";
import {TextField} from "@mui/material";
import * as yup from "yup";
import {useFormik} from "formik";
import FormData from 'form-data';
import {signUp} from "../redux/store/reducers/auth/auth.action";


const Settings = () => {

    const formData = new FormData()


    const validationSchema = yup.object({
        email: yup
            .string('Enter your email')
            .email('Enter a valid email'),
        password: yup
            .string('Enter your password')
            .min(8, 'Password should be of minimum 8 characters length'),
        phone: yup
            .string('Enter your phone number')
            .min(10, 'phone number should be 11 characters length')
            .max(12, 'phone number should be 11 characters length')

    });

    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            middle_name: '',
            email: '',
            phone: '',
            password: '',
            region: '',
            avatar: null
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // dispatch(signUp(values))


            // console.log(product.subs)
            // console.log("product")
            if (values.first_name !== '') {
                formData.append('first_name', values.first_name);
            } else if (values.last_name !== '') {
                formData.append('last_name', values.last_name);
            } else if (values.middle_name !== '') {
                formData.append('middle_name', values.middle_name);
            } else if (values.phone !== '') {
                formData.append('phone', values.phone);
            } else if (values.email !== '') {
                formData.append('email', values.email);
            } else if (values.region !== '') {
                formData.append('region', values.region);
            } else if (values.password !== '') {
                formData.append('password', values.password);
            } else if (values.avatar !== null) {
                formData.append('avatar', values.avatar);
            }

            // alert(JSON.stringify(values, null, 2));
            alert(formData);
        },
    });

    return (
        <div>
            <Header/>
            <div className={style.main}>

                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "20px"
                }}>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <MyButton text="Назад" href="/subject"/>
                        <div className={style.headText}>Settings</div>
                    </div>
                </div>

                <div style={{border: "1px solid #000000", padding: "10px"}}>
                    <div className={style.accSettings}>Account settings</div>
                    <div>
                        <div className={style.text}>Avatar</div>
                        <div><TextField size={"small"} className={style.input} sx={{width: "500px"}}
                                        onChange={formik.handleChange}
                                        value={formik.values.avatar}/></div>
                    </div>
                    <div>
                        <div className={style.text}>Name</div>
                        <div><TextField size={"small"} className={style.input}
                                        onChange={formik.handleChange}
                                        value={formik.values.first_name}/></div>
                    </div>
                    <div>
                        <div className={style.text}>Surname</div>
                        <div><TextField size={"small"} className={style.input}
                                        onChange={formik.handleChange}
                                        value={formik.values.last_name}/></div>
                    </div>
                    <div>
                        <div className={style.text}>Middle name</div>
                        <div><TextField size={"small"} className={style.input} sx={{width: "500px"}}
                                        onChange={formik.handleChange}
                                        value={formik.values.middle_name}/></div>
                    </div>
                    <div>
                        <div className={style.text}>Email</div>
                        <div><TextField size={"small"} className={style.input} sx={{width: "500px"}}
                                        onChange={formik.handleChange}
                                        value={formik.values.email}/></div>
                    </div>
                    <div>
                        <div className={style.text}>Password</div>
                        <div><TextField size={"small"} className={style.input} sx={{width: "500px"}}
                                        onChange={formik.handleChange}
                                        value={formik.values.password}/></div>
                    </div>
                    <div>
                        <div className={style.text}>Region</div>
                        <div><TextField size={"small"} className={style.input} sx={{width: "500px"}}
                                        onChange={formik.handleChange}
                                        value={formik.values.region}/></div>
                    </div>
                    <div>
                        <div className={style.text}>Phone</div>
                        <div><TextField size={"small"} className={style.input} sx={{width: "500px"}}
                                        onChange={formik.handleChange}
                                        value={formik.values.phone}/></div>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default Settings;


