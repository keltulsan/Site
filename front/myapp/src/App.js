import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Categorie } from './pages/categories';


function App(props){
  return <Router>
      <Switch>
        <Route path="/">
          <Header />
            <Route path="/">
              <Categorie />
            </Route>
          <Footer />
        </Route>
      </Switch>
  </Router>
}

export default App;
