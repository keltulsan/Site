import React, { Component, useEffect, useState } from 'react';

export function Bag() {
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
        <h1 className='title stroke'>Mes articles sur Eko</h1>
        <div className={"flex gap "+(dimensions.width <= 750 ? " vertical " : "space-around ")}>
            <div className={"center margin-top"+(dimensions.width <= 750 ? " align-center " : "")}>
                <div className="vertical gap">

                    <div className={"flex gap margin-top-- "+(dimensions.width <= 750 ? " vertical" : "space-around ")}>
                        <div className={"box background-color-2-4 default-size "+(dimensions.width <= 750 ? " align-center margin-top--" : "")}>
                            <img className="full-width" src='./img/paypal.png' alt='image de paiment paypal sur Eko' />
                        </div>
                        <div className="box background-color-2-4 flex align-center">
                            <p className="text">What is Lorem Ipsum?
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        </div>
                    </div>
                    <div className={"flex gap margin-top-- "+(dimensions.width <= 750 ? " vertical " : "space-around ")}>
                        <div className={"box background-color-2-4 default-size "+(dimensions.width <= 750 ? " align-center margin-top--" : "")}>
                            <img className="full-width" src='./img/paypal.png' alt='image de paiment paypal sur Eko' />
                        </div>
                        <div className="box background-color-2-4 flex align-center">
                            <p className="text">What is Lorem Ipsum?
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        </div>
                    </div>
                    <div className={"flex gap margin-top-- "+(dimensions.width <= 750 ? " vertical " : "space-around ")}>
                        <div className={"box background-color-2-4 default-size "+(dimensions.width <= 750 ? " align-center margin-top--" : "")}>
                            <img className="full-width" src='./img/paypal.png' alt='image de paiment paypal sur Eko' />
                        </div>
                        <div className="box background-color-2-4 flex align-center ">
                            <p className="text">What is Lorem Ipsum?
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="margin-top background-color-2-4 radius">
                <div className="background-color-1-5 padding-top- radius-top">
                </div>
                <div className="margin-top-- flex vertical">
                    <h2 className="title left margin-top--- ">Prix global</h2>
                    <h2 className="title left margin-top--- ">TVA</h2>
                    <h2 className="title left margin-top--- ">Code promotionel</h2>
                    <div className="background-color-2-3 margin-top--- flex center">
                        <h2 className="title align-center">KIWI 69oooo</h2>
                    </div>
                    <h2 className="title left margin-top---">Récapitulatif du panier</h2>
                    <h2 className="title left center-text">'nom produit+quantité'</h2>
                    <div className="margin-top-- margin-bottom---flex center">
                        <input className="padding-right-left" type="submit" value="Commander" />
                    </div>
                </div>
            </div>

        </div>
    </div>
}

