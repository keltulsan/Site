import { Link } from "react-router-dom";

export default function Login(props){
    return <form>
        <div className="connect-background flex center vertical gap">
            <h1 className='title'>LOGIN</h1>
            <div className="flex center gap">
                <img src='./img/icon_email.png' alt="icon_email" className="icon align-center"/>
                <div className='align-center flex vertical gap-'>
                    <input placeholder="Adresse email" type="text" id="email"/>
                </div>
            </div>
            <div className="flex center gap">
                <img src='./img/icon_password.png' alt="icon_email" className="icon align-center"/>
                <div className='align-center flex vertical gap-'>
                    <input className='align-center' placeholder="Mot de passe" type="text" id="password"/>
                </div>
            </div>
            <div className="flex center gap create-account">
                <Link to="/signup" className="createAccount">Créer un compte</Link>
            </div>
            <div className="center">
                <input type="submit" value="Se connecter"/>
            </div>
        </div>
    </form>
}