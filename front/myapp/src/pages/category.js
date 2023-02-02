import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const getAllLabels = async () => {
    const response = await fetch(
        'http://localhost:4444/labels/list', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    )
    const img = await response.json()
    return img
}
export function Categorie(props) {
    const [img, setImg] = useState([]);
    const [res, setRes] = useState([]);

    useEffect(() => {
        const labelsFetched = getAllLabels();
        labelsFetched
            .then(result => setImg(result))
            .catch(error => console.error('Erreur avec notre API :', error.message));
    }, []);
    useEffect(() => {
        setRes(img.map((val) => {
            return <Link to={"/" + val["label_name"].toLowerCase().replaceAll(" ", "-").normalize("NFD").replace(/\p{Diacritic}/gu, "")}>
                <div className='logos-categories'>
                    <img className='logoCategorie' src={val.img} alt={"Catégorie " + val.label_name + " d Eko"}></img>
                    <div className="fadedbox">
                        <div className="text">{val.label_name}</div>
                    </div>
                </div>
            </Link>
        }))
    }, [img]);
    return <div className='flex center'>
        <div className='grid'>
            {res}
        </div>
    </div>
}