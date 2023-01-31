import { Link } from "react-router-dom"
import React, { Component, useEffect, useState } from 'react';
import { link } from "@mui/material";
import { links } from "../../App";

export function Stocks() {
    const link = links();

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

    return <div className='container'>
        <h1 className='title stroke'> Mes stocks sur Eko</h1>
        <div className={"flex center "+(dimensions.width <= 750 ? " vertical margin-top- gap" : " gap-plus margin-top")}>
            <div className="flex vertical">
                <div className="flex gap box background-color-2-4 align-center">
                    <img className="align-center" src='./img/mastercard.png' alt='image de paiment mastercard sur Eko' />
                    <img className="align-center" src='./img/visa.png' alt='image de paiment mastercard sur Eko' />
                    <img className="align-center" src='./img/paypal.png' alt='image de paiment paypal sur Eko' />
                </div>
                <div className="flex center gap-">
                    <Link className="style-link stroke" to={link.homeFull}>Modifier </Link><p className="text"> / </p><Link className="style-link stroke" to={link.homeFull}> Supprimer</Link>
                </div>
            </div>
            <div className="flex vertical align-center">
                <div className="flex gap box background-color-2-4">
                    <img className="align-center" src='./img/mastercard.png' alt='image de paiment mastercard sur Eko' />
                    <img className="align-center" src='./img/visa.png' alt='image de paiment mastercard sur Eko' />
                    <img className="align-center" src='./img/paypal.png' alt='image de paiment paypal sur Eko' />
                </div>
                <div className="flex center gap-">
                    <Link className="style-link stroke" to={link.homeFull}>Modifier </Link><p className="text"> / </p><Link className="style-link stroke" to={link.homeFull}> Supprimer</Link>
                </div>
            </div>
            <div className="flex vertical align-center">
                <div className="flex gap box background-color-2-4">
                    <img className="align-center" src='./img/mastercard.png' alt='image de paiment mastercard sur Eko' />
                    <img className="align-center" src='./img/visa.png' alt='image de paiment mastercard sur Eko' />
                    <img className="align-center" src='./img/paypal.png' alt='image de paiment paypal sur Eko' />
                </div>
                <div className="flex center gap-">
                    <Link className="style-link stroke" to={link.homeFull}>Modifier </Link><p className="text"> / </p><Link className="style-link stroke" to={link.homeFull}> Supprimer</Link>
                </div>

            </div>
        </div>
        <div className="flex center margin-top">
            <Link className="style-link-2" to={link.homeFull}><h2 className="title border stroke background-button">Mes stocks</h2></Link>
        </div>
        <div className="flex center margin-top">
        <Link className="style-link-2" to={link.homeFull}><img className="align-center icon-plus" src='./img/bouton play.png' alt='Bouton lancement de vidéo explicative sur les stocks sur Eko' /></Link>
    </div>
    </div>
}
