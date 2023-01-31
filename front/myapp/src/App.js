import AboutUs from './pages/Us/AboutUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Header } from './components/header';
import { Footer } from './components/footer';
import Home from "./pages/Home";
import Error404 from "./pages/Error/404";
import SignUpPage from "./pages/Inform-user/SignUp";
import LoginPage from "./pages/Inform-user/Login";
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
import { Stocks } from './pages/Admin/Stocks';
import { Sells } from './pages/Admin/Sells';
import { EnvyList } from './pages/Article/Envy-list';
import { History } from './pages/Inform-user/History';
import { Robot } from './components/Robot';
import ChatBox from './pages/Chat-box';
import { Bag } from './pages/Inform-user/Bag';
import { Articles } from './pages/Article/Articles';
import { UserPage } from './pages/Inform-user/UserPage';
import Background from './components/background';
import { ArticleClotheSell } from './pages/Article/Article-clothe-sell';
import { ArticleSell } from './pages/Article/Article-sell';
import { FAQ } from './pages/Us/Faq';
import { ReactSession } from 'react-client-session';
import { Toast_ } from './components/toast/toast';
import { useState } from 'react';

export function links() {
  return {
    homeFull: '/home',
    home: '/',
    ekoSave: '/eko-save',
    chatBot: '/chat-bot',
    login: '/login',
    signup: '/signup',
    userPage: '/account-user',
    contactDetails: '/account',
    bag: '/bag',
    history: '/history',
    articles: '/articles',
    clotheSell: '/clothe-sell',
    itemSell: '/item-sell',
    likes: '/likes-list',
    catégories: '/categories',
    paymentComplete: '/payed',
    payChoice: '/payment-choice',
    stocks: '/stocks',
    sells: '/sells',
    cgu: '/general-conditions-of-use',
    cgv: '/general-conditions-of-sell',
    cgr: '/general-conditions-of-retractation',
    ml: '/legal-metions',
    aboutUs: '/about-us',
    thxEmail: '/thanks-for-email',
    contact: '/contact',
    faq: '/faq',
    actus: '/actus',
    err404: '*'
  }
}

export function App(props) {
  ReactSession.setStoreType("cookie");
  const [show,setShow] = useState(false);
  const link = links()

  return <>{/*<Background />*/}
    <Router>
    <Header setShow={setShow} />
      <Toast_ show = {show} setShow={setShow}/>
      <div className="root flex space-between vertical">
        <div></div>

        <Switch>

          <Route exact path={link.homeFull} component={Home} />
          <Route exact path={link.home} component={Home} />

          <Route exact path={link.ekoSave} component={EkoSave} />

          <Route exact path={link.chatBot} component={ChatBox} />


          {/* Inform user */}

          <Route exact path={link.login} component={LoginPage} />
          <Route exact path={link.signup} component={SignUpPage} />
          <Route exact path={link.userPage} component={UserPage} />
          <Route exact path={link.contactDetails} component={ContactDetails} />
          <Route exact path={link.bag} component={Bag} />
          <Route exact path={link.history} component={History} />

          {/* Article */}

          <Route exact path={link.articles} component={Articles} />
          <Route exact path={link.clotheSell} component={ArticleClotheSell} />
          <Route exact path={link.itemSell} component={ArticleSell} />
          <Route exact path={link.likes} component={EnvyList} />

          {/* Payment */}

          <Route exact path={link.paymentComplete} component={PayComplete} />
          <Route exact path={link.payChoice} component={PayChoice} />

          {/* Admin */}

          <Route exact path={link.stocks} component={Stocks} />
          <Route exact path={link.sells} component={Sells} />


          {/* Condition générale */}

          <Route exact path={link.cgu} component={CGU} />
          <Route exact path={link.cgv} component={CGV} />
          <Route exact path={link.cgr} component={CGR} />
          <Route exact path={link.ml} component={ML} />

          {/* Us */}

          <Route exact path={link.aboutUs} component={AboutUs} />
          <Route exact path={link.thxEmail} component={ThxEmail} />
          <Route exact path={link.contact} component={ContactUs} />
          <Route exact path={link.faq} component={FAQ} />
          <Route exact path={link.actus} component={Actus} />

          {/* Error */}

          <Route exact path={link.err404} component={Error404} />

        </Switch>
        <Robot />
        <div></div>
      </div>
      <Footer />
    </Router>
  </>
}

