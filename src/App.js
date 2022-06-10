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
        </Switch>
        
        <Footer />
    </div>
  );
}

export default App;
