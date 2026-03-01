"use client";

import { useState, useEffect } from 'react';
import App from "./components/Sphere";
import Link from 'next/link'

export default function Home() {

  const [currentSection, setCurrentSection] = useState('home');

  // Scroll listener to detect which section is visible
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Get section positions (adjust these values based on your layout)
      if (scrollY < window.innerHeight) {
        setCurrentSection('home');
      } else if (scrollY >= window.innerHeight && scrollY < window.innerHeight * 2) {
        setCurrentSection('about');
      } else if (scrollY >= window.innerHeight * 2 && scrollY < window.innerHeight * 3) {
        setCurrentSection('projects');
      } else {
        setCurrentSection('contact');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (

    <main className="flex">

      {/* LEFT SIDE */}
      <div className="fixed h-screen bg-black text-white w-1/2">
        {/* SPHERE AND NAME CONTAINER */}
        <div className="h-full flex items-center justify-center">
          <div className="w-full h-full flex flex-col items-center justify-center gap-8">
            {/* NAME ABOVE GLOBE */}
            <h1 className="text-4xl text-blue-600" 
              style={{ textShadow: '0 0 20px #60a5fa, 0 0 40px #1f508c' }}>
              caiden kowalchuk
            </h1>
            
            {/* SPHERE - PASS THE PROP HERE */}
            <div className="w-full h-2/3">
              <App currentSection={currentSection} />
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="ml-[50%] w-1/2 bg-transparent text-white">

        <section id="home" className="min-h-screen p-10 flex flex-col justify-center mt-30">
          <div className="p-10">
            <div className="border border-blue-500/30 rounded-2xl inline-block px-8 py-4"
                style={{ boxShadow: '0 0 30px rgba(96, 165, 250, 0.3)' }}>
              <h2 className="text-9xl text-blue-600 mb-4">hi!</h2>
              <p className="text-4xl text-gray-300">welcome to my portfolio</p>
            </div>
          </div>
        </section>

        <section id="about" className="min-h-screen p-10 flex  mt-30">
          <div className="bg-black/50 p-10 rounded-2xl border border-blue-500/30 backdrop-blur-sm min-w-3xl"
              style={{ boxShadow: '0 0 30px rgba(96, 165, 250, 0.3)' }}>
            <h2 className="text-6xl text-blue-600 mb-4">About me</h2>
            <p className="text-3xl text-gray-300"> I'm a second-year Computer Science student at the University of Guelph.
              <br />
              <br />
              I am passionate about having an idea in the noggin and be able to make something tangle from it, progamming is just one of the ways
              i can do that
              <br />
              <br />
              I love adventuring, whether thats backpacking the bruce crest trail for a night or two or travelling overseas, i just cant
              help but love being put in a tricky situiation and making the best out of it

            </p>
          </div>
        </section>

        <section id="projects" className="min-h-screen p-10 flex  mt-30">
          <div className="bg-black/50 p-10 rounded-2xl border border-blue-500/30 backdrop-blur-sm min-w-3xl"
              style={{ boxShadow: '0 0 30px rgba(96, 165, 250, 0.3)' }}>
            <h2 className="text-6xl text-blue-600 mb-4">Projects</h2>
            <p className="text-3xl text-gray-300">...</p>
          </div>
        </section>

        <section id="contact" className="min-h-screen p-10 flex  mt-30">
          <div className="bg-black/50 p-10 rounded-2xl border border-blue-500/30 backdrop-blur-sm min-w-3xl"
              style={{ boxShadow: '0 0 30px rgba(96, 165, 250, 0.3)' }}>
            <h2 className="text-6xl text-blue-600 mb-4">Contact</h2>
            <p className="text-3xl text-gray-300">...</p>
          </div>
        </section>

      </div>

    </main>
  );
}