import { Collapse } from 'react-collapse';
import React, { Component, useEffect, useState } from 'react';

export function FAQ() {
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
                        <p className="text">What is Lorem Ipsum?
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>
                </div>
                <div className="gap margin-top flex">
                    <div className="box background-color-2-4 flex align-center">
                        <p className="text">What is Lorem Ipsum?
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

