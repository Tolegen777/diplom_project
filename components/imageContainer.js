import { Button, IconButton } from "@mui/material";
import style from "./../styles/ImageContainer.module.css"
import React from "react";
import EditIcon from '@mui/icons-material/Edit';

// const useStyles = {
//     imageContainer: {
//         width: "100px",
//         height: "100px",
//         marginBottom: "2rem",
//         position: "relative",
//         textAlign: "center",
//         "&>:nth-child(1)": {
//             height: "100px",
//             width: "100px",
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//             backgroundSize: "cover",
//             position: "relative",
//             top: "0",
//             left: "0",
//             filter: "brightness(0.5)",
//         },
//         "&>:nth-child(2)": {
//             position: "absolute",
//             height: "30px",
//             width: "30px",
//             top: "35px",
//             left: "35px",
//         }
//     },
// }



const ImageContainer= ({ image, handleChange, handleDelete }) => {


    return (
        <div className={style.main}>
            <img src={image} alt={image} style={{ filter: "brightness(1)", borderRadius: "6px", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", width: "90px", height: "90px", objectFit: "contain" }} />
            <IconButton component="label" className={style.child1}>
                <input
                    type="file"
                    hidden
                    accept="image/png, image/gif, image/jpeg"
                    name="images"
                    onChange={handleChange}
                />
            </IconButton>
            <Button variant="outlined" size="small" onClick={handleDelete} className={style.child2}>Удалить</Button>
        </div>
    )
}

export default ImageContainer;