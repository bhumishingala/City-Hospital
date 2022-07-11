import logo from './logo.svg';
import './App.css';
import Header from './compoents/header/Header';
import Footer from './compoents/footer/Footer';
import Home from './containers/home/Home';
import Department from './containers/department/Department';
import Doctor from './containers/doctors/Doctor';
import Aboutus from './containers/about us/Aboutus';
import Contact from './containers/contact/Contact';
import Medicines from './containers/medicines/Medicines';
import Refexample from './containers/refexample/Refexample';
import Apponiment from './containers/appoinment/Bookappo';
import Bookappo from './containers/appoinment/Bookappo';
import Listappo from './containers/appoinment/Listappo';
import { Route, Switch } from 'react-router-dom';
import Login from './containers/login/Login';
import PubilcRoute from './Route/PubilcRoute';
import PrivateRoute from './Route/PrivateRoute';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <PubilcRoute path={"/"} exact component={Home}></PubilcRoute>
        <PubilcRoute path={"/department"} exact component={Department}></PubilcRoute>
        <PubilcRoute path={"/doctors"} exact component={Doctor}></PubilcRoute>
        <PubilcRoute path={"/aboutus"} exact component={Aboutus}></PubilcRoute>
        <PubilcRoute path={"/contact"} exact component={Contact}></PubilcRoute>
        <PubilcRoute  restricted={true} path={"/Login"} exact component={Login}></PubilcRoute>
        <Route path={"/medicines"} exact component={Medicines} ></Route>
        <Route path={"/refexample"} exact component={Refexample}></Route>
        <PrivateRoute path={"/Book_apt"} exact component={Bookappo}></PrivateRoute>
        <PrivateRoute path={"/list_apt"} exact component={Listappo}></PrivateRoute>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;