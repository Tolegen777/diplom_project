import { Button } from '@mui/material';
import React from 'react';


const ImageInput = (props) => {

    const { width, height } = props;

    return (
        <Button
            variant="outlined"
            component="label"
            style={{ height: height, width: width, marginRight: "10px" }}
            disabled={props?.disabled}
        >
      <span style={{ fontSize: "12px", fontWeight: "lighter", color: "grey", textAlign: "center" }}>
        {props.title}
      </span>
            <input
                type="file"
                hidden
                accept="image/png, image/gif, image/jpeg"
                name="images"
                onChange={props?.handleChange}
            />
        </Button>
    )
}



export default ImageInput;