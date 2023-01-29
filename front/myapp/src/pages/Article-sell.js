import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function SliderVetements(){
        return (
            <Carousel>
                <div className='left'>
                    <img className="icon-carousel" src="./img/fichier 4.png" alt="Image d'article sur Eko" />
                </div>
                <div>
                    <img className="icon-carousel" src="./img/dot single 1.png" alt="Image d'article sur Eko"/>
                </div>
                <div>
                    <img className="icon-carousel" src="./img/fichier 3.png" alt="Image d'article sur Eko"/>
                </div>
                <div>
                    <img className="icon-carousel" src="./img/fichier 5.png" alt="Image d'article sur Eko"/>
                </div>
                <div>
                    <img className="icon-carousel" src="./img/fichier 6.png" alt="Image d'article sur Eko"/>
                </div>
            </Carousel>
        );
};








export function ArticleSell() {
    return <div className='container'>
        <h1 className='title stroke'>Mes articles sur Eko</h1>
        <div className="grid5 flex ">
            <div className="gap-plus center">
                <div className="flex vertical gap margin-top">

                    <SliderVetements />


                    <div className='align-top flex gap-'>
                        <input type="checkbox" className="align-center" defaultChecked={true} />
                        <p className="text align-center stroke">En stock</p>
                    </div>


                </div>
            </div>
            <div className="margin-top background-color-2-4 radius">
                <div className="background-color-1-5 padding-top- radius-top">
                </div>
                <div className="margin-top- flex vertical">
                    <h2 className="title left">Prix <img className="icon" src="./img/euro.png" alt="icone euro sur Eko"></img></h2>
                    <h2 className="title left margin-top--- ">Date de livraison <img className="icon" src="./img/calendrier.png" alt="icone de calendrier sur Eko"></img></h2>
                    <h2 className="title left margin-top--- ">Expéditeur <img className="icon" src="./img/groupe.png" alt="icone de groupe sur Eko"></img></h2>
                    <div className="flex vertical margin-top--- ">
                        <h2 className="title left">Note de l'article </h2>
                        <div className="left margin-top--- ">
                            <img className="icon" src="./img/etoile.png" alt="icone d'étoile sur Eko"></img>
                            <img className="icon" src="./img/etoile.png" alt="icone d'étoile sur Eko"></img>
                            <img className="icon" src="./img/etoile.png" alt="icone d'étoile sur Eko"></img>
                            <img className="icon" src="./img/etoile.png" alt="icone d'étoile sur Eko"></img>
                            <img className="icon" src="./img/etoile.png" alt="icone d'étoile sur Eko"></img>
                        </div>
                        <div className="margin-top--">
                            <h2 className="title left">Quantité </h2>
                            <select className="left background-color-2-3 drop-down radius">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="20">20</option>
                            </select>
                        </div>
                    </div>
                    <div className="margin-top--">
                        <h2 className="title left">Taille <img className="icon" src="./img/size-guide.png" alt="icone d'un guide des tailles sur Eko"></img></h2>
                        <select className="left background-color-2-3 drop-down radius">
                            <option value=""></option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select>
                    </div>
                    <div className="margin-top-- flex center margin-bottom---">
                        <div className="flex center">
                            <input className="padding-right-left" type="submit" value="Ajouter au panier"></input>
                            <img className="icon" src="./img/ajout-panier.png" alt="icone d'ajouter au panier sur Eko"></img>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
}

