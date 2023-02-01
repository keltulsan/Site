import { Link } from "react-router-dom"

export function Footer() {
    return <div className="footer">
        <div className="flex space-between footer1">
            <Link to="/"><img className="logo" src="./img/logo.png" alt="Logo de Eko"/></Link>
            <div>
                <p><Link to="/faq">FAQ</Link> / <Link to="/contact">Contact</Link></p>
                <p className="little"><Link to="/ml">Mention Legale</Link></p>
                <p className="little"><Link to="/about-us">About us</Link></p>
            </div>
        </div>
        <div className="flex space-between">
            <div>
                <p className="little"><Link to="/cgu">Conditions générales d'utilisation</Link></p>
                <p className="little"><Link to="/cgv">Conditions générales de ventes</Link></p>
                <p className="little"><Link to="/cgr">Conditions générales de rétractation</Link></p>
            </div>
            <div className="flex align-bot">
                <img src="./img/mastercard.png" alt="Logo de mastercard"/>
                <img src="./img/visa.png" alt="Logo de visa"/>
                <img src="./img/paypal.png" alt="Logo de paypal"/>
            </div>
        </div>
    </div>
}