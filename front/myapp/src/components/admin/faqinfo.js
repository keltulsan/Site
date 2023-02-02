import { useForm } from "react-hook-form";
import { Faq_ } from "../update_faq/faq";
import React, { Component, useEffect, useState } from 'react';

export function FaqListInfo(props){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmitUpdateFaq = async (data) => {
        Faq_(data)
        window.location.replace('/');}
    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth
    })
return <form onSubmit={handleSubmit(onSubmitUpdateFaq)} className="align-center flex vertical center" >
            <h1 className="title flex2 center margin-top--">FAQ</h1>
            <div className="flex2 vertical center">
                <div className="profils-account flex vertical center">
                    <div className="flex2 center">
                    <img className={"img-modal "+(dimensions.width <= 750 ? " img-modal- " : "")} src='./img/avatar.png' alt='ton avatar sur Eko' />
                </div>
                </div>
                <h2 className='title top left align-center'>Information</h2>
                <div className="flex2 margin-top--- align-center">
                    <input type="hidden" {...register("id")} value={props.info.id}/>
                    <input className='background my-account- margin-top---' {...register("name")} placeholder="Nom-Prénom" type="text" id="Nom-prenom" defaultValue={props.info.name} />
                </div>
                <div className="flex2 margin-top--- align-center">
                    <textarea className='background my-account' {...register("desc")}  placeholder="Description" type="textarea" id="message" name="message" defaultValue={props.info.desc} />
                </div>
                <div className="flex2 center margin-top--">
                    <input type="submit" value="Modifier la FAQ" />
                </div>
            </div>
        </form>}