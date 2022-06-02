import React from 'react';
import style from "./../styles/SubjectTopic.module.css";
import Link from "next/link";
import {useJoinToCourseMutation} from "../redux/rtk-api/joinToCourse/joinToCourse";
import {useSelector} from "react-redux";
import {useRouter} from "next/router";




const SubjectTopic = (props) => {



    return (
        <div className={style.main}>
            <div className={style.text}>Continue...</div>
            <div className={style.blocks}>


                { props.category.length>0?
                    props.category.map((i,ind )=> {
                        if (props.searchedName && i.name.toLowerCase().includes(props.searchedName.toLowerCase())){
                            return <div key={ind} className={style.card}>
                                <TopicBlocks text={i.name} searchedName={props.searchedName}/>
                            </div>
                        } else if(!props.searchedName) {
                            return <div key={ind} className={style.card}>
                                <TopicBlocks text={i.name} searchedName={props.searchedName}/>
                            </div>
                        }
                        else return

                    }):<div>There are no categories in this course!</div>
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
            flexDirection:"column"

        }}>
<div style={{height:"70%"}}><img src="./know.jpeg" alt="" style={{width:"100%", height:"100%"}}/></div>

            <div style={{
                borderTop: "2px solid #000000",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "5px",
                height:"30%"
            }}>
                <div>{props.text}</div>
                <Link href={"selectedTopic"}>
                    <div style={{
                        borderRadius: "50px",
                        border: "1px solid #000000",
                        padding: "3px",
                        display: "flex",
                        alignItems: "center",
                        cursor:"pointer",
                        backgroundColor:"#FAB536"
                    }} onClick={handleJoin}><img src="/nextBlock.svg" /></div>
                </Link>

            </div>

        </div>
    )
}