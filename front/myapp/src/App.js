import Home from "./pagesf/Home";
import Error404 from "./pagesf/404";
import { Header } from './components/header';
import { Footer } from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SignUp from "./pagesf/SignUp";
import Login from "./pagesf/Login";

function App(props){
  return <Router>
      <Switch>

        <Route exact path="/home">
          <Header />
            <Home />
          <Footer />
        </Route>

        <Route exact path="/login">
          <Header />
            <Login />
          <Footer />
        </Route>

        <Route exact path="/signup">
          <Header />
            <SignUp />
          <Footer />
        </Route>

        <Route exact path="/">
          <Header />
            <Home />
          <Footer />
        </Route>

        <Route exact path="*">
          <Header />
          <Error404 />
          <Footer />
        </Route>
        
      </Switch>
  </Router>
}

export default App
