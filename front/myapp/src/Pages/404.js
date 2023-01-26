import red_square_bg from '../Img/cr2.png';
import Button from 'react-bootstrap/Button';
function Error404(props){
    return <div className="Background">
        <div className="container">
        <div className="row">
        <div className="col-md-10 offset-md-1 col-12">
        <h1>404</h1>
        <h2>La page sélectionnée est introuvable</h2>
        </div>
        </div>
        <div className="row">
        <div className="col-lg-4 offset-lg-3 col-md-4 offset-md-4 col-11 offset-1">
        <div className="col-lg-9 offset-lg-5 col-md-9 offset-md-3 col-8 offset-2 Big_Button">
            <div className="logo">
            <img src={red_square_bg} alt="Logo"/>
            <Button href="/" variant="secondary" className="button bg-transparent border-0" >
            Menu
            </Button>
            </div>
        </div>
        </div>
        </div>
        </div>
    </div>
}
export default Error404;