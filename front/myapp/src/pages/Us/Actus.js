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
    </div>
}
