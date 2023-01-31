import { Link } from "react-router-dom";
import React, { Component, useEffect, useState } from 'react';
import { links } from "../../App";
import { useForm } from "react-hook-form";
import { Sign_up } from "../../components/login_signup/SignUp";
import md5 from "md5";

export default function SignUp(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmitNewUser = async (data) => {
        if(data["password"] == data["confirmpassword"]){
            data["password"] = await md5(data["password"]);
            if(data["cgu"] == false){
                props.setAlert(1)
            }else{
            console.log(data)
            data["envy_id"]=0
            Sign_up(data)
            // window.location.replace('/login');
        }
        }
    };    const link = links();

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
        <form onSubmit={handleSubmit(onSubmitNewUser)}>
            <h1 className='title stroke'>SIGN UP</h1>
            <div className="min-signup-background flex center vertical gap">
                <div className="flex vertical center gap margin-top">
                    <div className="gap">
                        <img src='./img/icon_email.png' alt="icon_email" className="icon align-center" />
                        <img src='./img/icon_password.png' alt="icon_email" className="icon align-center" />
                    </div>
                    <div className='align-center flex vertical gap-'>
                        <input placeholder="Adresse email" {...register("mail")} type="text" id="email"/>
                        <input placeholder="Nom d'utilisateur" {...register("nickname")} type="text" id="username"/>
                    </div>
                </div>
                <div className="flex vertical center gap">
                    <div className='align-center flex vertical gap-'>
                        <input placeholder="Mot de passe" {...register("password")} type="password" id="password"/>
                        <input placeholder="Comfirmer mot de passe" {...register("confirmpassword")} type="password" id="password-confirm"/>
                    </div>
                </div>
                <div className="flex vertical center gap min-connection">
                    <Link className="stroke" to={link.login}>Se connecter</Link>
                </div>
                <div className="center">
                    <input type="submit" value="Créer un compte" />
                </div>
            </div>
        </form>
        :
        <form onSubmit={handleSubmit(onSubmitNewUser)}>
            <div className="signup-background flex center vertical gap">
                <h1 className='title stroke'>SIGN UP</h1>
                <div className="flex center gap">
                    <img src='./img/icon_email.png' alt="icon_email" className="icon align-center" />
                    <div className='align-center flex vertical gap-'>
                        <input placeholder="Adresse email" {...register("mail")} type="text" id="email"/>
                        <input placeholder="Nom d'utilisateur" {...register("nickname")} type="text" id="username"/>
                    </div>
                </div>
                <div className="flex center gap">
                    <img src='./img/icon_password.png' alt="icon_email" className="icon align-center" />
                    <div className='align-center flex vertical gap-'>
                        <input placeholder="Mot de passe" {...register("password")} type="password" id="password"/>
                        <input placeholder="Comfirmer mot de passe" {...register("confirmpassword")} type="password" id="password-confirm"/>
                    </div>
                </div>
                <div className="flex center gap connection">
                    <Link className="stroke" to={link.login}>Se connecter</Link>
                </div>
                <div className='align-top flex center all gap-'>
                <input {...register("cgu")} type="checkbox" className="align-center" defaultChecked={true} />
                <p className="text align-center stroke">Accepter les <Link to={link.cgu} target="_blank" >CGU</Link></p>
            </div>
                <div className='align-top flex center all gap-'>
                <input type="checkbox" className="align-center" {...register("newsletter")} defaultChecked={true} />
                <p className="text align-center stroke">S'abonner à la newsletter</p>
            </div>
                <div className="center">
                    <input type="submit" value="Créer un compte" />
                </div>
            </div>
        </form>
    )
}