import React, {useState,useEffect} from 'react';
import style from "./../styles/Settings.module.css";
import Header from "./../components/header";
import MyButton from "./../components/button";
import {Button, TextField} from "@mui/material";
import * as yup from "yup";
import {useFormik} from "formik";
import FormData from 'form-data';
import {signUp} from "../redux/store/reducers/auth/auth.action";
import {useUpdateProfileMutation} from "../redux/rtk-api/settings/settings";
import ImageContainer from "../components/imageContainer";
import ImageInput from "../components/imageInput";
import {setUpdateProfileData} from "../redux/store/reducers/auth/auth.slice";
import {useDispatch, useSelector} from "react-redux";
import CustomAlert from "../components/customAlert";
import {useRouter} from "next/router";


const Settings = () => {

    const [sendUpdateData,{isLoading,isError,isSuccess}] = useUpdateProfileMutation()
    const [isAlertOpen, setAlertOpen] = useState(false)


    useEffect(() => {
        if (isAlertOpen) {
            const timer = setTimeout(() => {
                setAlertOpen(false)
            }, 2000);
            return () => clearTimeout(timer);
        }

    }, [isAlertOpen]);

    useEffect(()=>{
        if (isSuccess){
            setAlertOpen(true)
        }
    },[isSuccess])

    const dispatch = useDispatch()
    const data = useSelector(state=>state.auth)

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
            first_name: data.first_name,
            last_name: data.last_name,
            middle_name: data.middle_name,
            email: data.email,
            phone: data.phone,
            password: data.password,
            region: data.region,
            avatar: data.avatar
        },
        validationSchema:validationSchema,
        onSubmit: (values) => {
            const formData = new FormData()



            if (values.first_name !== null) {
                formData.append('first_name', values.first_name);
            }
            if (values.last_name !== null) {
                formData.append('last_name', values.last_name);
            }
            if (values.middle_name !== null) {
                formData.append('middle_name', values.middle_name);
            }
            if (values.phone !== null) {
                formData.append('phone', values.phone);
            }
            if (values.email !== null) {
                formData.append('email', values.email);
            }
            if (values.region !== null) {
                formData.append('region', values.region);
            }
            if (values.password !== null) {
                formData.append('password', values.password);
            }

            sendUpdateData(formData).then(
                   res=>{dispatch(setUpdateProfileData(res.data.result.user))}
               )

        },
    });





    return (
        <div className={style.parent}>
            <Header/>
            <div className={style.main}>

                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "20px"
                }}>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <MyButton text="Back" href="/subject"/>
                        <div className={style.headText}>Settings</div>
                    </div>
                </div>


                    <div style={{border: "3px solid #2E5984", padding: "10px"}}>
                        <div>
                            <form onSubmit={formik.handleSubmit}>

                                <div>
                                    <h4 className={style.title}>Name</h4>
                                    <TextField
                                    id="first_name"
                                    name="first_name"
                                    className={style.input}
                                    size="small"
                                    value={formik.values.first_name}
                                    onChange={formik.handleChange}

                                /></div>

                                <div>
                                    <h4 className={style.title}>Sure Name</h4>
                                    <TextField
                                    id="last_name"
                                    name="last_name"
                                    className={style.input}
                                    size="small"
                                    value={formik.values.last_name}
                                    onChange={formik.handleChange}

                                /></div>

                                <div>
                                    <h4 className={style.title}>Email</h4>
                                    <TextField
                                    id="email"
                                    name="email"
                                    type="email"
                                    className={style.input}
                                    size="small"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}

                                /></div>

                                <div>
                                    <h4 className={style.title}>Phone</h4>
                                    <TextField
                                    id="phone"
                                    name="phone"
                                    className={style.input}
                                    size="small"
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}

                                /></div>

                                <div>
                                    <h4 className={style.title}>Region</h4>
                                    <TextField
                                        id="region"
                                        name="region"
                                        className={style.input}
                                        size="small"
                                        value={formik.values.region}
                                        onChange={formik.handleChange}

                                    />
                                </div>
                                <div style={{display:"flex", justifyContent:"flex-end"}}>
                                    <Button variant="contained" type="submit" sx={{
                                        width: "141px",
                                        height: "41px",
                                        background: "#FAB536",
                                        borderRadius: "10px",
                                        color:"black"
                                    }}>
                                        Save
                                    </Button>
                                </div>



                            </form>
                            {isAlertOpen &&
                                <CustomAlert message={"Your profile data successfully updated!"} status={"success"}/>}
                        </div>

                    </div>




            </div>
        </div>

    );
};

export default Settings;





