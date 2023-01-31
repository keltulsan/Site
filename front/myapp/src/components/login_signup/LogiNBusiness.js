import { LoginBusiness } from "../../api/Login";   
       
export async function Login_Business(user){
    return await LoginBusiness(user) ; 
}