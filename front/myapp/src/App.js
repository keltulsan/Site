import AboutUs from './pages/AboutUs';
import { Header } from './components/header';
import { Footer } from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import Error404 from "./pages/404";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { CGU } from "./pages/CGU";
import { CGV } from "./pages/CGV";
import { CGR } from "./pages/CGR";
import { ML } from "./pages/ML";
import { ContactDetails } from "./pages/ContactDetails";
import { EkoSave } from './pages/EKO-Save';
import { PayComplete } from './pages/Pay-Complete';
import { ContactUs } from './pages/Contact-Us';
import { ThxEmail } from './pages/Thx-Email';
import Actus from './pages/Actus';
import { UserPage } from './pages/UserPage';


function App(props){
  return <div className="root flex space-between vertical">
    <Router>
      <Header />
      <Switch>

        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Home} />
        <Route exact path="/Actus" component={Actus} />
        
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        
        <Route exact path="/account-user" component={UserPage} />
        <Route exact path="/account" component={ContactDetails} />
        <Route exact path="/eko-save" component={EkoSave} />


        <Route exact path="/payed-complete" component={PayComplete} />

        <Route exact path="/thx-email" component={ThxEmail} />

        <Route exact path="/contact" component={ContactUs} />
        
        <Route exact path="/cgu" component={CGU} />
        <Route exact path="/cgv" component={CGV} />
        <Route exact path="/cgr" component={CGR} />
        <Route exact path="/ml" component={ML} />
        <Route exact path="/about-us" component={AboutUs} />

        <Route exact path="*" component={Error404} />
        
      </Switch>
      <Footer />
    </Router>
    </div>
}

export default App
