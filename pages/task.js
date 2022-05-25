import React, {useEffect, useState} from 'react';
import style from "./../styles/Task.module.css";
import LabelIcon from "@mui/icons-material/Label";
import {Pagination} from "@mui/material";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import MyButton from "./../components/button";
import {useGetQuestionsQuery} from "../redux/rtk-api/questions/questions";
import {useSelector} from "react-redux";
import {useSubmitAnswerMutation} from "../redux/rtk-api/submitAnswer/submitAnswer";

const answers = ["в 5 веке", "в 5 веке", "в 5 веке", "в 5 веке"]

const Task = () => {

    const [categoryId, setCategoryId] = useState(2)
    const [page, setPage] = useState()
    const [page2, setPage2] = useState(1)
    const [option, setOption] = useState()




    const {data} = useGetQuestionsQuery({categoryId,page})
    // console.log(data)
    // console.log("ques")

    const [submitAnswer,{}] = useSubmitAnswerMutation()

    const handleChange = (event, value) => {
        setPage(value);
        setPage2(value)
    };

    const handleSubmitAnswer = () => {
        // debugger
        // submitAnswer(categoryId,page2,option)
        let data2 = {categoryId,page2,option}
        submitAnswer(data2)
        console.log(data2)
        console.log("data2")
        // submitAnswer(data2)

    }

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
                    <Pagination count={10} onChange={handleChange}/>
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
                        lineHeight: '29px'}}>{data&&data?.result?.results[0]?.title}</div>
                </div>

            </div>

            <div className={style.footer}>
                <div className={style.question}>Вопрос: {data&&data?.result?.results[0]?.description}</div>
                <div className={style.answerBlock}>
                    {answers.map((a,ind)=><div key = {ind} className={style.answers} onClick={()=>setOption(ind)}>{a}</div>)}
                </div>
                <button className={style.submitButton} onClick={handleSubmitAnswer}>Ответить</button>

            </div>


        </div>
    );
};

export default Task;