import React, { Component, useEffect, useState } from 'react';

export default function Chatbox(){

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


    return <div className="container">
        <div className="flex center">
        <h1><img className="logo half stroke" src='./img/logo.png' alt="Logo de Eko" /></h1>
    </div>
    <div className="flex center margin-top">
        <img className={"rotate-img "+(dimensions.width <= 750 ? "min-chat-box" : "")} src='./img/chat-box.png' alt="Logo de Eko" />
    </div>
    </div>
}
 