import React from 'react';
import { Navbar, Hero, Technologies, Experience, Projects, Contact } from './components/index';

const App = () => {
  return (
    <div className="overflow-x-hidden text-custom_black antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-custom_beige"></div>
      </div>
      
      <div className="container mx-auto px-8">
        <Navbar />
      </div>

      <div className="h-screen overflow-y-auto snap-y snap-mandatory">
  <section className="snap-always snap-start h-screen flex flex-col justify-center container mx-auto px-8">
    <Hero />
  </section>
  <section className="snap-always snap-start min-h-screen pb-20 flex flex-col justify-center container mx-auto px-8">
    <Projects />
  </section>
  <section className="snap-always snap-start min-h-screen flex flex-col justify-center container mx-auto px-8">
    <Technologies />
  </section>
  <section className="snap-always snap-start min-h-screen flex flex-col justify-center container mx-auto px-8">
    <Experience />
  </section>
  <section className="snap-always snap-start h-screen flex flex-col justify-center container mx-auto px-8">
    <Contact />
  </section>
</div>

    
    </div>
  );
};

export default App;
