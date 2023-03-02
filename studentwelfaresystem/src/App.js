import './App.css';
import Header from './layouts/Header'
import {Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Signup from './pages/Signup'
import Home from './pages/Home';
import Login from './pages/Login'
import Footer from './layouts/Footer';

function App() {
  return (
    <>
    <div className="App">
    <Header/>
     <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about'  element={<About/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login'  element={<Login/>} />
      </Routes>
      <Footer/>
       </div>
    </>
  );
}

export default App;
