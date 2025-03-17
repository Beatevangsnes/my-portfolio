import React from 'react';
import { Navbar, Hero, Technologies, Experience, Projects, Hobby, Contact } from './components/index';

const App = () => {
  return (
    <div className="overflow-x-hidden text-custom_black antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-custom_beige"></div>
      </div>
      
      <div className="container mx-auto px-8 pb-8">
        <Navbar />
      </div>
      <div className="h-screen overflow-y-auto snap-y snap-mandatory">
        <section id="home" className="snap-always snap-start h-screen flex flex-col justify-center container mx-auto px-8 pt-20">
        <Hero />
        </section>
        <section id="projects" className="snap-always snap-start min-h-screen pb-20 flex flex-col justify-center container mx-auto px-8">
          <Projects />
        </section>
        <section id="stack" className="snap-always snap-start min-h-screen flex flex-col justify-center container mx-auto px-8">
          <Technologies />
        </section>
        <section id="education" className="snap-always snap-start min-h-screen flex flex-col justify-center container mx-auto px-8">
          <Experience />
        </section>
        <section id="hobby" className="snap-always snap-start h-screen flex flex-col justify-center container mx-auto px-8">
          <Hobby />
        </section>
        <section id="contact" className="snap-always snap-start h-screen flex flex-col justify-center container mx-auto px-8">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default App;

