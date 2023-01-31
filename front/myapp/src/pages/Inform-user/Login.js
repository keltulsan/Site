import { Link } from "react-router-dom";
import React, { Component, useEffect, useState } from 'react';
import { links } from "../../App";
import { useForm } from "react-hook-form";
import { Login } from "../../api/Login";
import { ReactSession } from 'react-client-session';
import md5 from "md5";
export default function LoginPage(){
    const link = links();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmitLogin = async (data) => {
        const userList = await Login(data);
        const password = await md5(userList.filter(userList=>userList.password.match(data["password"])))
        if(userList.filter(userList=>userList.mail.match(data["mail"])).length>0 & password.length>0){
            ReactSession.set("username", userList[0]["nickname"]);
            window.location.replace('/');};}
    const [dimensions, setDimensions] = React.useState({ 
        height: window.innerHeight,
        width: window.innerWidth
        })
    React.useEffect(() => {
        function handleResize() {
            setDimensions({
            height: window.innerHeight,
            width: window.innerWidth
        })}
    
        window.addEventListener('resize', handleResize)
    })
    return (dimensions.width <= 750 ? 
    <form onSubmit={handleSubmit(onSubmitLogin)}> 
        <h1 className='title stroke'>LOGIN</h1> 
        <div className="min-connect-background flex center vertical gap padding-top">
            <div className="flex center gap vertical">
                <img src='./img/icon_email.png' alt="icon_email" className="icon align-center"/>
                <div className='align-center flex vertical gap-'>
                <input placeholder="Adresse email" {...register("mail")} type="text" id="mail"/>
                </div>
            </div>
            <div className="flex center gap vertical">
                <img src='./img/icon_password.png' alt="icon_email" className="icon align-center"/>
                <div className='align-center flex vertical gap-'>
                <input className='align-center' {...register("password")} type="password" placeholder="Mot de passe" id="password"/>
                </div>
            </div>
            <div className="flex center gap min-create-account">
                <Link to={link.signup}>Créer un compte</Link>
            </div>
            <div className="center">
                <input type="submit" value="Se connecter"/>
            </div>
        </div>
    </form>
    : 
    <form onSubmit={handleSubmit(onSubmitLogin)}>
        <div className="connect-background flex center vertical gap">
            <h1 className='title stroke'>LOGIN</h1>
            <div className="flex center gap">
                <img src='./img/icon_email.png' alt="icon_email" className="icon align-center"/>
                <div className='align-center flex vertical gap-'>
                <input placeholder="Adresse email" {...register("mail")} type="text" id="mail"/>
                </div>
            </div>
            <div className="flex center gap">
                <img src='./img/icon_password.png' alt="icon_email" className="icon align-center"/>
                <div className='align-center flex vertical gap-'>
                <input className='align-center' {...register("password")} type="password" placeholder="Mot de passe" id="password"/>
                </div>
            </div>
            <div className="flex center gap create-account">
                <Link to={link.signup}>Créer un compte</Link>
            </div>
            <div className="center">
                <input type="submit" value="Se connecter"/>
            </div>
        </div>
    </form>
    )
}