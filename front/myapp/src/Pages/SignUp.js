import icon_email from '../img/icon_email.png';
import icon_password from '../img/icon_password.png';
function Login(props){
    return <div className="Background">
        <div className="container">
        <div className="row">
        <div className="col-md-12 col-12">
        <div className="bg">

        <form>
        <div className="space2">
        <h1>SIGN UP</h1>
        </div>
        <div className="row ">
        <div className="col-5">
        <img src={icon_email} alt="icon_email" className="col-1 offset-11"/>
        </div>
        <div className="col-7">
        <input placeholder="Nom d'utilisateur" type="text" id="username"/>
        </div>
        </div>
        <div className="row rowForm2">
        <div className="col-7 offset-5">
        <input placeholder="Adresse E-mail" type="text" id="email"/>
        </div>
        </div>
        <div className="row ">
        <div className="col-5">
        <img src={icon_password} alt="icon_email" className="col-1 offset-11"/>
        </div>
        <div className="col-7">
        <input placeholder="Mot de passe" type="text" id="password"/>
        </div>
        </div>
        <div className="row rowForm2">
        <div className="col-7 offset-5">
        <input placeholder="Confirmer mot de passe" type="text" id="email"/>
        </div>
        </div>
        <div className="row rowForm2">
            <div className='col-2 offset-4'>
                <a href="/login" className="createAccount">Se connecter</a>
            </div>
        </div>
        <div className="row formBottom">
        <input className="col-2 offset-5 " type="submit" value="Créer un compte"/>
        </div>
        </form>
        </div>
        </div>
        </div>
        </div>
        </div>
}
export default Login;