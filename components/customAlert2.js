import * as React from 'react';
import Box from '@mui/material/Box';
import Alert, {AlertColor} from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import {AlertTitle} from "@mui/material";
import style from "./../styles/Alert.module.css"


//    status: 'success' | 'info' | 'warning' | 'error',

const successS = {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    width: "480px",
    height: "240px",
    background: "#39888A",
    fontSize: "25px",
    textAlign: "center",

}

const errorS = {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    width: "480px",
    height: "240px",
    background: "#DE4B3E",
fontSize: "25px",
textAlign: "center",

color: "#FFFFFF",
}

const btnStyle = {

}

const CustomAlert2 = ({message, status,handleClean}) => {





    return (
        <Alert severity={status} sx={handleClean&&status==="success"?successS:errorS}>
            {/*<AlertTitle>{title}</AlertTitle>*/}
            <strong>{message}</strong>
            {handleClean&&<Box>
                {status==="success"?<Button className={style.btn} onClick={handleClean} variant={"contained"} color={"success"}>Close</Button>:<Button className={style.btn} onClick={()=>handleClean('')}>Back to question</Button>}
            </Box>}
        </Alert>
    );
};

export default CustomAlert2;