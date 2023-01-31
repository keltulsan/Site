import { updateUserInfo } from "../../api/envy";   
       
export async function Update(user){
    return await updateUserInfo(user) ; 
}