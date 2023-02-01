import { useForm } from "react-hook-form";
import { Update_ } from "../../components/update_acc/Update";
import React, { Component, useEffect, useState } from 'react';

export function UserListInfo(props){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmitUpdateUser = async (data) => {
        Update_(data)
        window.location.replace('/');}
    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth
    })
return <form onSubmit={handleSubmit(onSubmitUpdateUser)} className="align-center flex vertical center" >
            <h1 className="title">Mon Compte</h1>
            <div className="flex vertical gap center">
                <div className="profils-account flex vertical center">
                    <img className={"align-center"+(dimensions.width <= 750 ? " min-account-img " : " account-img")} src='./img/avatar.png' alt='ton avatar sur Eko' />
                </div>
                <h2 className='title top left align-center'>Information</h2>
                <div className="flex gap-vw align-center">
                    <input type="hidden" {...register("id")} value={props.info.id}/>
                    <input className='background my-account-' {...register("name")} placeholder="Nom-Prénom" type="text" id="Nom-prenom" defaultValue={props.info.name}
 />
                    <input className='background my-account-' {...register("nickname")} placeholder="Nom d'utilisateur" type="text" id="nickname" defaultValue={props.info.nickname} />
                </div>
                <div className="flex gap-vw align-center">
                    <input className='background my-account' {...register("mail")} placeholder="Adresse E-mail" type="text" id="email" defaultValue={props.info.mail} />
                </div>
                <input className='background my-account align-center' {...register("country")} placeholder="Pays" type="text" id="country" defaultValue={props.info.country} />
                <input className='background my-account align-center' {...register("business_name")} placeholder="Entreprise" type="text" id="business" />
                <input className='background my-account align-center' {...register("adress")} placeholder="Adresse" type="text" id="adress" defaultValue={props.info.adress} />
                <input className='background my-account align-center' {...register("apartement")} placeholder="Appartement (falcultatif)" type="text" id="apartment" defaultValue={props.info.apartement} />
                <div className="flex gap-vw align-center">
                    <input className='background my-account-' {...register("code_postal")} placeholder="Code postal" type="text" id="code-postal" defaultValue={props.info.code_postal} />
                    <input className='background my-account-' {...register("city")} placeholder="Ville" type="text" id="city" defaultValue={props.info.city}/>
                </div>
                <input className='background my-account align-center' {...register("phone_number")} placeholder="Téléphone" type="text" id="phone-number" defaultValue={props.info.phone_number} />

                <div>
                    <input type="submit" value="Modifier l'utilisateur" />
                </div>
            </div>
        </form>}