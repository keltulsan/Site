import logo from '../Img/Fichier 17.png';
// import star from '../Img/Fichier 1.png';
// import lil_star from '../Img/Fichier 2.png';
// import red_triangle from '../Img/Fichier 9.png';
// import blue_triangle from '../Img/Fichier 8.png';
// import green_triangle from '../Img/Fichier 7.png';
// import blue_thing from '../Img/Fichier 16.png';
// import red_hashtag from '../Img/Fichier 13.png';
// import lil_dots from '../Img/Fichier 15.png';
// import green_hashtag from '../Img/Fichier 11.png';
// import dot from '../Img/dot single 1.png';
function Home(props){
    return <div className="Background">
        <div className="container">
        <div className="row">
        <div className="col-lg-3 offset-lg-4 col-md-4 offset-md-4 col-11 offset-1">
        <div className="col-lg-9 offset-lg-3 col-md-9 offset-md-3 col-8 offset-2">
            <div className="logo">
            <img src={logo} alt="Logo" />
            </div>
        </div>
        </div>
        </div>
        <div className="row">
        <div className="col-md-10 offset-md-1 col-12">
        <h1>Bienvenue sur eko</h1>
        </div>
        </div>
        </div>
    </div>
}
export default Home;
