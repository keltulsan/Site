import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Login } from "../api/Login";
import { ReactSession } from 'react-client-session';
import md5 from "md5";
export default function LoginPage(){
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmitLogin = async (data) => {
        console.log(data);
        console.log(await Login(data));
        const userList = await Login(data);
        const password = await md5(userList.filter(userList=>userList.password.match(data["password"])))
        // console.log(userList.filter(users=>users.match(data["nickname"])));
        console.log(userList)
        console.log(userList.filter(userList=>userList.mail.match(data["mail"])))
        if(userList.filter(userList=>userList.mail.match(data["mail"])).length>0 & password.length>0){
            ReactSession.set("username", userList[0]["nickname"]);
            console.log(ReactSession.get("username"));
        };
      }
    // console.log(watch("email"));
    return <form onSubmit={handleSubmit(onSubmitLogin)}>
        <div className="connect-background flex center vertical gap">
            <h1 className='title'>LOGIN</h1>
            <div className="flex center gap">
                <img src='./img/icon_email.png' alt="icon_email" className="icon align-center"/>
                <div className='align-center flex vertical gap-'>
                    <input placeholder="Adresse email" {...register("mail")} type="text" id="username"/>
                </div>
            </div>
            <div className="flex center gap">
                <img src='./img/icon_password.png' alt="icon_email" className="icon align-center"/>
                <div className='align-center flex vertical gap-'>
                    <input className='align-center' {...register("password")} type="password" placeholder="Mot de passe" id="password"/>
                </div>
            </div>
            <div className="flex center gap create-account">
                <Link to="/signup">Créer un compte</Link>
            </div>
            <div className="center">
                <input type="submit" value="Se connecter"/>
            </div>
        </div>
    </form>
}