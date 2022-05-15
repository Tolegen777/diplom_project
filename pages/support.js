import React from 'react';
import style from "./../styles/Support.module.css";
import Header from "./../components/header";
import MyButton from "./../components/button";


const Support = () => {
    return (
        <div>
            <Header/>
            <div className={style.main}>

                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "20px",
                    width: "50%"
                }}>
                    <MyButton text="Назад"  href = "/subject"/>
                    <div style={{alignItems: "center"}}>
                        <div className={style.headText}>Hello ____</div>
                        <div className={style.mainText}>How can we help you?</div>
                    </div>
                </div>

                <div>
                    <div className={style.mainText}>About us</div>
                    <div style={{display: "flex"}}>
                        <div className={style.imgBlock}></div>
                        <div className={style.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                            accusantium ad amet debitis dolor doloremque ducimus eveniet ipsam itaque mollitia quam quo,
                            recusandae repellat reprehenderit sint, ullam veniam vero voluptate?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                            accusantium ad amet debitis dolor doloremque ducimus eveniet ipsam itaque mollitia quam quo,
                            recusandae repellat reprehenderit sint, ullam veniam vero voluptate?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                            accusantium ad amet debitis dolor doloremque ducimus eveniet ipsam itaque mollitia quam quo,
                            recusandae repellat reprehenderit sint, ullam veniam vero voluptate?
                        </div>
                    </div>
                    <hr style={{margin: "20px 0"}}/>
                    <div style={{display: "flex"}}>
                        <div style={{width:"40%"}}>
                            <div className={style.mainText}>У меня есть вопрос</div>
                            <div className={style.headText}>Заполнив эту форму, вы сможете связаться с нами и сообщить о
                                вашей проблеме
                            </div>
                        </div>
                        <div style={{width:"60%"}}>
                            <div className={style.mainText}>С чем мы могли бы вам помочь?</div>
                            <div className={style.headText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Aliquid ipsam molestias
                                quisquam rem voluptas? Beatae, distinctio dolor earum fugit iure, magnam maiores minus
                                odit placeat, possimus recusandae sint vitae. Expedita!
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default Support;


