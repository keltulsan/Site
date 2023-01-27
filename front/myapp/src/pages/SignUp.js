import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Sign_up } from "../components/login_signup/SignUp";
import md5 from "md5";

export default function SignUpPage(){
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmitNewUser = async (data) => {
        console.log(data);
        if(data["password"] == data["confirmpassword"]){
            data["password"] = await md5(data["password"]);
            console.log(data)
            Sign_up(data)
        }
      };
    return <form onSubmit={handleSubmit(onSubmitNewUser)}>
        <div className="signup-background flex center vertical gap">
            <h1 className='title'>SIGN UP</h1>
            <div className="flex center gap">
                <img src='./img/icon_email.png' alt="icon_email" className="icon align-center"/>
                <div className='align-center flex vertical gap-'>
                    <input placeholder="Adresse email" {...register("mail")} type="text" id="email"/>
                    <input placeholder="Nom d'utilisateur" {...register("nickname")} type="text" id="username"/>
                </div>
            </div>
            <div className="flex center gap">
                <img src='./img/icon_password.png' alt="icon_email" className="icon align-center"/>
                <div className='align-center flex vertical gap-'>
                    <input placeholder="Mot de passe" {...register("password")} type="password" id="password"/>
                    <input placeholder="Comfirmer mot de passe" {...register("confirmpassword")} type="password" id="password-confirm"/>
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