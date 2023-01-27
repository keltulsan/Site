import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '@mui/material/Collapse';

const getAllFAQ = async () => {
    const response = await fetch(
        'http://localhost:4444/faq/list', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const labels = await response.json()
    return labels
}

export function FAQ(props) {
    const [ faq, setFaq ] = useState(-1);
    const [ fetch, setFetch ] = useState();
    const [ id, setId ] = useState();

    useEffect(() => {
        const faqFetched = getAllFAQ();
        faqFetched
        .then(result => setFetch(result))
        .catch(error=>console.error('Erreur avec notre API :',error.message));
    },[]);

    useEffect(() => {
        if (fetch.length > 0) {
            fetch.map(val => setId(faq["id"])
            )
        }
    },[]);
    
    return <div className="flex vertical gap">
        <h1 className="title top">FAQ</h1>
        <div className="container background">
            <h2 className="title">Ma commande n’est pas arrivé à destination que faire ?</h2>
            <p className='text'>lorem</p>
            <Link to='#' onClick={() => {
                setFaq(id)
            }}>
            </Link>
            
        </div>

        
    </div>
}
