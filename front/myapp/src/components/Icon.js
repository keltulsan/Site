import React from "react";


const Icone = () => {
    const ChipStyles = useRef({
        position: 'absolute',
        top: Math.floor(Math.random()*50),
        left: '50%',
        transform: 'translate(-50%, -50%)'
    });

    return (
        <img src={""} style={ChipStyles.current} alt=""/>
    )}

export default Icone;