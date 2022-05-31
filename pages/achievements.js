import React from 'react';
import style from "./../styles/Achievements.module.css";
import Header from "./../components/header";
import MyButton from "./../components/button";
import {useSelector} from "react-redux";


const row = [
    {
        id:1,
        name:"Стив джобс, Айзек",
        desc:"Книга",
    },
    {
        id:2,
        name:"Стив джобс, Айзек",
        desc:"Книга",
    },
    {
        id:3,
        name:"Стив джобс, Айзек",
        desc:"Книга",
    },
    {
        id:4,
        name:"Стив джобс, Айзек",
        desc:"Книга",
    },
    {
        id:5,
        name:"Стив джобс, Айзек",
        desc:"Книга",
    },

]

const Achievements = () => {


    const isAuth = useSelector(state=>state.auth.isAuth)

    if (!isAuth){
        router.push("sign")
    }

    return (
        <div>
            <Header/>
            <div className={style.main}>

                <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"20px"}}>
                    <div style={{display:"flex", alignItems:"center"}}>
                        <MyButton text = "Back" href = "/subject"/>
                        <div className={style.headText}>Achievements</div>
                    </div>
                </div>

                <div>
                    <div className={style.library}>My Rewards Library</div>
                    <div style={{padding:"10px"}}>
                        {row.map(i=>
                            <div style={{borderBottom:"1px solid #000000"}} key={i.id}>
                                <Block name = {i.name} desc={i.desc}/>
                            </div>
                        )}
                    </div>

                </div>

            </div>
        </div>

    );
};

export default Achievements;


const Block = ({img, name, desc}) => {
    return (
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", width:"100%" }}>
           <div style={{display:"flex", alignItems:"center"}}>
               <div className={style.imgBlock}><img src={img?img:""} alt=""/></div>
               <div>
                   <div className={style.textDiv}>{name}</div>
                   <div className={style.textDiv}>{desc}</div>
               </div>
           </div>
           <div>
               <button className={style.btn1}>Download</button>
               <button className={style.btn2}>Read</button>
           </div>
        </div>
    )
}