import React from 'react';
import style from "./../styles/SubjectTopic.module.css";
import Link from "next/link";
import {useJoinToCourseMutation} from "../redux/rtk-api/joinToCourse/joinToCourse";
import {useSelector} from "react-redux";
import {useRouter} from "next/router";

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


const SubjectTopic = (props) => {

    const isAuth = useSelector(state=>state.auth.isAuth)

    const router = useRouter()

    if (!isAuth){
        router.push("sign")
    }


    return (
        <div className={style.main}>
            <div>Continue...</div>
            <div className={style.blocks}>
                { props.category.length>0?
                    props.category.map(i => <div key={i.id}>
                        <TopicBlocks text={i.name}/>
                    </div>):<div>There are no categories in this course!</div>
                }
            </div>


        </div>
    );
};

export default SubjectTopic;

const TopicBlocks = (props) => {

    const [joinToCourse,{}] = useJoinToCourseMutation()

    const categoryId = useSelector(state=>state.course.categoryId)



    const handleJoin = () => {

        joinToCourse(categoryId)
    }

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
                    }} onClick={handleJoin}><img src="/next.svg" /></div>
                </Link>

            </div>

        </div>
    )
}