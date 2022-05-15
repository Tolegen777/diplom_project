import React from 'react';
import style from "./../styles/Task.module.css";
import LabelIcon from "@mui/icons-material/Label";
import {Pagination} from "@mui/material";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import MyButton from "./../components/button";

const answers = ["в 5 веке", "в 5 веке", "в 5 веке", "в 5 веке"]

const Task = () => {
    return (
        <div className={style.main}>
            <div className={style.head}>
                <div style={{display: "flex", alignItems: "center"}}>

                    <div>
                        <MyButton text = "Назад"  href = "/selectedTopic"/>
                    </div>
                    <div className={style.first_text}>Тема: Шелковый путь</div>
                </div>

                <div style={{display: "flex", alignItems: "center"}}>
                    <div>Вопросы:</div>
                    <Pagination count={10}/>
                    <QuestionMarkIcon
                        sx={{
                            backgroundColor: "#C4C4C4",
                            border: "1px solid #000000",
                            borderRadius: "5px",
                            width: "50px",
                            height: "30px"
                        }}/>
                </div>
            </div>
            <div style={{marginTop:"40px",height:"60vh"}}>
                <div style={{width:"320px", height:"160px", backgroundColor:"#C4C4C4", borderRadius:"20px", padding:"10px"}}>
                    <div style={{fontStyle: "normal",
                        fontWeight: '600',
                        fontSize: '25px',
                        lineHeight: '29px',
                    marginBottom:"15px"}}>Задание:</div>
                    <div style={{fontStyle: "normal",
                        fontWeight: '400',
                        fontSize: '20px',
                        lineHeight: '29px'}}>Мне нужно присоедениться к этому народу</div>
                </div>

            </div>

            <div className={style.footer}>
                <div className={style.question}>Вопрос: когда появился щелковый путь?</div>
                <div className={style.answerBlock}>
                    {answers.map((a,ind)=><div key = {ind} className={style.answers}>{a}</div>)}
                </div>
                <button className={style.submitButton}>Ответить</button>

            </div>


        </div>
    );
};

export default Task;