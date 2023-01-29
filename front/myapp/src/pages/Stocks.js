import { Link } from "react-router-dom"

export function Stocks() {
    return <div className='container'>
        <h1 className='title stroke'> Mes stocks sur Eko</h1>
        <div className="flex gap-plus center margin-top">
            <div className="flex vertical">
                <div className="flex gap box background-color-2-4">
                    <img className="align-center" src='./img/mastercard.png' alt='image de paiment mastercard sur Eko' />
                    <img className="align-center" src='./img/visa.png' alt='image de paiment mastercard sur Eko' />
                    <img className="align-center" src='./img/paypal.png' alt='image de paiment paypal sur Eko' />
                </div>
                <div className="flex center">
                    <p><Link className="style-link stroke" to="/">Modifier </Link> / <Link className="style-link stroke" to="/"> Supprimer</Link></p>
                </div>
            </div>
            <div className="flex vertical">
                <div className="flex gap box background-color-2-4">
                    <img className="align-center" src='./img/mastercard.png' alt='image de paiment mastercard sur Eko' />
                    <img className="align-center" src='./img/visa.png' alt='image de paiment mastercard sur Eko' />
                    <img className="align-center" src='./img/paypal.png' alt='image de paiment paypal sur Eko' />
                </div>
                <div className="flex center">
                    <p><Link className="style-link stroke" to="/">Modifier </Link> / <Link className="style-link stroke" to="/"> Supprimer</Link></p>
                </div>
            </div>
            <div className="flex vertical">
                <div className="flex gap box background-color-2-4">
                    <img className="align-center" src='./img/mastercard.png' alt='image de paiment mastercard sur Eko' />
                    <img className="align-center" src='./img/visa.png' alt='image de paiment mastercard sur Eko' />
                    <img className="align-center" src='./img/paypal.png' alt='image de paiment paypal sur Eko' />
                </div>
                <div className="flex center">
                    <p><Link className="style-link stroke" to="/">Modifier </Link> / <Link className="style-link stroke" to="/"> Supprimer</Link></p>
                </div>
                
            </div>
        </div>
        <div className="flex center margin-top">
            <Link className="style-link-2" to="/"><h2 className="title border stroke background-button">Mes stocks</h2></Link>
        </div>
        <div className="flex center margin-top">
        <Link className="style-link-2" to="/"><img className="align-center icon-plus" src='./img/bouton play.png' alt='Bouton lancement de vidéo explicative sur les stocks sur Eko' /></Link>
    </div>
    </div>
}

