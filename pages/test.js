import React, {useState} from 'react';
import style from "./../styles/Task.module.css";
import {CircularProgress, Pagination} from "@mui/material";
import MyButton from "./../components/button";
import {useGetQuestionsQuery} from "../redux/rtk-api/questions/questions";
import {useSubmitAnswerMutation} from "../redux/rtk-api/submitAnswer/submitAnswer";
import CustomAlert from "../components/customAlert";
import {
    useGenerateMutation,
    useGetGenerateQuestionsQuery,
    useSubmitTestAnswerMutation
} from "../redux/rtk-api/generate_test/questions";


const Test = () => {

    const [categoryId, setCategoryId] = useState(2)
    const [page, setPage] = useState()
    const [page2, setPage2] = useState(1)
    const [option, setOption] = useState()
    const [isChosen, setChose] = useState(false)
    const [chosenValue, setChoseValue] = useState()

    const [answer,setAnswer] = useState('')


    const {data, isLoading} = useGetGenerateQuestionsQuery(page)
    console.log(data)
    // console.log(data)
    // console.log("ques")
    // console.log(data)
    // console.log("vf")

    const [submitAnswer, {isSuccess}] = useSubmitTestAnswerMutation()

    const handleChange = (event, value) => {
        setPage(value);
        setPage2(value);
        setAnswer('')
    };

    const handleSubmitAnswer = (value) => {
        // debugger
        // submitAnswer(categoryId,page2,option)
        let data2 = {categoryId, page2, option}
        // debugger
        submitAnswer(data2).then(res=>{
            if (res.data.result.result==="CORRECT"){

                setAnswer("success")
            } else{

                setAnswer("error")
            }
        })

        // console.log(data2)


        // submitAnswer(data2)

    }


    const handleChose = (value, ind, id) => {
        setOption(ind)
        setChoseValue(value)
        setPage2(id)
        // if (chosenValue === value) {
        //     setChose(true)
        // } else setChose(false)
    }


    return (
        <div className={style.main}>
            <div className={style.head}>
                <div style={{display: "flex", alignItems: "center"}}>

                    <div>
                        <MyButton text="Back" href="/passedMaterials"/>
                    </div>
                    <div className={style.first_text}>Тема: Шелковый путь</div>
                </div>

                <div style={{display: "flex", alignItems: "center"}}>
                    <div>Вопросы:</div>
                    <Pagination count={data ? data?.result?.count : 0} onChange={handleChange}/>

                </div>
            </div>
            <div style={{marginTop: "40px", height: "60vh"}}>
                <div style={{
                    width: "320px",
                    height: "160px",
                    backgroundColor: "#C4C4C4",
                    borderRadius: "20px",
                    padding: "10px"
                }}>
                    <div style={{
                        fontStyle: "normal",
                        fontWeight: '600',
                        fontSize: '25px',
                        lineHeight: '29px',
                        marginBottom: "15px"
                    }}>Задание:
                    </div>
                    <div style={{
                        fontStyle: "normal",
                        fontWeight: '400',
                        fontSize: '20px',
                        lineHeight: '29px'
                    }}>{data && data?.result?.results[0]?.title}</div>
                </div>

                <div style={{ display:"flex", alignItems:"center", justifyContent:"center"}}>
                    {answer==="success"&&<CustomAlert status={"success"} message={"Correct answer!"} handleClean = {setAnswer}/>}
                    {answer==="error"&&<CustomAlert status={"error"} message={"Wrong answer!"} handleClean = {setAnswer}/>}
                </div>

            </div>

            {isLoading ? <CircularProgress/> : <div className={style.footer}>
                <div className={style.question}>Вопрос: {data && data?.result?.results[0]?.description}</div>
                <div className={style.answerBlock}>
                    {data && data?.result?.results[0]?.options.map((a, ind) => <div key={ind} className={style.answers}
                                                                                    style={{backgroundColor: chosenValue===a.option_text ? "blue" : "#C4C4C4",
                                                                                        color: chosenValue===a.option_text ? "white" : "#000000"
                                                                                    }}
                                                                                    onClick={() => handleChose(a.option_text, a.id, data?.result?.results[0].id)}>{a.option_text}</div>)}
                </div>
                <button className={style.submitButton} onClick={handleSubmitAnswer}>Answer</button>

            </div>}


        </div>
    );
};

export default Test;