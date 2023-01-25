import { Link } from "react-router-dom"

export function Header() {
    return <div className="navbar">
        <Link to="/"><img className="logo" src="./img/logo.png" alt="Logo de Eko"/></Link>
        <div className="flex align-center">
            <Link to="/categories"><p>Catégories</p></Link>
            <Link to="/my-sellings"><p>Mes ventes</p></Link>
            <Link to="/actus"><p>Actus</p></Link>
            <Link to="/login"><p>Login</p></Link>
            <Link to="/bag"><img src="./img/shopping-bag.png" alt="Logo du panier de Eko"/></Link>
            <Link to="/research"><img src="./img/search.png" alt="Logo de recherche de Eko"/></Link>
        </div>
    </div>
}