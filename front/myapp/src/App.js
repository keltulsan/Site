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

function App(props){
  return <Router>
      <Switch>
        <Route>
        <Header />
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="*">
            <Error404 />
          </Route>
          <Footer />
        </Route>
      </Switch>
  </Router>
}

export default App
