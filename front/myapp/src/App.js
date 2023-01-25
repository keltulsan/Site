import './App.css';
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
          <Footer />
        </Route>
      </Switch>
  </Router>
}

export default App;
