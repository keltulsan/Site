export function Articles() {
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
                <div className="margin-top-- flex vertical">
                    <p className="text">Prix global</p>
                    <p className="text">TVA</p>
                    <p className="text">Code promotionel</p>
                    <div className="background-color-2-3 flex center">
                        <p className="text align-center">KIWI 69oooo</p>
                    </div>
                    <p className="text margin-top--">Récapitulatif du panier</p>
                    <p className="text center-text">'nom produit+quantité'</p>
                    <div className="margin-top-- flex center">
                        <input className="padding-right-left" type="submit" value="Commander" />
                    </div>
                </div>
            </div>

        </div>
    </div>
}

