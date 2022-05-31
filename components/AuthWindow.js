import React from "react";
import {Box, Button, Dialog, DialogContent, DialogTitle, TextField, Typography} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import CloseIcon from "@mui/icons-material/Close";
import {useRouter} from "next/router";



const AuthWindow = ({isWindowOpen,closeWindow,submitRemovingEmail}) => {

    const router = useRouter()

    return(
        <Dialog
            open={isWindowOpen}
        >

            <DialogTitle id="alert-dialog-title" sx={{}}>
                <CloseIcon sx={{float: 'right', cursor: 'pointer'}} onClick={closeWindow}/>

            </DialogTitle>

            <DialogContent sx={{width: '500px', textAlign: 'center'}}>
                <Typography sx={{marginBottom: 3, fontWeight: 'bold'}}>Создайте аккаунт чтобы продолжить</Typography>
                <form>

                    <Box sx={{textAlign: 'center', marginBottom: '50px'}}>


                        <Button variant="contained"
                                color="primary"
                                size="large"
                                sx={{width: 100, height: 30, marginTop: 1, textTransform:'lowercase'}}
                                onClick={()=>router.push("sign")}
                        >
                            Создать аккаунт
                        </Button>
                        <Button variant="contained"
                                color="inherit"
                                size="large"
                                sx={{width: 100, height: 30, marginTop: 1, textTransform:'lowercase', marginLeft:"10px"}}
                                onClick={closeWindow}
                        >
                            Отмена
                        </Button>
                    </Box>
                </form>


            </DialogContent>


        </Dialog>
    )
}

export default AuthWindow