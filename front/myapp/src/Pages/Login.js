import icon_email from '../Img/icon_email.png';
import icon_password from '../Img/icon_password.png';
function Login(props){
    return <div className="Background">
        <div className="container">
        <div className="row">
        <div className="col-md-12 col-12">
        <div className="bg">

        <form>
        <div className="space">
        <h1>LOGIN</h1>
        </div>
        <div className="row rowForm">
        <div className="col-5">
        <img src={icon_email} alt="icon_email" className="col-1 offset-11"/>
        </div>
        <div className="col-7">
        <input placeholder="Adresse E-mail" type="text" id="email"/>
        </div>
        </div>
        <div className="row rowForm">
        <div className="col-5">
        <img src={icon_password} alt="icon_email" className="col-1 offset-11"/>
        </div>
        <div className="col-7">
        <input placeholder="Mot de passe" type="text" id="password"/>
        </div>
        </div>
        <div className="row rowForm">
            <div className='col-2 offset-4'>
                <a href="/signup" className="createAccount">Créer un compte</a>
            </div>
        </div>
        <div className="row formBottom">
        <input className="col-2 offset-5 " type="submit" value="Se connecter"/>
        </div>
        </form>
        </div>
        </div>
        </div>
        </div>
        </div>
}
export default Login;