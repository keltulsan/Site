import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Header } from './components/header';
import { Footer } from './components/footer';
import { CGU } from './pages/CGU';
import { CGV } from './pages/CGV';
import { CGR } from './pages/CGR';
import { ML } from './pages/ML';
import { EkoSave } from './pages/EKO-Save';
import { ContactDetails } from './pages/ContactDetails';


function App(props){
  return <Router>
      <Switch>
        <Route path="/">
          <Header />
            <Route path="/">
              <ContactDetails />
            </Route>
          <Footer />
        </Route>
      </Switch>
  </Router>
}

export default App;
