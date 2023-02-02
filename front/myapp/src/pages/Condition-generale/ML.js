import { useEffect, useState } from 'react'
const getAllML = async () => {
    const response = await fetch(
        'http://localhost:4444/condition/list', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    )
}


export function ML(props) {
    return <div className="container">
        <h1 className="title top stroke">Mention légale</h1>
        <div className="col-md-10 offset-md-1 col-12">
            <p className='text stroke'></p>
        </div>
    </div>
}
