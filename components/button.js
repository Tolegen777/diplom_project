import React from 'react';
import style from "./../styles/Button.module.css";
import Link from "next/link";

const MyButton = (props) => {
    return (
        <>
            <Link href={props.href}><button style={{cursor:"pointer"}} className={style.btn}>{"<"} {props.text}</button></Link>
        </>
    );
};

export default MyButton;