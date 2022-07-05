import logo from './logo.svg';
import './App.css';
import Header from './compoents/header/Header';
import Footer from './compoents/footer/Footer';
import Home from './containers/home/Home';
import { Route, Switch } from 'react-router-dom';
import Department from './containers/department/Department';
import Doctor from './containers/doctors/Doctor';
import Aboutus from './containers/about us/Aboutus';
import Contact from './containers/contact/Contact';
import Auth from './containers/auth/Auth';
import Medicines from './containers/medicines/Medicines';
import Refexample from './containers/refexample/Refexample';
import Apponiment from './containers/appoinment/Bookappo';
import Bookappo from './containers/appoinment/Bookappo';
import Listappo from './containers/appoinment/Listappo';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path={"/"} exact component={Home}></Route>
        <Route path={"/department"} exact component={Department}></Route>
        <Route path={"/doctors"} exact component={Doctor}></Route>
        <Route path={"/aboutus"} exact component={Aboutus}></Route>
        <Route path={"/contact"} exact component={Contact}></Route>
        <Route path={"/Auth"} exact component={Auth}></Route>
        <Route path={"/medicines"} exact component={Medicines} ></Route>
        <Route path={"/refexample"} exact component={Refexample}></Route>
        <Route path={"/appoinment"} exact component={Apponiment}></Route>
        <Route path={"/Book_apt"} exact component={Bookappo}></Route>
        <Route path={"/list_apt"} exact component={Listappo}></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;