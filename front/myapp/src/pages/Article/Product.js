import { Link } from "react-router-dom"
import { links } from "../../App";
import { Product_ } from "../../components/product/Get_product";
import React, { Component, useEffect, useState } from 'react';

export function Product() {
    const link = links();
    const [product, setProduct] = useState(false);

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
    return product ? <div className='container'>
        {product.filter(product.label_name.match(product.label_name)).map((product, key) => {
            return <div><h1 className='title stroke' > {product[key].label_name} sur Eko</h1>{console.log(product)}
                <div className={"flex center " + (dimensions.width <= 750 ? " vertical margin-top- gap" : " gap-plus margin-top")}>
                    <div className="flex vertical gap-">
                        <div className="flex gap box background-color-2-4 align-center">
                            <img className="align-center" src={product[key].img} alt={'image de' + (product[key].name) + 'sur Eko'} />

                        </div>
                    </div>
                </div>
            </div>
        })}
    </div>
    : <></>
        
}
