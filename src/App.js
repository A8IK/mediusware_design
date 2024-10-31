import React from 'react';
import Home from './components/Home';
import About from './components/About';
import HomeWork from './components/HomeWork';
import Services from './components/Services';
import Testimonial from './components/Testiomonial';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Subscription from './components/Subscription';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Home/>
      <Services/>
      <About/>
      <HomeWork/>
      <Testimonial/>
      <Projects/>
      <Achievements />
      <Subscription/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;



