export function ContactUs() {
    return <div className="flex vertical"><form className="align-center">
        <h1 className="title stroke">Contactez-nous</h1>
        <div className="flex vertical gap center">
            <p className="text">contact@eko.fr</p>
            <div className="flex gap-vw">
                <input className='background my-account-' placeholder="Prénom" type="text" id="prenom" />
                <input className='background my-account-' placeholder="Nom" type="text" id="nom" />
            </div>
            <input className='background my-account' placeholder="Adresse E-mail" type="text" id="email" />

            <input className='background my-account' placeholder="Votre demande" type="text" id="pays" />
            
            <textarea className='background my-account' placeholder="Votre message" type="textarea" id="business" />
            <div>
                <input type="submit" value="Valider votre demande" />
            </div>
        </div>
    </form></div>
}