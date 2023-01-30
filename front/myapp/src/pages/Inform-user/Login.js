import { Link } from "react-router-dom";
import React, { Component, useEffect, useState } from 'react';

export default function Login(){

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
    <form> 
        <h1 className='title stroke'>LOGIN</h1> 
        <div className="min-connect-background flex center vertical gap padding-top">
            <div className="flex center gap vertical">
                <img src='./img/icon_email.png' alt="icon_email" className="icon align-center"/>
                <div className='align-center flex vertical gap-'>
                    <input placeholder="Adresse email" type="text" id="email"/>
                </div>
            </div>
            <div className="flex center gap vertical">
                <img src='./img/icon_password.png' alt="icon_email" className="icon align-center"/>
                <div className='align-center flex vertical gap-'>
                    <input className='align-center' placeholder="Mot de passe" type="text" id="password"/>
                </div>
            </div>
            <div className="flex center gap min-create-account">
                <Link to="/signup">Créer un compte</Link>
            </div>
            <div className="center">
                <input type="submit" value="Se connecter"/>
            </div>
        </div>
    </form>
    : 
    <form>
        <div className="connect-background flex center vertical gap">
            <h1 className='title stroke'>LOGIN</h1>
            <div className="flex center gap">
                <img src='./img/icon_email.png' alt="icon_email" className="icon align-center"/>
                <div className='align-center flex vertical gap-'>
                    <input placeholder="Adresse email" type="text" id="email"/>
                </div>
            </div>
            <div className="flex center gap">
                <img src='./img/icon_password.png' alt="icon_email" className="icon align-center"/>
                <div className='align-center flex vertical gap-'>
                    <input className='align-center' placeholder="Mot de passe" type="text" id="password"/>
                </div>
            </div>
            <div className="flex center gap create-account">
                <Link to="/signup">Créer un compte</Link>
            </div>
            <div className="center">
                <input type="submit" value="Se connecter"/>
            </div>
        </div>
    </form>
    )
}