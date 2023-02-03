import { Collapse } from 'react-collapse';
import React, { Component, useEffect, useState } from 'react';
const getAllFaq = async () => {
    const response = await fetch(
        'http://localhost:4444/faq/list', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    )
    const faq = await response.json()
    return faq
}

export function FAQ() {
    const [faq, setFaq] = useState([]);
    const [res, setRes] = useState([]);

    const [isClick, setIsClick] = useState(0);
    const [faqs, setFaqs] = useState(null);

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
        const faqFetched = getAllFaq();
        faqFetched
            .then(result => setFaq(result))
            .catch(error => console.error('Erreur avec notre API :', error.message));
    }, []);

    useEffect(() => {
        try{
            console.log(faq)
            setRes(<>{faq[0].desc}</>)
            setRes(<>{faq[1].desc}</>)
            setRes(<>{faq[2].desc}</>)
        }catch(err){}
},[faq])

    useEffect(() => {
        setFaqs(() => {
            return <div className="gap margin-top flex">
                <div onClick={() => isClick == 1 ? setIsClick(0) : setIsClick(1)} className="box background-color-2-4 flex align-center vertical">
                    <h2 className='title'>Lorem ipsum</h2>
                    <Collapse isOpened={isClick == 1}>
                        <div><p className={"text "+(dimensions.width <= 750 ? " padding-top-" : "")}>What is Lorem Ipsum?
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        </div>
                    </Collapse>
                </div>
            </div>
        })
    }, [isClick])

    return <div className='container'>
        <h1 className='title stroke'>FAQ</h1>
        <div className="gap-plus center">
            <div className="vertical gap">
                {faqs}
                <div className="gap margin-top flex">
                    <div className="box background-color-2-4 flex align-center">
                        <p className="text">{res}</p>
                    </div>
                </div>
                <div className="gap margin-top flex">
                    <div className="box background-color-2-4 flex align-center">
                        <p className="text">{res}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

