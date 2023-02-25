import './App.css';
import Header from './layouts/Header'
// import Footer from './layouts/Footer';
import { BrowserRouter as Router, Switch, Route, Redirect, } from 'react-router-dom';
import About from './pages/About';
import Signup from './pages/Signup'
import login from './pages/login';
import Home from './pages/Home';

function App() {
  return (
    <>
      <div className="App">
       <Router>
          <Header />
          <Switch>
            <Route Exact path='/' component={Home}/>
            <Route path='/about'  component={About}/>
            <Route path='/signup' component={Signup}/>
            <Route path='/login' component={login}/>
            <Redirect to="/" />
        </Switch>
        </Router>
       </div>
    </>
  );
}

export default App;
