export function ArticleSell() {
    return <div className='container'>
        <h1 className='title stroke'>Mes articles sur Eko</h1>
        <div className="grid5 flex ">
            <div className="gap-plus center">
                <div className="flex vertical gap margin-top">

                    <h2 className='title left stroke'>Votre carte bancaire</h2>
                    <input className='background my-account' placeholder="Numéro de carte" type="text" id="card-numbers" />
                    <div className="flex gap-vw">
                        <input className='background my-account-' placeholder="Date d'éxpiration " type="text" id="expiration-date" />
                        <input className='background my-account-' placeholder="Cryptogramme" type="text" id="cryptogram" />
                    </div>
                    <input className='background my-account' placeholder="Titulaire" type="text" id="incumbent" />

                    <div className='align-top flex gap-'>
                        <input type="checkbox" className="align-center" defaultChecked={true} />
                        <p className="text align-center stroke">Sauvegarder mes coordonnées pour la prochaine fois</p>
                    </div>


                </div>
            </div>
            <div className="margin-top background-color-2-4 radius">
                <div className="background-color-1-5 padding-top- radius-top">
                </div>
                <div className="margin-top- flex vertical">
                    <h2 className="title left">Prix <img className="icon" src="./img/euro.png" alt="icone euro sur eko"></img></h2>
                    <h2 className="title left">TVA</h2>
                    <h2 className="title left">Code promotionel</h2>
                    <div className="background-color-2-3 flex center margin-top-">
                        <h2 className="title">KIWI 69oooo</h2>
                    </div>
                    <h2 className="title margin-top- left">Récapitulatif du panier</h2>
                    <h2 className="title margin-top-">'nom produit+quantité'</h2>
                    <div className="margin-top- flex center">
                        <input className="padding-right-left" type="submit" value="Valider mon panier" />
                    </div>
                </div>
            </div>

        </div>
    </div>
}
