import React from 'react';
import style from "./../styles/Notes.module.css";
import Header from "./../components/header";
import MyButton from "./../components/button";


const subj = ["История","Математика","Англиский","Информатика","География","Биолгоия","Химия","Физика"]

const Notes = () => {
    return (
        <div>

            <Header/>
            <div className={style.main}>

                <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"20px"}}>
                    <div style={{display:"flex", alignItems:"center"}}>
                        <MyButton text = "Назад" href = "/subject"/>
                        <div className={style.headText}>Notes</div>
                    </div>
                </div>

                <div className={style.select}>
                    <select name="subjects" id="subjects">
                        {subj.map(s=><option key={s} value={s} style={{fontSize:"50px"}}>{s}</option>)}
                    </select>
                </div>

            </div>
            <div className={style.notes}>
                <div>
                    <img src="/book.svg" />
                </div>
                <div>
                    Здесь будут видны ваши заметки. Пока что у вас их нет
                </div>

            </div>
        </div>

    );
};

export default Notes;

