import './App.css';
import Header from './layout/Header';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Signup from './pages/Signup'
import Home from './pages/Home';
import Footer from './layout/Footer';
import "bootstrap/dist/css/bootstrap.min.css"
import Login from './pages/Login';
import ViewPG from './pages/ViewPG'
import UploadPG from './pages/UploadPG'

function App() {
  return (
    <>
      <div className="App container-fluid p-0 m-0">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path ='/viewproperty' element ={<ViewPG />} />
          <Route path='/postproperty' element={<UploadPG />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
