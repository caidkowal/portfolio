"use client";

import { useState, useEffect } from 'react';
import App from "./components/Sphere";

export default function Home() {


  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
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

    <main className="flex overflow-x-hidden relative">

      {/* BACKGROUND IMAGE */}
      <div className="fixed inset-0 z-0">
        <img 
          src="./images/paris.jpg" 
          alt="background" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay so text stays readable */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* LEFT SIDE */}
      <div className="fixed h-screen text-white w-1/2 z-10">
        {/* SPHERE AND NAME CONTAINER */}
        <div className="h-full flex items-center justify-center">
          <div className="w-full h-full flex flex-col items-center justify-center gap-8">
            {/* NAME ABOVE GLOBE */}
            <h1 className="text-4xl text-slate-300" 
              style={{ textShadow: '0 0 20px #60a5fa, 0 0 40px #1f508c' }}>
              caiden kowalchuk
            </h1>
            
            {/* SPHERE */}
            <div className="w-full h-2/3">
              <App currentSection={currentSection} />
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="ml-[50%] w-1/2 bg-transparent text-white z-10">

        {/* FLOATING HEADER */}
        <nav className="fixed top-6 right-6 w-[calc(50%-3rem)] bg-black/40 backdrop-blur-md border border-slate-500/30 rounded-2xl z-50 px-10 py-6"
            style={{ boxShadow: '0 0 30px rgba(96, 165, 250, 0.3)' }}>
          <div className="flex gap-8 justify-center">
            <a href="#home" className="text-xl text-slate-500 hover:text-slate-400 transition-colors">
              Home
            </a>
            <a href="#about" className="text-xl text-slate-500 hover:text-slate-400 transition-colors">
              About
            </a>
            <a href="#projects" className="text-xl text-slate-500 hover:text-slate-400 transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-xl text-slate-500 hover:text-slate-400 transition-colors">
              Contact
            </a>
          </div>
        </nav>

        <section id="home" className="min-h-screen p-10 flex flex-col items-center justify-center mt-10" style={{ scrollMarginTop: '80px' }}>
          <div className="p-10">
            <div className="bg-black/30 backdrop-blur-md border border-slate-500/30  inline-block px-8 py-4  items-center"
                style={{ boxShadow: '0 0 30px rgba(96, 165, 250, 0.3)' }}>
              <h2 className="text-5xl text-center text-orange-300 mb-4">hi!</h2>
              <p className="text-2xl text-gray-300">welcome to my portfolio</p>
            </div>
          </div>
        </section>

        <section id="about" className="min-h-screen p-10 flex mt-10" style={{ scrollMarginTop: '80px' }}>
          <div className="bg-black/30 backdrop-blur-md p-10 rounded-2xl border border-slate-500/30 w-full"
              style={{ boxShadow: '0 0 30px rgba(96, 165, 250, 0.3)' }}>
            <h2 className="text-4xl text-slate-500 mb-10">About me</h2>
            <p className="text-xl text-gray-300 break-words whitespace-normal">
              Im a second-year Computer Science student at the University of Guelph. I have mostly worked with C and Python in my coursework, but I'm always up for learning new languages and tools.
              <br /><br />
              I enjoy building cool projects, and challenging myself through code. Outside of tech, I love hiking and traveling,
              whether that's overnight backpacking on the Bruce Trail or exploring overseas. If you ever need a buddy for an adventure, im your guy. 
              <br /><br />
              <br /><br />
              Thanks for checking out my page!
              <br /><br />


            </p>
          </div>
        </section>

      <section id="projects" className="min-h-screen p-10 flex mt-10" style={{ scrollMarginTop: '80px' }}>
        <div className="bg-black/30 backdrop-blur-md p-10 rounded-2xl border border-slate-500/30 w-full"
            style={{ boxShadow: '0 0 30px rgba(96, 165, 250, 0.3)' }}>
          <h2 className="text-4xl text-slate-500 mb-8">Projects</h2>

          <div className="flex flex-col gap-6">

            {/* PROJECT 1 */}
            <div className="group cursor-pointer bg-black/30 backdrop-blur-md border border-slate-500/30 rounded-2xl p-6 hover:border-blue-400 hover:bg-black/50 transition-all duration-300"
                style={{ boxShadow: '0 0 15px rgba(96, 165, 250, 0.1)' }}
                onClick={() => window.open('https://github.com/pedro-boudoux/gryph-planner', '_blank')}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl text-slate-400 mb-2 group-hover:text-blue-400 transition-colors">GryphPlanner</h3>
                  <p className="text-gray-300 text-lg"> Built at GDSC Hacks 2025. A web app that scans course outlines and extracts academic deadlines, letting users sync directly to Google Calendar via OAuth2. I mostly worked on the frontend development in React, building the UI and integrating 
                    it with a Node.js backend REST API that handled file uploads, downloads, and the Google Calendar API.</p>
                </div>
                <span className="text-slate-500 text-3xl group-hover:translate-x-2 transition-transform duration-300">→</span>
              </div>
              <div className="flex gap-3 mt-4">
                <span className="text-sm px-3 py-1 rounded-full border border-slate-500/40 text-slate-400">React</span>
                <span className="text-sm px-3 py-1 rounded-full border border-slate-500/40 text-slate-400">Node.js</span>
              </div>
            </div>

            {/* PROJECT 2 */}
            <div className="group cursor-pointer bg-black/30 backdrop-blur-md border border-slate-500/30 rounded-2xl p-6 hover:border-blue-400 hover:bg-black/50 transition-all duration-300"
                style={{ boxShadow: '0 0 15px rgba(96, 165, 250, 0.1)' }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl text-slate-400 mb-2 group-hover:text-blue-300 transition-colors">Portfolio</h3>
                  <p className="text-gray-300 text-lg">This website! I experimented with Next.js, Tailwind, Three.js (hence the spinning globe) and delpoyed it
                    with Vercel.
                  </p>
                </div>
                <span className="text-slate-500 text-3xl group-hover:translate-x-2 transition-transform duration-300">→</span>
              </div>
              <div className="flex gap-3 mt-4">
                <span className="text-sm px-3 py-1 rounded-full border border-slate-500/40 text-slate-400">Next.js</span>
                <span className="text-sm px-3 py-1 rounded-full border border-slate-500/40 text-slate-400">Three.js</span>
                <span className="text-sm px-3 py-1 rounded-full border border-slate-500/40 text-slate-400">Tailwind</span>
                <span className="text-sm px-3 py-1 rounded-full border border-slate-500/40 text-slate-400">Vercel</span>
              </div>
            </div>


            {/* PROJECT 3 */}
            <div className="group cursor-pointer bg-black/30 backdrop-blur-md border border-slate-500/30 rounded-2xl p-6 hover:border-blue-400 hover:bg-black/50 transition-all duration-300"
                style={{ boxShadow: '0 0 15px rgba(96, 165, 250, 0.1)' }}
                onClick={() => window.open('https://github.com/caidkowal/bmi_calculator', '_blank')}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl text-slate-400 mb-2 group-hover:text-blue-400 transition-colors">BMI Calculator</h3>
                  <p className="text-gray-300 text-lg">Built a Python project that analyzed body measurements, calculated BMI, and used graphs and linear regression to find strong trends in the data.</p>
                </div>
                <span className="text-slate-500 text-3xl group-hover:translate-x-2 transition-transform duration-300">→</span>
              </div>
              <div className="flex gap-3 mt-4">
                <span className="text-sm px-3 py-1 rounded-full border border-slate-500/40 text-slate-400">Python</span>
                <span className="text-sm px-3 py-1 rounded-full border border-slate-500/40 text-slate-400">NumPy</span>
              </div>
            </div>


          </div>
        </div>
      </section>

<section id="contact" className="min-h-screen p-10 flex mt-10" style={{ scrollMarginTop: '80px' }}>
  <div className="bg-black/30 backdrop-blur-md p-10 rounded-2xl border border-slate-500/30 w-full"
      style={{ boxShadow: '0 0 30px rgba(96, 165, 250, 0.3)' }}>
    <h2 className="text-4xl text-slate-500 mb-8">Contact</h2>

    <form action="https://formspree.io/f/mnjbkgky" method="POST" className="flex flex-col gap-6">
      
      {/* NAME */}
      <div className="flex flex-col gap-2">
        <label className="text-slate-400 text-lg">Name</label>
        <input
          type="text"
          name="name"
          required
          placeholder="your name"
          className="bg-black/30 backdrop-blur-md border border-slate-500/30 text-gray-300 placeholder-gray-600 px-5 py-3 rounded-xl outline-none focus:border-slate-400 transition-colors duration-300"
        />
      </div>

      {/* EMAIL */}
      <div className="flex flex-col gap-2">
        <label className="text-slate-400 text-lg">Email</label>
        <input
          type="email"
          name="email"
          required
          placeholder="your@email.com"
          className="bg-black/30 backdrop-blur-md border border-slate-500/30 text-gray-300 placeholder-gray-600 px-5 py-3 rounded-xl outline-none focus:border-slate-400 transition-colors duration-300"
        />
      </div>

      {/* MESSAGE */}
      <div className="flex flex-col gap-2">
        <label className="text-slate-400 text-lg">Message</label>
        <textarea
          name="message"
          required
          placeholder="..."
          rows={6}
          className="bg-black/30 backdrop-blur-md border border-slate-500/30 text-gray-300 placeholder-gray-600 px-5 py-3 rounded-xl outline-none focus:border-slate-400 transition-colors duration-300 resize-none"
        />
      </div>

      {/* SUBMIT */}
      <button
        type="submit"
        className="self-start px-8 py-3 border border-slate-500/30 text-slate-400 hover:text-slate-300 hover:border-slate-400 hover:bg-white/5 backdrop-blur-md transition-all duration-300 rounded-xl"
        style={{ boxShadow: '0 0 15px rgba(96, 165, 250, 0.1)' }}>
        send message →
      </button>

    </form>
  </div>
</section>

      </div>

    </main>
  );
}