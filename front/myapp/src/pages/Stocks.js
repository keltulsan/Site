import { Link } from "react-router-dom"

export function Stocks() {
    return <div className='container'>
        <h1 className='title'> Mes stocks sur Eko</h1>
        <div className="flex gap-plus center">
            <div className="flex vertical">
                <div className="flex gap box">
                    <img className="align-center" src='./img/mastercard.png' alt='image de paiment mastercard sur Eko' />
                    <img className="align-center" src='./img/visa.png' alt='image de paiment mastercard sur Eko' />
                    <img className="align-center" src='./img/paypal.png' alt='image de paiment paypal sur Eko' />
                </div>
                <div className="flexcenter">
                    <p><Link className="style-link" to="/faq">Modifier</Link> / <Link className="style-link" to="/contact">Supprimer</Link></p>
                </div>
            </div>
            <div className="flex vertical">
                <div className="flex gap box">
                    <img className="align-center" src='./img/mastercard.png' alt='image de paiment mastercard sur Eko' />
                    <img className="align-center" src='./img/visa.png' alt='image de paiment mastercard sur Eko' />
                    <img className="align-center" src='./img/paypal.png' alt='image de paiment paypal sur Eko' />
                </div>
                <div className="flex center">
                    <p><Link className="style-link" to="/faq">Modifier</Link> / <Link className="style-link" to="/contact">Supprimer</Link></p>
                </div>
            </div>
            <div className="flex vertical">
                <div className="flex gap box">
                    <img className="align-center" src='./img/mastercard.png' alt='image de paiment mastercard sur Eko' />
                    <img className="align-center" src='./img/visa.png' alt='image de paiment mastercard sur Eko' />
                    <img className="align-center" src='./img/paypal.png' alt='image de paiment paypal sur Eko' />
                </div>
                <div className="flex center">
                    <p><Link className="style-link" to="/faq">Modifier</Link> / <Link className="style-link" to="/contact">Supprimer</Link></p>
                </div>
            </div>
        </div>
    </div>
}

