import { Collapse } from 'react-collapse';
import React, { Component, useEffect, useState } from 'react';
import { GetFaq_ } from '../../api/GetFaq';

export function FAQ() {
    const [isClick, setIsClick] = useState(0);
    const [faqs, setFaqs] = useState(null);
    const [info, setInfo] = useState(false);

    useEffect(() => {
        const faqFetched =  GetFaq_();
        console.log(faqFetched)
        faqFetched
            .then(result => setInfo(result))
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
        })}
    
        window.addEventListener('resize', handleResize)
    })


    useEffect(() => {
        setFaqs(() => {
            return <>{ info ? info.map((faq, key) => {<div className="gap margin-top flex">
                <div onClick={() => isClick == 1 ? setIsClick(0) : setIsClick(1)} className="box background-color-2-4 flex align-center vertical">
                    <h2 className='title'>{faq.name}</h2>
                    <Collapse isOpened={isClick == 1}>
                        <div><p className={"text "+(dimensions.width <= 750 ? " padding-top-" : "")}>
                            {faq.desc}</p>
                        </div>
                    </Collapse>
                </div>
            </div>}) :<></>}</>})
    }, [isClick])

    return <div className='container'>
        <h1 className='title stroke'>FAQ</h1>
        <div className="gap-plus center">
            <div className="vertical gap">
                {faqs}

            </div>
        </div>
    </div>
}

