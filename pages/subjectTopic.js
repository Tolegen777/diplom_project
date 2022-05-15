import React from 'react';
import style from "./../styles/SubjectTopic.module.css";
import Link from "next/link";

const arr = [
    {
        id: 1,
        text: "Шелковый Путь"
    },
    {
        id: 2,
        text: ""
    },
    {
        id: 3,
        text: ""
    },
    {
        id: 4,
        text: ""
    },
    {
        id: 5,
        text: ""
    },
]

const SubjectTopic = () => {
    return (
        <div className={style.main}>
            <div>Продолжить...</div>
            <div className={style.blocks}>
                {
                    arr.map(i => <div key={i.id}>
                        <TopicBlocks text={i.text}/>
                    </div>)
                }
            </div>


        </div>
    );
};

export default SubjectTopic;

const TopicBlocks = (props) => {
    return (
        <div style={{
            width: '400px',
            height: '175px',
            border: '1px solid #000000',
            display: "flex",
            alignItems: "flex-end"
        }}>
            <div style={{
                borderTop: "2px solid #000000",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "5px"
            }}>
                <div>{props.text}</div>
                <Link href={"selectedTopic"}>
                    <div style={{
                        borderRadius: "50px",
                        border: "1px solid #000000",
                        padding: "3px",
                        display: "flex",
                        alignItems: "center",
                        cursor:"pointer"
                    }}><img src="/next.svg" /></div>
                </Link>

            </div>

        </div>
    )
}