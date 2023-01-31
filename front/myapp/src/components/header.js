import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '@mui/material/Collapse';

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
    const [ menu, setMenu ] = useState(false);
    const [ isHover, setIsHover ] = useState(false);
    const [ isHover2, setIsHover2 ] = useState(false);
    const [ labs, setLabs ] = useState([]);
    const [ labels, setLabels ] = useState([]);

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
        const labelsFetched = getAllLabels();
        labelsFetched
        .then(result => setLabels(result))
        .catch(error=>console.error('Erreur avec notre API :',error.message));
    },[]);
    useEffect(() => {
        if (labels.length > 0) {
            setLabs(labels.map(val => 
                <li className="flex center" key={val["label_name"]}><Link to={"/"+val["label_name"].toLowerCase().replaceAll(" ", "-").normalize("NFD").replace(/\p{Diacritic}/gu, "")}><p>{val["label_name"]}</p></Link></li>
            ))
        }
    },[labels, dimensions.width]);

    return <div className='navbar' onMouseLeave={() => {
        setIsHover(dimensions.width > 750 ? false : isHover)
        setIsHover2(dimensions.width > 750 ? false : isHover2)
    }}>
        <div className='flex space-between'>
            <Link to='/'><img className='logo' src='./img/logo.png' alt='Logo de Eko'/></Link>
            {dimensions.width > 750 && <div className='flex align-center'>
                <Link to='/categories' onMouseEnter={() => {
                    setIsHover(true)
                    setIsHover2(false)
                }}><p>Catégories</p></Link>
                <Link to='/my-sellings'><p>Mes ventes</p></Link>
                <Link to='/actus'><p>Actus</p></Link>
                {/* <Link to='/login'><p>Login</p></Link> */}
                <Link to='/account-user' onMouseEnter={() => {
                    setIsHover(false)
                    setIsHover2(true)
                }}><img src='./img/avatar.png' alt='ton avatar sur Eko'/></Link>
                <Link to='/bag'><img src='./img/shopping-bag.png' alt='Logo du panier de Eko'/></Link>
                <Link to='/research'><img src='./img/search.png' alt='Logo de recherche de Eko'/></Link>
            </div>}
            {dimensions.width <= 750 && 
                <span className="glyphicon glyphicon-list align-center" onClick={() => setMenu(!menu)}></span>
            }
        </div>

        {dimensions.width <= 750 && <Collapse in={menu}><div className='mobile-menu'>
                <Link to='#' onClick={() => {
                    setIsHover(!isHover)
                    setIsHover2(false)
                }}><p>Catégories</p></Link>
                <Link to='/my-sellings'><p>Mes ventes</p></Link>
                <Link to='/actus'><p>Actus</p></Link>
                {/* <Link to='/login'><p>Login</p></Link> */}
                <div className='flex center'>
                    <Link to='#' onClick={() => {
                    setIsHover(false)
                    setIsHover2(!isHover2)
                }}><img src='./img/avatar.png' alt='ton avatar sur Eko'/></Link>
                    <Link to='/bag'><img src='./img/shopping-bag.png' alt='Logo du panier de Eko'/></Link>
                    <Link to='/research'><img src='./img/search.png' alt='Logo de recherche de Eko'/></Link>
                </div>
        </div></Collapse>}
        <Collapse in={isHover && (menu || dimensions.width > 750)}><ul className={dimensions.width > 750 ? 'grid little' : 'little'}>
            {labs}
        </ul></Collapse>
        <Collapse in={isHover2 && (menu || dimensions.width > 750)}><div className='little'>
            <Link to='/account-user'><p>Mon compte</p></Link>
            <Link to='/historique'><p>Historique</p></Link>
            <Link to='/eko-save'><p>EKO Save</p></Link>
            </div></Collapse>
    </div>
}