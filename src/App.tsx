import React from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Classes from './components/Classes';
import Schedule from './components/Schedule';
import Membership from './components/Membership';
import Contact from './components/Contact';
import Trainers from './components/Trainers';
import Testimonials from './components/Testimonials';
import Success from './components/Success';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Toaster position="top-center" />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Classes />
      <Schedule />
      <Membership />
      <Trainers />
      <Testimonials />
      <Success />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;