import { ProductUpdate_ } from "../product/productUpdate";
import { useForm } from "react-hook-form";
import React from "react";

export function Buy(props){
    const { register, handleSubmit, formState: { errors } } = useForm();
    let c = -1;
    const onSubmitUpdateProduct = async (data) => {
        props.ids.map((ids,key)=>{
        console.log(data)
        c+=1
        console.log({"id":String(data["id"+String(c)]),"quantity":String(([props.quantityList[c]]-1))})
        ProductUpdate_({"id":String(data["id"+String(c)]),"quantity":String(([props.quantityList[c]]-1))})
        })
        // window.location.replace('/');
    }

    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth
    })
return <form onSubmit={handleSubmit(onSubmitUpdateProduct)} className="align-center flex vertical center" >
        <h1 className="title flex2 center margin-top--">Confirmation d'achat</h1>
        <div className="flex2 vertical center">
            <div className="profils-account flex vertical center">
                <div className="flex2 center">
                <img className={"img-modal "+(dimensions.width <= 750 ? " img-modal- " : "")} src='./img/avatar.png' alt='ton avatar sur Eko' />
            </div>
            </div>
            <h2 className='title top left align-center'>Vous êtes sur le point de payer {props.price}€.</h2>
            {props.ids.map((ids,key)=>{
                return <div key={key}><input type="hidden" {...register("id"+String(key))} value={ids}/>
                </div>
            })}
            <input type="submit" value="Payer" />
            </div>
        </form>
}
