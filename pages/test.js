import React, {useEffect, useState} from 'react';
import style from "./../styles/Task.module.css";
import {CircularProgress, Pagination} from "@mui/material";
import MyButton from "./../components/button";
import {useGetGenerateQuestionsQuery, useSubmitTestAnswerMutation} from "../redux/rtk-api/generate_test/questions";
import {useGetMultiTestResultQuery} from "../redux/rtk-api/getMultitestResult/getMultitestResult";
import CustomAlert2 from "../components/customAlert2";
import SuccessWindow from "../components/SuccessWindow";
import {useSelector} from "react-redux";


const Test = () => {

    const categoryId = useSelector(state=>state.course.categoryId)
    const [page, setPage] = useState()
    const [page2, setPage2] = useState(1)
    const [option, setOption] = useState()
    const [isChosen, setChose] = useState(false)
    const [chosenValue, setChoseValue] = useState()

    const [answer,setAnswer] = useState('')

    const {data:res,refetch} = useGetMultiTestResultQuery("ss")


    const {data, isLoading} = useGetGenerateQuestionsQuery(page)
    const [submitAnswer, {isSuccess}] = useSubmitTestAnswerMutation()

    const handleChange = (event, value) => {
        setPage(value);
        setPage2(value);
        setAnswer('')
    };

    const handleSubmitAnswer = (value) => {

        let data2 = {categoryId, page2, option}
        submitAnswer(data2).then(res=>{
            if (res.data.result.result==="CORRECT"){

                setAnswer("success")
            } else{

                setAnswer("error")
            }
        })
    }

    const [isOpen,setOpen] = useState(false)


    const handleChose = (value, ind, id) => {
        setOption(ind)
        setChoseValue(value)
        setPage2(id)
    }

    useEffect(()=>{

        if (page===data?.result?.count){
            if (isSuccess){

                refetch()
            }

        }
    },[isSuccess,page2])

    useEffect(()=>{
        if (res&&res.result.length>0){
            setOpen(
                true
            )
        }
    },[res])

    return (
        <div className={style.main}>
            {<SuccessWindow isWindowOpen={isOpen} closeWindow={()=>setOpen(false)} title={"You have successfully completed the multi-test!"}/>}
            <div className={style.head}>
                <div style={{display: "flex", alignItems: "center"}}>

                    <div>
                        <MyButton text="Back" href="/passedMaterials"/>
                    </div>
                    <div className={style.first_text}>Topic: {data&&data.result.results[0]&&data.result.results[0].category.name}</div>
                </div>

                <div style={{display: "flex", alignItems: "center"}}>
                    <div>Questions:</div>
                    <Pagination count={data ? data?.result?.count : 0} onChange={handleChange} size={"large"}/>

                </div>
            </div>
            <div style={{marginTop: "40px", height: "60vh"}}>
                <div className={style.task}>
                    <div style={{
                        fontStyle: "normal",
                        fontWeight: '600',
                        fontSize: '25px',
                        lineHeight: '29px',
                        marginBottom: "15px"
                    }}>Task:
                    </div>
                    <div style={{
                        fontStyle: "normal",
                        fontWeight: '400',
                        fontSize: '20px',
                        lineHeight: '29px'
                    }}>{data && data?.result?.results[0]?.title}</div>
                </div>

                <div style={{ display:"flex", alignItems:"center", justifyContent:"center"}}>
                    {answer==="success"&&<CustomAlert2 status={"success"} message={"Correct answer!"} handleClean = {setAnswer}/>}
                    {answer==="error"&&<CustomAlert2 status={"error"} message={"Wrong answer!"} handleClean = {setAnswer}/>}
                </div>

            </div>

            {isLoading ? <CircularProgress/> : <div className={style.footer}>
                <div className={style.question}>{data && data?.result?.results[0]?.description}</div>
                <div className={style.answerBlock}>
                    {data && data?.result?.results[0]?.options.map((a, ind) => <div key={ind} className={style.answers}
                                                                                    style={{
                                                                                        border: chosenValue===a.option_text ? "3px solid #FAB536" : "3px solid #2E5984"
                                                                                    }}
                                                                                    onClick={() => handleChose(a.option_text, a.id, data?.result?.results[0].id)}>{a.option_text}</div>)}
                </div>
                <button className={style.submitButton} onClick={handleSubmitAnswer}>Answer</button>

            </div>}


        </div>
    );
};

export default Test;