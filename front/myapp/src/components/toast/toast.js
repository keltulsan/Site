import Toast from 'react-bootstrap/Toast';
export function Toast_(props){
return <Toast onClose={() => props.setShow(false)} show={props.show} bg={'primary'}>
        <Toast.Header>
            <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
            />
            <strong className="me-auto">Pokémon</strong>
        </Toast.Header>
        <Toast.Body>Salut</Toast.Body>
    </Toast>
}