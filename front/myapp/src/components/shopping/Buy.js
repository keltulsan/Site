export function Buy(props){
return <div><p>Vous êtes sur le point de payer {props.price}€.</p>
            <div className='align-top flex center all gap-'>
            <input type="checkbox" className="align-center" defaultChecked={true} />
            <p className="text align-center stroke">Accepter le paiement</p>
            <input type="submit" value="Payer"/>
            </div>
            </div>
}
