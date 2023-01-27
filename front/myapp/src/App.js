import './App.css';
import AboutUs from './Pages/AboutUs';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Header } from './components/header';
import { Footer } from './components/footer';

function App(props){
  return <Router>
      <Switch>
        <Route path="/">
          <Header />
          <Route path="/">
            <AboutUs/>
          </Route>
          <Footer />
        </Route>
      </Switch>
  </Router>
}

export default App;
