import { Link } from 'react-router-dom';
export default function Error404(){
    return <>
        <h1 className='title top stroke'>error 404</h1>
        <h2 className='title top'>La page sélectionnée est introuvable</h2>
        <div className="err-qcq flex center">
            <Link to="/" className="align-center">Menu</Link>
        </div>
    </>
}