import { Link } from "react-router-dom";

export default function SignUp(){
    return <form>
        <div className="signup-background flex center vertical gap">
            <h1 className='title stroke'>SIGN UP</h1>
            <div className="flex center gap">
                <img src='./img/icon_email.png' alt="icon_email" className="icon align-center"/>
                <div className='align-center flex vertical gap-'>
                    <input placeholder="Adresse email" type="text" id="email"/>
                    <input placeholder="Comfirmer adresse email" type="text" id="email-confirm"/>
                </div>
            </div>
            <div className="flex center gap">
                <img src='./img/icon_password.png' alt="icon_email" className="icon align-center"/>
                <div className='align-center flex vertical gap-'>
                    <input placeholder="Mot de passe" type="text" id="password"/>
                    <input placeholder="Comfirmer mot de passe" type="text" id="password-confirm"/>
                </div>
            </div>
            <div className="flex center gap connection">
                <Link to="/login">Se connecter</Link>
            </div>
            <div className="center">
                <input type="submit" value="Créer un compte"/>
            </div>
        </div>
    </form>
}