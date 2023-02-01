import { useForm } from "react-hook-form";
import { News_ } from "../update_news/news";
import React, { Component, useEffect, useState } from 'react';

export function NewsListInfo(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmitUpdateNews = async (data) => {
        News_(data)
        window.location.replace('/');
    }
    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth
    })
    return <form onSubmit={handleSubmit(onSubmitUpdateNews)} className="align-center flex vertical center" >
        <h1 className="title flex2 center margin-top--">Mon Compte</h1>
        <div className="flex2 vertical center">
            <div className="profils-account flex vertical center">
                <div className="flex2 center">
                    <img className={"img-modal " + (dimensions.width <= 750 ? " img-modal- " : "")} src='./img/avatar.png' alt='ton avatar sur Eko' />
                </div>
            </div>
            <h2 className='title top left align-center'>Information</h2>
            <div className="flex2 margin-top--- align-center">
                <input type="hidden" {...register("id")} value={props.info.id} />
                <input className='background my-account- margin-top---' {...register("name")} placeholder="Nom-Prénom" type="text" id="Nom-prenom" defaultValue={props.info.name} />
            </div>
            <div className="flex2 margin-top--- align-center">
                <input className='background my-account- margin-top---' {...register("link_name")} placeholder="Lien de la condition" type="text" id="Link-name" defaultValue={props.info.link_name} />
                <textarea className='background my-account' {...register("desc")} placeholder="Description" type="textarea" id="message" name="message" defaultValue={props.info.desc} />
                <input className='background my-account- margin-top---' {...register("img")} placeholder="Lien de l'image" type="text" id="Link-img" defaultValue={props.info.img} />
            </div>
            <div className="flex2 center margin-top--">
                <input type="submit" value="Modifier l'actualité" />
            </div>
        </div>
    </form>
}