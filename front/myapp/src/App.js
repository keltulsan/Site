import AboutUs from './pages/Us/AboutUs';
import { Header } from './components/header';
import { Footer } from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import Error404 from "./pages/Error/404";
import SignUp from "./pages/Inform-user/SignUp";
import Login from "./pages/Inform-user/Login";
import { CGU } from "./pages/Condition-generale/CGU";
import { CGV } from "./pages/Condition-generale/CGV";
import { CGR } from "./pages/Condition-generale/CGR";
import { ML } from "./pages/Condition-generale/ML";
import { ContactDetails } from "./pages/Inform-user/ContactDetails";
import { EkoSave } from './pages/EKO-Save';
import { PayComplete } from './pages/Payment/Pay-Complete';
import { ContactUs } from './pages/Us/Contact-Us';
import { ThxEmail } from './pages/Us/Thx-Email';
import Actus from './pages/Us/Actus';
import PayChoice from './pages/Payment/PaymentChoice';
import {Stocks } from './pages/Admin/Stocks';
import { Sells } from './pages/Admin/Sells';
import { EnvyList } from './pages/Article/Envy-list';
import { History } from './pages/Inform-user/History';
import { Robot } from './components/Robot';
import ChatBox from './pages/Chat-box';
import { Bag } from './pages/Condition-generale/Bag';
import { Articles } from './pages/Article/Articles';
import { UserPage } from './pages/Inform-user/UserPage';
import Background from './components/background';
import { ArticleClotheSell} from './pages/Article/Article-clothe-sell';
import { ArticleSell } from './pages/Article/Article-sell';
import { FAQ } from './pages/Us/Faq';


export default function App(props){
  return <>{/*<Background />*/}<div className="root flex space-between vertical">
    <Router>
      <Header />
      <Switch>

        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Home} />
        <Route exact path="/actus" component={Actus} />
        
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        
        <Route exact path="/account-user" component={UserPage} />
        <Route exact path="/account" component={ContactDetails} />
        <Route exact path="/eko-save" component={EkoSave} />


        <Route exact path="/payed-complete" component={PayComplete} />

        <Route exact path="/panier" component={Bag} />

        <Route exact path="/articles" component={Articles} />

        <Route exact path="/article-clothe-sell" component={ArticleClotheSell} />
        <Route exact path="/article-sell" component={ArticleSell} />
        

        <Route exact path="/thx-email" component={ThxEmail} />

        <Route exact path="/faq" component={FAQ} />

        <Route exact path="/stocks" component={Stocks} />
        <Route exact path="/sells" component={Sells} />
        <Route exact path="/envy-list" component={EnvyList} />

        <Route exact path="/pay-choice" component={PayChoice} />

        <Route exact path="/history" component={History} />

        <Route exact path="/chat-bot" component={ChatBox} />

        <Route exact path="/contact" component={ContactUs} />
        
        <Route exact path="/cgu" component={CGU} />
        <Route exact path="/cgv" component={CGV} />
        <Route exact path="/cgr" component={CGR} />
        <Route exact path="/ml" component={ML} />
        <Route exact path="/about-us" component={AboutUs} />

        <Route exact path="*" component={Error404} />
        
      </Switch>
      <Robot />
      <Footer />
    </Router>
    </div></>
}

