import React, { Component, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const getAllNews = async () => {
    const response = await fetch(
        'http://localhost:4444/news/list', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    )
    const news = await response.json()
    return news
}
export default function News() {
    const [news, setNews] = useState([]);
    const [res, setRes] = useState([]);


    useEffect(() => {
        const newsFetched = getAllNews();
        newsFetched
            .then(result => setNews(result))
            .catch(error => console.error('Erreur avec notre API :', error.message));
    }, []);
    useEffect(() => {
        console.log(res)
        setRes(news.map((val, key) => {
            return <div key={key}>
                <div className='flex center '>
                    <img className="icon-carousel" src={val.img} alt="Image d'article sur Eko" />
                </div>
            </div>
        }))

    }, [news]);
    return <div className="container">
        <h1 className="title top stroke">News</h1>
        <p className="text"></p>
        <div className='flex center'>
            <Carousel className='slide' width="1000px"  >
                {res}
            </Carousel>
        </div>

    </div>

}

