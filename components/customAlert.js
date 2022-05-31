import * as React from 'react';
import Box from '@mui/material/Box';
import Alert, {AlertColor} from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import {AlertTitle} from "@mui/material";


//    status: 'success' | 'info' | 'warning' | 'error',

const style = {
 width:"500px",
    height:"250px",
    fontSize:"20px"
}

const btnStyle = {

}

const CustomAlert = ({message, status,handleClean}) => {



    return (
        <Alert severity={status} sx={handleClean&&style}>
            {/*<AlertTitle>{title}</AlertTitle>*/}
            <strong>{message}</strong>
            {handleClean&&<Box>
                {status==="success"?<Button onClick={()=>handleClean('')} variant={"contained"} color={"success"}>Next</Button>:<Button onClick={()=>handleClean('')}>Back</Button>}
            </Box>}
        </Alert>
    );
};

export default CustomAlert;