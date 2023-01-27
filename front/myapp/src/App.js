import Home from "./pages/Home";
import Error404 from "./pages/404";
import { Header } from './components/header';
import { Footer } from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { CGU } from "./pages/CGU";
import { CGV } from "./pages/CGV";
import { CGR } from "./pages/CGR";
import { ML } from "./pages/ML";

function App(props){
  return <div className="root flex space-between vertical"><Header />
    <Router>
      <Switch>

        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Home} />
        
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        
        <Route exact path="/cgu" component={CGU} />
        <Route exact path="/cgv" component={CGV} />
        <Route exact path="/cgr" component={CGR} />
        <Route exact path="/ml" component={ML} />
        
        <Route exact path="*" component={Error404} />
        
      </Switch>
    </Router>
    <Footer /></div>
}

export default App
