import { ProductList } from "../../api/product";   
       
export async function Product_(user){
    return await ProductList(user) ; 
}