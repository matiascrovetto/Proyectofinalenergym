import React from 'react'
import About from './About';
import Service from './Service';
import Whychoose from '../components/Whychoose';
import Carrusel1 from '../components/Carrusel1';
import Carr2 from '../components/Carr2';
import Info1 from '../components/Info1';
import Contact from './Contact';



export const Home = () => {
  return (

    <div>

      <Carrusel1 />
      <About />
      <Service />
      <Whychoose />
      <Carr2 />
      <Info1 />
      <Contact />



      
      
    </div>
  );
};

export default Home;