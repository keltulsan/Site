import { useEffect, useState } from 'react'
const getAllCGU = async () => {
    const response = await fetch(
        'http://localhost:4444/condition/utilisation', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    )
}


export function CGU(props) {
    return <div className="container">
        <h1 className="title top stroke">Condition générale d'utilisation</h1>
        <p className='text stroke'></p>
    </div>
}
