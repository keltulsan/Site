import { Link } from "react-router-dom";
import React, { Component, useEffect, useState } from 'react';

export default function SignUp() {

    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth
    })
    React.useEffect(() => {
        function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }

        window.addEventListener('resize', handleResize)
    })

    return (dimensions.width <= 750 ?
        <form>
            <h1 className='title stroke'>SIGN UP</h1>
            <div className="min-signup-background flex center vertical gap">
                <div className="flex vertical center gap margin-top">
                    <div className="gap">
                        <img src='./img/icon_email.png' alt="icon_email" className="icon align-center" />
                        <img src='./img/icon_password.png' alt="icon_email" className="icon align-center" />
                    </div>
                    <div className='align-center flex vertical gap-'>
                        <input placeholder="Adresse email" type="text" id="email" />
                        <input placeholder="Comfirmer adresse email" type="text" id="email-confirm" />
                    </div>
                </div>
                <div className="flex vertical center gap">
                    <div className='align-center flex vertical gap-'>
                        <input placeholder="Mot de passe" type="text" id="password" />
                        <input placeholder="Comfirmer mot de passe" type="text" id="password-confirm" />
                    </div>
                </div>
                <div className="flex vertical center gap min-connection">
                    <Link className="stroke" to="/login">Se connecter</Link>
                </div>
                <div className="center">
                    <input type="submit" value="Créer un compte" />
                </div>
            </div>
        </form>
        :
        <form>
            <div className="signup-background flex center vertical gap">
                <h1 className='title stroke'>SIGN UP</h1>
                <div className="flex center gap">
                    <img src='./img/icon_email.png' alt="icon_email" className="icon align-center" />
                    <div className='align-center flex vertical gap-'>
                        <input placeholder="Adresse email" type="text" id="email" />
                        <input placeholder="Comfirmer adresse email" type="text" id="email-confirm" />
                    </div>
                </div>
                <div className="flex center gap">
                    <img src='./img/icon_password.png' alt="icon_email" className="icon align-center" />
                    <div className='align-center flex vertical gap-'>
                        <input placeholder="Mot de passe" type="text" id="password" />
                        <input placeholder="Comfirmer mot de passe" type="text" id="password-confirm" />
                    </div>
                </div>
                <div className="flex center gap connection">
                    <Link className="stroke" to="/login">Se connecter</Link>
                </div>
                <div className="center">
                    <input type="submit" value="Créer un compte" />
                </div>
            </div>
        </form>
    )
}