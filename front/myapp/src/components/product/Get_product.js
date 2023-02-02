import { Product_list } from "../../api/Product";   
       
export async function Product_(user){
    return await Product_list(user) ; 
}