import React from 'react';
import style from "./../styles/PassedMaterials.module.css";
import Header from "./../components/header";
import MyButton from "./../components/button";
import {useGetFinishedCoursesQuery} from "../redux/rtk-api/finishedCourses/finishedCourses";
import {useGenerateMutation} from "../redux/rtk-api/generate_test/questions";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";
import Button from "@mui/material/Button";


const row = [
    {
        id:1,
        classNum:"6 класс",
        topic:"Тема щелковый путь",
        task:"Задания: Все выполнены",
        grade:"Оценка 85"

    },
    {
        id:2,
        classNum:"7 класс",
        topic:"Тема щелковый путь",
        task:"Задания: Все выполнены",
        grade:"Оценка 85"

    },
    {
        id:3,
        classNum:"8 класс",
        topic:"Тема щелковый путь",
        task:"Задания: Все выполнены",
        grade:"Оценка 85"

    }
]


const PassedMaterials = () => {


    const router = useRouter()




    const {data,isLoading,isError} = useGetFinishedCoursesQuery()

    const [generate,{}] = useGenerateMutation()




    const handleGenerate = () => {
         generate()
        router.push('test')

    }

    return (
        <div>
            <Header/>
            <div className={style.main}>

                <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"20px"}}>
                    <div style={{display:"flex", alignItems:"center"}}>
                        <MyButton text = "Back" href = "/subject"/>
                        <div className={style.headText}>My completed materials</div>
                    </div>
                    <div className={style.text2} onClick={handleGenerate}>
                        Generate the multi-test {">"}
                    </div>


                </div>

                <div>

                    {data&&data?.result.length>0?data?.result.map((i,ind)=>{
                        return <div key={i.category.id} style={{marginBottom:"10px"}}>
                            <Block key = {i.category.id} grade={i.category.grade} topic={i.category.name} answered_correct={data.result[0].answered_correct}/>
                        </div>
                    }):<div style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
                        <div className={style.blockTexts}>You have not taken a course yet!</div>

                    </div>
                    }
                </div>

            </div>
        </div>

    );
};

export default PassedMaterials;


const Block = ({classNum, topic, task, grade,answered_correct}) => {
    return (
        <div style={{display:"flex", alignItems:"center", justifyContent:"flex-start", width:"100%", backgroundColor:"#FFFFFF",
            border: "3px solid #2E5984", height:"200px"
        }}>
            <div style={{display:"flex", alignItems:"center", justifyContent:"center", width:"10%", height:"100%"}} className={style.text3}>{grade}th grade</div>
            <div style={{padding:"10px", display:"grid", width:"90%", borderLeft:"3px solid #2E5984", height:"100% "}}>
                <div className={style.blockTexts}>{topic}</div>
                <div className={style.text3}>All task are completed</div>
                <div className={style.text3}>Grade {answered_correct}</div>
            </div>
        </div>
    )
}