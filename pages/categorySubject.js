import React, {useState} from 'react';
import style from "./../styles/CategorySubject.module.css";
import {useRouter} from "next/router";
import Link from "next/link";

const elems =[1,2,3,4,5,6]

const subj = ["История","Математика","Англиский","Информатика","География","Биолгоия","Химия","Физика"]


const CategorySubject = () => {

    const [optionValue, setOptionValue] = useState('')
    // const navigate = useNavigate()
    const router = useRouter()
    console.log(router)

    return (
        <div className={style.main}>
            <div style={{textAlign:"center"}}>
                <div className={style.secondText}>
                    <span>Welcome to BeGreat! Let{"'"}s get started!</span>
                </div>
                <div className={style.block}>
                    {elems.map(e=><div key={e} className={style.circle}></div>)}
                </div>
            </div>

            <div className={style.choose}>
                <div style={{marginBottom:"10px"}}>Выберите предмет:</div>
                <div className={style.select}>
                    <select name="subjects" id="subjects" style={{cursor:"pointer"}}>
                        {subj.map(s=><option key={s} value={s} style={{fontSize:"50px"}} onClick={()=>setOptionValue(s)}>{s}</option>)}
                    </select>
                </div>
            </div>
            <div>
                <Link href={"/subject"}>
                    <button className={style.btn}>Продолжить</button>
                </Link>

            </div>
        </div>
    );
};

export default CategorySubject;