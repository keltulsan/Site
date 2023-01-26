import React from 'react';
import ReactMarkdown from 'react-markdown';
import ReactDom from 'react-dom';

export function ContactDetails(props) {
    return <div className="Background">
        <div className="container">
            <div className="row centerObject">
                <div className="center">
                    <h1 className="title top">Condition générale de vente</h1>
                </div>
                <form>
                    <h2 className='subTitle row col-6 offset-md-3 col-sm-12 marginTop2 margin0'>Coordonnées</h2>
                    <div className="row col-md-6 offset-md-3 col-sm-12 marginTop margin0">
                        <input placeholder="Adresse E-mail" type="text" id="email" />
                    </div>
                    <h2 className='subTitle row col-6 offset-md-3 col-sm-12 marginTop margin0'>Adresse de livraison</h2>
                    <div className="row col-md-6 offset-md-3 col-sm-12 marginTop margin0">
                        <input placeholder="Pays" type="text" id="pays" />
                    </div>

                    <div className="row col-md-6 offset-md-3 col-sm-12 marginTop margin0">
                        <div className="row col-md-6 col-sm-12  ">
                            <input placeholder="Prénom" type="text" id="prenom" />
                        </div>
                        <div className="row col-md-6 col-sm-12 margin0 ">
                            <input className='offset-md-1' placeholder="Nom" type="text" id="nom" />
                        </div>
                    </div>

                    <div className="row col-md-6 offset-md-3 col-sm-12 marginTop margin0">
                        <input placeholder="Entreprise (falcultatif)" type="text" id="business" />
                    </div>
                    <div className="row col-md-6 offset-md-3 col-sm-12 marginTop margin0 ">
                        <input placeholder="Adresse" type="text" id="adress" />
                    </div>
                    <div className="row col-md-6 offset-md-3 col-sm-12 marginTop margin0">
                        <input placeholder="Appartement (falcultatif)" type="text" id="apartment" />
                    </div>

                    <div className="row col-md-6 col-sm-12 marginTop margin0">
                        <div className="row col-md-6 col-sm-12  ">
                            <input placeholder="Code postal" type="text" id="code-postal" />
                        </div>
                        <div className="row col-md-6 col-sm-12 margin0">
                            <input className='offset-md-1' placeholder="Ville" type="text" id="city" />
                        </div>
                    </div>

                    <div className="row col-md-6 offset-md-3  marginTop margin0">
                        <input placeholder="Téléphone" type="text" id="phone-number" />
                    </div>
                    <div className='row center'>
                        <p className='text littleSize'>Sauvegarder mes coordonnées pour la prochaine fois</p>
                    </div>
                    <div className='row col-md-12 offset-md-1'>
                        <button className="bouton col-md-4 margin0">Poursuivre vers l'achat</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
}
