import React from "react";
import {Box, Button, Dialog, DialogContent, DialogTitle, TextField, Typography} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import CloseIcon from "@mui/icons-material/Close";
import {useRouter} from "next/router";
import {setHandleNoAuth} from "../redux/store/reducers/auth/auth.slice";
import {useDispatch} from "react-redux";
import style from "./../styles/Alert.module.css"



const AuthWindow = ({isWindowOpen,closeWindow,submitRemovingEmail}) => {

    const router = useRouter()
    const dispatch = useDispatch()

    const handleRemoveAuth = () => {
        dispatch(setHandleNoAuth())
        router.push("sign")

    }

    return(
        <Dialog
            open={isWindowOpen}
        >

            <DialogTitle id="alert-dialog-title" sx={{}}>
                <CloseIcon sx={{float: 'right', cursor: 'pointer'}} onClick={closeWindow}/>

            </DialogTitle>

            <DialogContent sx={{width: '500px', textAlign: 'center'}}>
                <Typography sx={{marginBottom: 3, fontWeight: 'bold', fontSize:"20px"}}>If you want to save your progress, please, sign up!</Typography>
                <form>

                    <Box sx={{textAlign: 'center', marginBottom: '50px'}}>


                        <Button variant="contained"
                                color="primary"
                                size="large"
                                className={style.btn2}

                                onClick={handleRemoveAuth}
                        >
                            Sign up
                        </Button>

                    </Box>
                </form>


            </DialogContent>


        </Dialog>
    )
}

export default AuthWindow