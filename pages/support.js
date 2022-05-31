import React, {useState, useEffect} from 'react';
import style from "./../styles/Support.module.css";
import Header from "./../components/header";
import MyButton from "./../components/button";
import {TextField} from "@mui/material";
import {useSubmitSupportMutation} from "../redux/rtk-api/submitSupportQuestion/submitSupportQuestion";
import CustomAlert from "../components/customAlert";
import {useSelector} from "react-redux";


const Support = () => {

    const {first_name, last_name, middle_name} = useSelector(state=>state.auth)

    const [value, setValue] = useState('')

    const [isAlertOpen, setAlertOpen] = useState(false)

    const handleChange = (value) => {
        setValue(value)
    }

    useEffect(() => {
        if (isAlertOpen) {
            const timer = setTimeout(() => {
                setAlertOpen(false)
            }, 2000);
            return () => clearTimeout(timer);
        }

    }, [isAlertOpen]);

    const [submitAskSupport, {}] = useSubmitSupportMutation()

    const handleSubmit = () => {
        const data = {title: "Support question", value}
        submitAskSupport(data)
        setValue("")
        setAlertOpen(true)
    }


    return (
        <div>
            <Header/>
            {value}
            <div className={style.main}>

                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "20px",
                    width: "50%"
                }}>
                    <MyButton text="Back" href="/subject"/>
                    <div style={{alignItems: "center"}}>
                        <div className={style.headText}>Hello {`${last_name} ${first_name} ${middle_name}` }</div>
                        <div className={style.mainText}>How can we help you?</div>
                    </div>
                </div>

                <div>
                    <div className={style.mainText}>About us</div>
                    <div style={{display: "flex"}}>
                        <div className={style.imgBlock}><img src="/img.jpg" style={{width:"100%", height:"283px"}} alt=""/></div>
                        <div className={style.desc}>BeGreat is an interactive platform that will help you understand
                            topics ranging from mathematics to the language of the school curriculum. Our mission is to
                            provide fascinating content for the assimilation of the material. We have tried to create
                            exciting animations with its story, straightforward questions, and, our cherry on top,
                            multi-tests that help you consolidate the material forever!
                        </div>
                    </div>
                    <hr style={{margin: "20px 0"}}/>
                    <div style={{display: "flex"}}>
                        <div style={{width: "40%"}}>
                            <div className={style.mainText}>I have a question</div>
                            <div className={style.headText}>Fill out this form, you can contact us and report your problem
                            </div>
                        </div>
                        <div style={{width: "60%"}}>
                            <div className={style.mainText}>What can we help you with?</div>
                            <div className={style.textArea}>
                                <div style={{width: "90%"}}>
                                    {isAlertOpen &&
                                        <CustomAlert message={"Your message successfully sent!"} status={"success"}/>}
                                    <TextField placeholder={"Write your message..."} fullWidth
                                               rows={4} multiline value={value}
                                               onChange={(e) => handleChange(e.target.value)}/></div>
                                <div style={{display: "flex", justifyContent: "flex-end", flexDirection: "column"}}>
                                    <button onClick={handleSubmit} style={{
                                        marginRight: "0px",
                                        width: "80px",
                                        height: "40px",
                                        borderRadius: "5px",
                                        marginLeft: "5px",
                                        cursor: "pointer"
                                    }}>Send
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default Support;


