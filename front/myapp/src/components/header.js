import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const getAllLabels = async () => {
    const response = await fetch(
        'http://localhost:4444/labels/list', {
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

export function Header() {
    const [ isHover, setIsHover ] = useState([]);
    const [ labs, setLabs ] = useState([]);
    const [ labels, setLabels ] = useState([]);
    useEffect(() => {
        const labelsFetched = getAllLabels();
        labelsFetched
        .then(result => setLabels(result))
        .catch(error=>console.error('Erreur avec notre API :',error.message));
    },[]);
    useEffect(() => {
        if (labels.length > 0) {
            setLabs(labels.map(val => 
                <li key={val["label_name"]}><Link to={"/"+val["label_name"].toLowerCase().replaceAll(" ", "-").normalize("NFD").replace(/\p{Diacritic}/gu, "")}><p>{val["label_name"]}</p></Link></li>
            ))
        }
    },[labels]);

    return <div className='navbar' onMouseLeave={() => setIsHover(false)}>
        <div className='flex space-between'>
            <Link to='/'><img className='logo' src='./img/logo.png' alt='Logo de Eko'/></Link>
            <div className='flex align-center'>
                <Link to='/categories' onMouseEnter={() => setIsHover(true)}><p>Catégories</p></Link>
                <Link to='/my-sellings'><p>Mes ventes</p></Link>
                <Link to='/actus'><p>Actus</p></Link>
                <Link to='/login'><p>Login</p></Link>
                <Link to='/bag'><img src='./img/shopping-bag.png' alt='Logo du panier de Eko'/></Link>
                <Link to='/research'><img src='./img/search.png' alt='Logo de recherche de Eko'/></Link>
            </div>
        </div>
        
        <div>{isHover && (<ul>
            {labs}
        </ul>)}</div>
    </div>
}