import './App.css';
import { Footer, Header } from './components/header-footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App(props){
  return <Router>
      <Switch>
        <Header />
        <Route path="/">
        </Route>
        <Footer />
      </Switch>
  </Router>
}

export default App;
