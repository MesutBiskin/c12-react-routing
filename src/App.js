import { BrowserRouter, Routes, Route } from'react-router-dom';


import Home from './pages/Home';
import Contact from './pages/Contact';
import Signup from './pages/Signup';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './pages/Login';

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='*' element={<h2> Wrong path 4040</h2>} />
    </Routes>
    <Footer />
    </BrowserRouter>
    
  )
}

export default App;
