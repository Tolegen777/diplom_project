import React from 'react';
import style from "./../styles/Notes.module.css";
import Header from "./../components/header";
import MyButton from "./../components/button";
import {useSelector} from "react-redux";
import {useGetLecturesQuery} from "../redux/rtk-api/lectures/lectures";
import {useGetNotesQuery} from "../redux/rtk-api/notes/notes";


const Notes = () => {

    const categoryId = useSelector(state=>state.course.categoryId)

    const {data:notes} = useGetNotesQuery(categoryId)




    const {data} = useGetLecturesQuery(categoryId)


    let arr = []

    if (notes&&notes.note){
  arr.push(notes.note.split("~"))
    }




    return (
        <div>

            <Header/>
            <div className={style.main}>

                <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"20px"}}>
                    <div style={{display:"flex", alignItems:"center"}}>
                        <MyButton text = "Back" href = "/subject"/>
                        <div className={style.headText}>Notes</div>
                    </div>
                </div>



            </div>
            {arr.length===0?<div className={style.notes}>
                <div>
                    <img src="/book.svg"/>
                </div>
                <div>
                    Your notes will be visible here. So far you do not have them.
                </div>
            </div>:
                <div style={{marginLeft:"40px"}}>
<ol>
    {arr.length>0&&arr[0].map((i,ind)=><li key={ind} style={{fontSize:"20px", marginBottom:"10px"}}>{i}</li>)}
</ol>
                </div>
            }
        </div>

    );
};

export default Notes;

