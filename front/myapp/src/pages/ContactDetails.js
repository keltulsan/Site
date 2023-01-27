export function ContactDetails(props) {
    return <form>
        <h1 className="title top">Mes coordonnées</h1>
        <h2 className='subTitle row col-6 offset-md-3 col-sm-12 marginTop2 margin0'>Coordonnées</h2>
        <div className="row col-md-6 offset-md-3 col-sm-12 marginTop margin0">
            <input placeholder="Adresse E-mail" type="text" id="email" />
            <h2 className='subTitle row col-6 offset-md-3 col-sm-12 marginTop margin0'>Adresse de livraison</h2>
            <input placeholder="Pays" type="text" id="pays" />

            <div>
                <div>
                    <input placeholder="Prénom" type="text" id="prenom" />
                </div>
                <div>
                    <input className='offset-md-1' placeholder="Nom" type="text" id="nom" />
                </div>
            </div>

            <input placeholder="Entreprise (falcultatif)" type="text" id="business" />

            <div>
                <input placeholder="Adresse" type="text" id="adress" />


                <input placeholder="Appartement (falcultatif)" type="text" id="apartment" />


                <div>
                    <div>
                        <input placeholder="Code postal" type="text" id="code-postal" />
                    </div>
                    <div>
                        <input className='offset-md-1' placeholder="Ville" type="text" id="city" />
                    </div>
                </div>

                <input placeholder="Téléphone" type="text" id="phone-number" />
            </div>
            <div className='row center'>
                <p className='text littleSize'>Sauvegarder mes coordonnées pour la prochaine fois</p>
            </div>
            <div className='row col-md-12 offset-md-1'>
                <button className="bouton col-md-4 margin0">Poursuivre vers l'achat</button>
            </div>
        </div>
    </form>
}
