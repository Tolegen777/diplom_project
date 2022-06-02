import React, {useState} from 'react';
import style from "./../styles/Achievements.module.css";
import Header from "./../components/header";
import MyButton from "./../components/button";
import {useGetMultiTestResultQuery} from "../redux/rtk-api/getMultitestResult/getMultitestResult";


const Achievements = () => {





     const {data:res} = useGetMultiTestResultQuery("ss")

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
                    <div style={{padding:"20px 20px 0px 20px", border:"3px solid #2E5984"}}>
                        {res&&res.result.length>0?res?.result.map(i=>
                            <div style={{borderBottom:"3px solid #2E5984", marginBottom:"30px"}} key={i.id}>
                                <Block name = {i.title} desc={i.show_text} prize ={i.prize}/>
                            </div>
                        ):
                            <div style={{textAlign:"center", fontSize:"22px", marginBottom:"10px", fontWeight:"500"}}>You do not have achievements yet!</div>}


                    </div>

                </div>

            </div>
        </div>

    );
};

export default Achievements;


const Block = ({img, name, desc,prize}) => {
    const [open,setOpen] = useState(false)

    return (
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", width:"100%" }}>
           <div style={{display:"flex", alignItems:"center"}}>
               <div className={style.imgBlock}><img src={img?img:""} alt=""/></div>
               <div>
                   <div className={style.textDiv1}>{name}</div>
                   <div className={style.textDiv}>{desc}</div>
               </div>
           </div>
           <div>
               <a href={prize} target={"_blank"} download={"file.txt"}><button className={style.btn2}>Download</button></a>
               <a href={prize} target={"_blank"} rel="noreferrer" ><button className={style.btn3} onClick={()=>setOpen(true)}>Read</button></a>

           </div>
        </div>
    )
}