import React from 'react';
import ReactMarkdown from 'react-markdown';
import ReactDom from 'react-dom';

export function EkoSave(props) {
    return <div className="Background">
        <div className="container">
            <div className="row">
                <div className="center">
                    <h1 className="title eko top">Eko-Save</h1>
                </div>
                <div className="col-md-10 offset-md-1 col-12">
                    <p className='text'></p>
                </div>
                <div className="flex btnSubscribe col-sm-12">
                    <button className="bouton col-md-3">5$/mois</button>
                    <button className="bouton col-md-3">25$/mois</button>
                </div>
            </div>
        </div>
    </div>
}
