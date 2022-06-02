import React, {useEffect, useState} from 'react';
import style from "./../styles/Task.module.css";
import {CircularProgress, Pagination} from "@mui/material";
import MyButton from "./../components/button";
import {useGetQuestionsQuery} from "../redux/rtk-api/questions/questions";
import {useSubmitAnswerMutation} from "../redux/rtk-api/submitAnswer/submitAnswer";
import {useGetFinishedCoursesQuery} from "../redux/rtk-api/finishedCourses/finishedCourses";
import SuccessWindow from "../components/SuccessWindow";
import CustomAlert2 from "../components/customAlert2";
import {useSelector} from "react-redux";


const Task = () => {
    const categoryId = useSelector(state=>state.course.categoryId)

    const [page, setPage] = useState()
    const [page2, setPage2] = useState(1)
    const [option, setOption] = useState()
    const [isChosen, setChose] = useState(false)
    const [chosenValue, setChoseValue] = useState()

    const [answer,setAnswer] = useState('')

    const [count,setCount] = useState(1)


    const {data, isLoading} = useGetQuestionsQuery({categoryId, page})
    const [submitAnswer, {isSuccess,isLoading:loadingSubmit}] = useSubmitAnswerMutation()

    const handleChange = (event, value) => {
        setPage(value);
        setPage2(value)
        setAnswer('')
        setChoseValue("null")

    };


    const handleSubmitAnswer = (value) => {

        let data2 = {categoryId, page2, option}
        submitAnswer(data2).then(res=>{
            if (res.data&&res.data.result.result==="CORRECT"){
                setAnswer("success")
                setCount(prevState => prevState+1)
            } else{

                setAnswer("error")
            }
        })
    }


    const handleChose = (value, ind, id) => {
        setOption(ind)
        setChoseValue(value)
        setPage2(id)

    }

    const {data:finishCourses,refetch} = useGetFinishedCoursesQuery()




    const [isOpen,setOpen] = useState(false)

    useEffect(()=>{
        if (finishCourses&&finishCourses.result.length>0){
            setOpen(true)

        }
    },[finishCourses])

    useEffect(()=>{

        refetch()
    },[page2,isSuccess,page,data])




    const handleClose = () => {
        setOpen(false)
    }


    return (
        <>
            {<SuccessWindow isWindowOpen={isOpen} closeWindow={handleClose} title={"You have successfully completed the course!"}/>}
            <div className={style.main}>
                <div className={style.head}>
                    <div style={{display: "flex", alignItems: "center"}}>

                        <div>
                            <MyButton text="Back" href="/selectedTopic"/>
                        </div>
                        <div className={style.first_text}>Topic: {data&&data.result.results[0]&&data.result.results[0].category.name}</div>
                    </div>

                    <div style={{display: "flex", alignItems: "center"}}>
                        <div>Questions:</div>
                        <Pagination count={data ? data?.result?.count : 0} onChange={handleChange} variant="outlined" shape="rounded" size={"large"}/>
                        {/*<QuestionMarkIcon*/}
                        {/*    sx={{*/}
                        {/*        backgroundColor: "#C4C4C4",*/}
                        {/*        border: "1px solid #000000",*/}
                        {/*        borderRadius: "5px",*/}
                        {/*        width: "50px",*/}
                        {/*        height: "30px"*/}
                        {/*    }}/>*/}
                    </div>
                </div>
                <div style={{marginTop: "40px", height: "60vh"}}>
                    <div className={style.task}
                    >
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
                        {answer==="error"&&<CustomAlert2 status={"error"} message={"Wrong answer!"} handleClean = {setAnswer} />}
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
                    <button className={style.submitButton} onClick={handleSubmitAnswer} disabled={loadingSubmit}>Answer</button>

                </div>}


            </div>
        </>

    );
};

export default Task;