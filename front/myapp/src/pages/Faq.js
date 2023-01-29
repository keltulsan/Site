import { Collapse } from 'react-collapse';
import React, { useEffect, useState } from 'react'
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export function FAQ() {
    const [isClick, setIsClick] = useState(false);

    return <div className='container'>
        <h1 className='title stroke'>FAQ</h1>
        <div className="gap-plus center">
            <div className="vertical gap">
                <div className="gap margin-top flex">
                    <div className="box background-color-2-4 flex align-center vertical">
                        <h2 className='title'>Lorem ipsum</h2>
                        <Collapse isOpened={getRandomInt(2)}>
                            <div><p className="text">What is Lorem Ipsum?
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                            </div>
                        </Collapse>
                        {/* <div className="margin-top-- margin-bottom---flex center">
                            <input className="padding-right-left" type="submit" value="Commander" onClick={setIsClick(true)} />
                            </div> */}
                        
                    </div>
                </div>
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

