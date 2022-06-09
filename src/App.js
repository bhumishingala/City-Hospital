import logo from './logo.svg';
import './App.css';
import Header from './compoents/header/Header';
import Footer from './compoents/footer/Footer';
import Home from './containers/home/Home';

function App() {
  return (
    <div>
        <Header />
        <Home />
        <Footer />
    </div>
  );
}

export default App;
