import React, { Component, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



function Test() {
    return <Carousel className='slide' width="1000px"  >
        <div className='flex center '>
            <img className="icon-carousel" src="../img/blackfriday.jpg" alt="Image d'article sur Eko" />
        </div>
        <div>
            <img className="icon-carousel" src="./img/logo.png" alt="Image d'article sur Eko" />
        </div>
        <div>
            <img className="icon-carousel" src="./img/jme.jpg" alt="Image d'article sur Eko" />
        </div>
    </Carousel>
}

export default function News() {
    return <div className="container">
        <h1 className="title top stroke">News</h1>
        <p className="text"></p>
        <div className='flex center'>
            <Test />
        </div>
        <h2 className="title">Derniéres Nouvelles</h2>
            <img className='imgHydro' src="./img/img2023.jpg" alt="Recente Actualité sur Eko" />
            <p className="text">Hyvolution est un salon organisé par plus de 200 manifestations grand public ou professionnelles à travers le monde.
            Elle regroupe un grand nombre de personne cherchant à améliorer nos condition de vie et une alternative dans la vie de tout les jours grâce au simple fait de
            l énergie hydraulique. Ce salon se déroule à Paris le 1 et le 2 Février 2023, Porte de Versailles.
            Pour plus d’information sur cet événement écologique veuillez vous renseigner sur le site suivant :<a>https://paris.hyvolution.com/fr</a>
        </p>
    </div>
}

