
import './App.scss';
import  {Switch, Route} from 'react-router-dom'
import About from './pages/About/About';
import Home from './pages/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div >
      
      <NavBar/>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route path='/about'>
        <About/>
      </Route>
      <Footer/>
    </div>
  );
}

export default App;
