import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Service from './pages/Service';
import Contact  from './pages/Contact';
import Notfound from './pages/Notfound';
import Login  from './pages/Login';
import Register from './pages/Register';



const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/About"} element={<About />} />
        <Route path={"/Service"} element={<Service />} />
        <Route path={"/Contact"} element={<Contact />} />
        <Route path={"/Login"} element={<Login />} />
        <Route path={"/Register"} element={<Register />} />
        <Route path={"/Register"} element={<Login />} />
        <Route path={"/Login"} element={<Register />} />
        <Route path={"*"} element={<Notfound />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
