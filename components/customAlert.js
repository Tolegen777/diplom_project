import * as React from 'react';
import Box from '@mui/material/Box';
import Alert, {AlertColor} from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import {AlertTitle} from "@mui/material";


//    status: 'success' | 'info' | 'warning' | 'error',


const CustomAlert = ({message, status}) => {

    return (
        <Alert severity={status}>
            {/*<AlertTitle>{title}</AlertTitle>*/}
            <strong>{message}</strong>
        </Alert>
    );
};

export default CustomAlert;