import { Link } from "react-router-dom"
import { links } from "../../App";
import { Product_ } from "../../components/product/Get_product";
import React, { Component, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function Product() {
    const link = links();
    const [product, setProduct] = useState([]);
    const [res, setRes] = useState([]);
    let { label } = useParams();
    useEffect(() => {
        const productFetched = Product_();
        productFetched
            .then(result => setProduct(result))
            .catch(error => console.error('Erreur avec notre API :', error.message));
    }, []);

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
    useEffect(() => {
        console.log(product)
        setRes(product.filter(product => product.label_name.match(label)).map((val,key) => {
            return <div key={key}><Link to={"/item-sell/" + val["name"].toLowerCase().replaceAll(" ", "-").normalize("NFD").replace(/\p{Diacritic}/gu, "")}>
                <div className='logos-categories'>
                    <img className='logoCategorie' src={val.img} alt={"Produit " + val.name + " d Eko"}></img>
                    <div className="fadedbox">
                        <div className="text">{val.name}</div>
                    </div>
                </div>
            </Link>
            </div>
        }))
    }, [product]);
    return <div className='flex center'>
        <div className={"" + (dimensions.width <= 750 ? "flex vertical center " : ' grid')}>
            {res}
        </div>
    </div>
        
}