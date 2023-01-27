export function ContactDetails() {
    return <div className="flex vertical"><form className="align-center">
        <h1 className="title">Mes coordonnées</h1>
        <div className="flex vertical gap center">
            <h2 className='title top left'>Coordonnées</h2>
            <input className='background my-account' placeholder="Adresse E-mail" type="text" id="email" />

            <h2 className='title left'>Adresse de livraison</h2>
            <input className='background my-account' placeholder="Pays" type="text" id="pays" />
            <div className="flex gap-vw">
                <input className='background my-account-' placeholder="Prénom" type="text" id="prenom" />
                <input className='background my-account-' placeholder="Nom" type="text" id="nom" />
            </div>
            <input className='background my-account' placeholder="Entreprise (falcultatif)" type="text" id="business" />
            <input className='background my-account' placeholder="Adresse" type="text" id="adress" />
            <input className='background my-account' placeholder="Appartement (falcultatif)" type="text" id="apartment" />
            <div className="flex gap-vw">
                <input className='background my-account-' placeholder="Code postal" type="text" id="code-postal" />
                <input className='background my-account-' placeholder="Ville" type="text" id="city" />
            </div>
            <input className='background my-account' placeholder="Téléphone" type="text" id="phone-number" />
            
            {/* after */}
            <div className='align-top flex gap-'>
                <input type="checkbox" className="align-center" defaultChecked={true} />
                <p className="text align-center">Sauvegarder mes coordonnées pour la prochaine fois</p>
            </div>
            <div>
                <input type="submit" value="Poursuivre vers l'achat" />
            </div>
        </div>
    </form></div>
}
