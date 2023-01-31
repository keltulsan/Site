import Toast from 'react-bootstrap/Toast';
export function Toast_(props){
    const all_things=["Déconnexion effectué avec succès","Merci d'accepter les CGU"]
return <Toast onClose={() => props.setShow(false)} show={props.show} delay={4000} autohide bg={'primary'}>
        <Toast.Header>
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">Alerte</strong>
                </Toast.Header>
                <Toast.Body>{all_things[props.alerts]}</Toast.Body>
    </Toast>
}