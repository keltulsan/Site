import React, { Component, useEffect, useState } from 'react';

export function UserPage() {

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

    return <div className="flex vertical">
        <form className="align-center flex vertical center ">
            <h1 className="title">Mon Compte</h1>
            <div className="flex vertical gap center">
                <div className="profils-account flex vertical center">
                    <img className={"align-center"+(dimensions.width <= 750 ? " min-account-img " : " account-img")} src='./img/avatar.png' alt='ton avatar sur Eko' />
                </div>
                <h2 className='title top left align-center'>Information</h2>
                <div className="flex gap-vw align-center">
                    <input className='background my-account-' placeholder="Prénom" type="text" id="prenom" />
                    <input className='background my-account-' placeholder="Nom" type="text" id="nom" />
                </div>
                <div className="flex gap-vw align-center">
                    <input className='background my-account' placeholder="Adresse E-mail" type="text" id="email" />
                </div>
                <h2 className='title left align-center'>Adresse de livraison</h2>
                <input className='background my-account align-center' placeholder="Pays" type="text" id="pays" />
                <input className='background my-account align-center' placeholder="Entreprise (falcultatif)" type="text" id="business" />
                <input className='background my-account align-center' placeholder="Adresse" type="text" id="adress" />
                <input className='background my-account align-center' placeholder="Appartement (falcultatif)" type="text" id="apartment" />
                <div className="flex gap-vw align-center">
                    <input className='background my-account-' placeholder="Code postal" type="text" id="code-postal" />
                    <input className='background my-account-' placeholder="Ville" type="text" id="city" />
                </div>
                <input className='background my-account align-center' placeholder="Téléphone" type="text" id="phone-number" />

                <div className='align-top flex gap- align-center'>
                    <input type="checkbox" className="align-center" defaultChecked={true} />
                    <p className="text align-center">Sauvegarder mes coordonnées pour la prochaine fois</p>
                </div>
                <div>
                    <input type="submit" value="Poursuivre vers l'achat" />
                </div>
            </div>
        </form></div>
}
