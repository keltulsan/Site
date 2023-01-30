import Toast from 'react-bootstrap/Toast';
export function Toast_(props){
return <Toast onClose={() => props.setShow2(false)} show={props.show} delay={4000} autohide style={{ position: "absolute", top: 0, right: 0 }}>
        <Toast.Header>
            <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
            />
            <strong className="me-auto">Pokémon</strong>
        </Toast.Header>
        <Toast.Body>Le Pokémon vient d'être ajouté</Toast.Body>
    </Toast>
}