import React, {useState,useEffect} from 'react';
import style from "./../styles/SelectedTopic.module.css";
import LabelIcon from '@mui/icons-material/Label';
import Link from "next/link";
import {Button, TextField} from "@mui/material";
import {useCreateNoteMutation} from "../redux/rtk-api/notes/notes";
import {useSelector} from "react-redux";
import {useGetLecturesQuery} from "../redux/rtk-api/lectures/lectures";
import CustomAlert from "../components/customAlert";
import AuthWindow from "../components/AuthWindow";


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

    const categoryId = useSelector(state=>state.course.categoryId)

    const {data:lectures} = useGetLecturesQuery(categoryId)

    const [isOpen,setOpen] = useState(false)
    const isAuth = useSelector(state=>state.auth.isAuth)

    const handleCheckAuth = () => {
        if (!isAuth){
            setOpen(true)
        }
    }

    return (
        <>
            {isOpen&&<AuthWindow isWindowOpen={isOpen} closeWindow={()=>setOpen(false)}/>}
            <div className={style.main}>
                <div className={style.head}>
                    <div style={{display: "flex", alignItems: "center"}}>

                        <div>
                            <Link href={"/subject"}>
                                <button className={style.btn}>{"<"} Topics</button>
                            </Link>
                        </div>
                        <div className={style.first_text}>Topic: {lectures&&lectures.results[0].title}</div>
                    </div>

                    <div><LabelIcon sx={{
                        transform: "scaleX(-1)",
                        color: "#FAB536",
                        width: "120px",
                        height: "100px",
                        position: "relative",
                        right:"0",
                        cursor:"pointer"
                    }} onClick={props.handleSetMode}/></div>
                </div>
                <div className={style.content}>
                    <div style={{textAlign: "center", fontWeight:800}}>{lectures&&lectures.results[0].title}</div>
                    <div>
                        {lectures&&lectures.results[0].context}



                    </div>
                    <div style={{alignSelf:"flex-end"}}>
                        <Link href={isAuth?"/task":""}>
                            <button className={style.btn2} onClick={handleCheckAuth}>Start the game {">"} </button>
                        </Link>
                    </div>


                </div>
            </div>
        </>

    )
}

const OpenedNote = (props) => {

    const [isAlertOpen, setAlertOpen] = useState(false)

    useEffect(() => {
        if (isAlertOpen) {
            const timer = setTimeout(() => {
                setAlertOpen(false)
            }, 2000);
            return () => clearTimeout(timer);
        }

    }, [isAlertOpen]);

    const [createNote,{}] = useCreateNoteMutation()
    const [note,setNote] = useState('')

    const categoryId = useSelector(state=>state.course.categoryId)
    const {data:lectures, refetch} = useGetLecturesQuery(categoryId)

    useEffect(()=>{
        refetch()
    },[])

    const [isOpen,setOpen] = useState(false)

    const handleCreateNote = () => {

        if (isAuth){
            setAlertOpen(true)

            if (note!=='') {
                const data = {categoryId: categoryId, note:note}
                createNote(data)
            }
            setNote('')
        } else {
            setOpen(true)
        }


    }

    const goWithoutAuth = useSelector(state=>state.auth.goWithoutAuth)
    const isAuth = useSelector(state=>state.auth.isAuth)

    // if (!isAuth){
    //     if (!goWithoutAuth){
    //         router.push("sign")
    //     }
    // }

    const handleCheckAuth = () => {
        if (!isAuth){
            setOpen(true)
        }
    }

    return (
        <>
            {isOpen&&<AuthWindow isWindowOpen={isOpen} closeWindow={()=>setOpen(false)}/>}
            <div className={style.main2}>
                <div className={style.head2}>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <div>
                            <Link href={"/subject"}>
                                <button className={style.btn}>{"<"} Topics</button>
                            </Link>
                        </div>
                        <div className={style.first_text}>Theme: {lectures&&lectures.results[0].title}</div>
                    </div>


                </div>
                <div style = {{display:"flex", width:"100%", marginTop:"20px"}}>


                    <div className={style.content2}>
                        <div style={{textAlign: "center", fontWeight:800}}>{lectures&&lectures.results[0].title}</div>
                        <div>
                            {lectures&&lectures.results[0].context}
                        </div>
                        <div style={{alignSelf:"flex-end"}}>
                            <Link href={isAuth?"/task":""}>
                                <button className={style.btn2} onClick={handleCheckAuth}>Start the game {">"} </button>
                            </Link>
                        </div>
                    </div>
                    <div style={{position:"absolute", height:"80%", width:"30%", backgroundColor:"rgba(196, 196, 196, 0.2)", float:"right", right:0, padding:"30px"}}>
                        <div><LabelIcon sx={{
                            transform: "scaleX(-1)",
                            color: "#FAB536",
                            width: "80px",
                            height: "100%",
                            position: "relative",
                            right:"8%",
                            top:"0",
                            cursor:"pointer"

                        }} onClick={props.handleSetMode}/></div>
                        <div style={{textAlign:"center", marginBottom:"10px"}}><b>Notes</b></div>
                        <div style={{marginBottom:"10px"}}>Here you can write down your hightlited sentences or words...</div>
                        {isAlertOpen &&
                            <CustomAlert message={"Your note successfully saved!"} status={"success"}/>}
                        <TextField placeholder={"Enter your note..."} fullWidth multiline rows={2} value={note} onChange={(e)=>{setNote(e.target.value)}}/>

                        <div style={{marginTop:"10px"}}><Button variant={"contained"} onClick={handleCreateNote}>Save</Button></div>
                    </div>

                </div>

            </div>

        </>

    )
}

export default SelectedTopic;