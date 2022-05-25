import React, {useState} from 'react';
import style from "./../styles/SelectedTopic.module.css";
import LabelIcon from '@mui/icons-material/Label';
import Link from "next/link";
import {TextField} from "@mui/material";


const SelectedTopic = () => {

    const [mode, setMode] = useState(true)

    const handleSetMode = () => {
        if (mode) {
            setMode(false)
        } else {
            setMode(true)
        }
    }
    //console.log(mode)

    return (
       <div>
           {mode?<ClosedNote handleSetMode = {handleSetMode}/>:<OpenedNote handleSetMode = {handleSetMode}/>}
       </div>
    );
};

const ClosedNote = (props) => {
    return (
        <div className={style.main}>
            <div className={style.head}>
                <div style={{display: "flex", alignItems: "center"}}>

                    <div>
                        <Link href={"/subject"}>
                            <button className={style.btn}>{"<"} All topics</button>
                        </Link>
                    </div>
                    <div className={style.first_text}>Theme: Silk Road</div>
                </div>

                <div><LabelIcon sx={{
                    transform: "scaleX(-1)",
                    color: "#0075FF",
                    width: "120px",
                    height: "100px",
                    position: "relative",
                    right:"0",
                    cursor:"pointer"
                }} onClick={props.handleSetMode}/></div>
            </div>
            <div className={style.content}>
                <div style={{textAlign: "center", fontWeight:800}}>Silk Road</div>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquid at cupiditate dolores eaque eius enim ex explicabo, iure
                    iusto maxime nisi optio perferendis porro quibusdam reiciendis
                    saepe totam vel voluptatibus.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquid at cupiditate dolores eaque eius enim ex explicabo, iure
                    iusto maxime nisi optio perferendis porro quibusdam reiciendis
                    saepe totam vel voluptatibus.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquid at cupiditate dolores eaque eius enim ex explicabo, iure
                    iusto maxime nisi optio perferendis porro quibusdam reiciendis
                    saepe totam vel voluptatibus.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquid at cupiditate dolores eaque eius enim ex explicabo, iure
                    iusto maxime nisi optio perferendis porro quibusdam reiciendis
                    saepe totam vel voluptatibus.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquid at cupiditate dolores eaque eius enim ex explicabo, iure
                    iusto maxime nisi optio perferendis porro quibusdam reiciendis
                    saepe totam vel voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquid at cupiditate dolores eaque eius enim ex explicabo, iure
                    iusto maxime nisi optio perferendis porro quibusdam reiciendis
                    saepe totam vel voluptatibus.


                </div>
                <div style={{alignSelf:"flex-end", marginTop:"30%"}}>
                    <Link href={"/task"}>
                        <button className={style.btn}>Start the game {">"} </button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

const OpenedNote = (props) => {
    return (
        <div className={style.main2}>
            <div className={style.head2}>
                <div style={{display: "flex", alignItems: "center"}}>
                    <div>
                        <Link href={"/subject"}>
                            <button className={style.btn}>{"<"} All topics</button>
                        </Link>
                    </div>
                    <div className={style.first_text}>Theme: Silk Road</div>
                </div>

                {/*<div><LabelIcon sx={{*/}
                {/*    transform: "scaleX(-1)",*/}
                {/*    color: "#0075FF",*/}
                {/*    width: "120px",*/}
                {/*    height: "100px",*/}
                {/*    position: "relative",*/}
                {/*    right:"0"*/}
                {/*}} onClick={props.handleSetMode}/></div>*/}
            </div>
            <div style = {{display:"flex", width:"100%", marginTop:"20px"}}>


                <div className={style.content2}>
                    <div style={{textAlign: "center", fontWeight:800}}>Silk Road</div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Aliquid at cupiditate dolores eaque eius enim ex explicabo, iure
                        iusto maxime nisi optio perferendis porro quibusdam reiciendis
                        saepe totam vel voluptatibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Aliquid at cupiditate dolores eaque eius enim ex explicabo, iure
                        iusto maxime nisi optio perferendis porro quibusdam reiciendis
                        saepe totam vel voluptatibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Aliquid at cupiditate dolores eaque eius enim ex explicabo, iure
                        iusto maxime nisi optio perferendis porro quibusdam reiciendis
                        saepe totam vel voluptatibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Aliquid at cupiditate dolores eaque eius enim ex explicabo, iure
                        iusto maxime nisi optio perferendis porro quibusdam reiciendis
                        saepe totam vel voluptatibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Aliquid at cupiditate dolores eaque eius enim ex explicabo, iure
                        iusto maxime nisi optio perferendis porro quibusdam reiciendis
                        saepe totam vel voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Aliquid at cupiditate dolores eaque eius enim ex explicabo, iure
                        iusto maxime nisi optio perferendis porro quibusdam reiciendis
                        saepe totam vel voluptatibus.


                    </div>
                    <div style={{alignSelf:"flex-end", marginTop:"30%"}}>
                        <Link href={"/task"}>
                            <button className={style.btn}>Начать игру {">"} </button>
                        </Link>
                    </div>
                </div>
                <div style={{position:"absolute", height:"80%", width:"30%", backgroundColor:"grey", float:"right", right:0}}>
                    <div><LabelIcon sx={{
                        transform: "scaleX(-1)",
                        color: "#0075FF",
                        width: "80px",
                        height: "100%",
                        position: "relative",
                        right:"8%",
                        top:"0",
                        cursor:"pointer"

                    }} onClick={props.handleSetMode}/></div>
                    <div style={{textAlign:"center", marginBottom:"10px"}}>Заметки</div>
                    <div style={{marginLeft:"10px"}}>Здесь вы сможете расписывать заметки</div>
                    <TextField placeholder={"Enter your note..."}/>
                    <button>Save</button>
                </div>

            </div>

        </div>
    )
}

export default SelectedTopic;