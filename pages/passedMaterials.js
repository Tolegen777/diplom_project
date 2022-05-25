import React from 'react';
import style from "./../styles/PassedMaterials.module.css";
import Header from "./../components/header";
import MyButton from "./../components/button";


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
    return (
        <div>
            <Header/>
            <div className={style.main}>

                <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"20px"}}>
                    <div style={{display:"flex", alignItems:"center"}}>
                        <MyButton text = "Назад" href = "/subject"/>
                        <div className={style.headText}>My completed materials</div>
                    </div>
                    <div className={style.text2}>
                        Generate text {">"}
                    </div>

                </div>

                <div>
                    {row.map(i=>
                        <div key={i.id} style={{marginBottom:"10px"}}>
                            <Block key = {i.id} task={i.task} grade={i.grade} topic={i.topic} classNum={i.classNum}/>
                        </div>
                       )}
                </div>

            </div>
        </div>

    );
};

export default PassedMaterials;


const Block = ({classNum, topic, task, grade}) => {
    return (
        <div style={{display:"flex", alignItems:"center", justifyContent:"flex-start", width:"100%", backgroundColor:"#C4C4C4", }}>
            <div style={{display:"flex", alignItems:"center", justifyContent:"center", width:"10%", }}>{classNum}</div>
            <div style={{padding:"10px", display:"grid", width:"90%", borderLeft:"1px solid #000000"}}>
                <div className={style.blockTexts}>{topic}</div>
                <div className={style.blockTexts}>{task}</div>
                <div>{grade}</div>
            </div>
        </div>
    )
}