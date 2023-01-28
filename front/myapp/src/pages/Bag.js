export function Bag() {
    return <div className='container'>
        <h1 className='title stroke'>Mes articles sur Eko</h1>
        <div className="grid4 flex">
            <div className="gap-plus center">
                <div className="vertical gap">

                    <div className="gap grid3 margin-top flex">
                        <div className="box background-color-2-4 default-size">
                            <img className="full-width" src='./img/paypal.png' alt='image de paiment paypal sur Eko' />
                        </div>
                        <div className="box background-color-2-4 flex align-center">
                            <p className="text">What is Lorem Ipsum?
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        </div>
                    </div>
                    <div className="gap grid3 margin-top- flex">
                        <div className="box background-color-2-4 default-size">
                            <img className="full-width" src='./img/paypal.png' alt='image de paiment paypal sur Eko' />
                        </div>
                        <div className="box background-color-2-4 flex align-center">
                            <p className="text">What is Lorem Ipsum?
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        </div>
                    </div>
                    <div className="gap grid3 margin-top- flex">
                        <div className="box background-color-2-4 default-size">
                            <img className="full-width" src='./img/paypal.png' alt='image de paiment paypal sur Eko' />
                        </div>
                        <div className="box background-color-2-4 flex align-center ">
                            <p className="text">What is Lorem Ipsum?
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        </div>

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

