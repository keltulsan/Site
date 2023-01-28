import { Link } from "react-router-dom"

export function EnvyList() {
    return <div className='container'>
        <h1 className='title'> Liste d'envies</h1>
        <div className="flex gap-plus center">
            <div className="flex vertical">
                <div className="flex gap box background-color-4">
                    <img className="align-center" src='./img/mastercard.png' alt='image de paiment mastercard sur Eko' />
                    <img className="align-center" src='./img/visa.png' alt='image de paiment mastercard sur Eko' />
                    <img className="align-center" src='./img/paypal.png' alt='image de paiment paypal sur Eko' />
                </div>
            </div>
            <div className="flex vertical">
                <div className="flex gap box background-color-4">
                    <img className="align-center" src='./img/mastercard.png' alt='image de paiment mastercard sur Eko' />
                    <img className="align-center" src='./img/visa.png' alt='image de paiment mastercard sur Eko' />
                    <img className="align-center" src='./img/paypal.png' alt='image de paiment paypal sur Eko' />
                </div>
            </div>
            <div className="flex vertical">
                <div className="flex gap box background-color-4">
                    <img className="align-center" src='./img/mastercard.png' alt='image de paiment mastercard sur Eko' />
                    <img className="align-center" src='./img/visa.png' alt='image de paiment mastercard sur Eko' />
                    <img className="align-center" src='./img/paypal.png' alt='image de paiment paypal sur Eko' />
                </div>
            </div>
        </div>
    </div>
}

