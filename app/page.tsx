"use client";

import { useState, useEffect } from "react";
import App from "./components/Sphere";

export default function Home() {
  const [currentSection, setCurrentSection] = useState("home");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY < window.innerHeight) {
        setCurrentSection("home");
      } else if (scrollY >= window.innerHeight && scrollY < window.innerHeight * 2) {
        setCurrentSection("about");
      } else if (scrollY >= window.innerHeight * 2 && scrollY < window.innerHeight * 3) {
        setCurrentSection("projects");
      } else {
        setCurrentSection("contact");
      }
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <main className="flex overflow-x-hidden relative">
      {/* BACKGROUND IMAGE */}
      <div className="fixed inset-0 z-0">
        <img src="./images/paris.jpg" alt="background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* LEFT SIDE (DESKTOP ONLY) */}
      <div className="hidden md:block fixed h-screen text-white w-1/2 z-10">
        {/* SPHERE AND NAME CONTAINER */}
        <div className="h-full flex items-center justify-center">
          <div className="w-full h-full flex flex-col items-center justify-center gap-8">
            {/* NAME ABOVE GLOBE */}
            <h1
              className="text-4xl text-slate-300"
              style={{ textShadow: "0 0 20px #60a5fa, 0 0 40px #1f508c" }}
            >
              caiden kowalchuk
            </h1>

            {/* SPHERE (DISABLED ON MOBILE) */}
            {!isMobile && (
              <div className="w-full h-2/3">
                <App currentSection={currentSection} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:ml-[50%] md:w-1/2 bg-transparent text-white z-10">
        {/* FLOATING HEADER */}
        <nav
          className="fixed top-6 right-6 w-[calc(100%-3rem)] md:w-[calc(50%-3rem)] bg-black/40 backdrop-blur-md border border-slate-500/30 rounded-2xl z-50 px-10 py-6"
          style={{ boxShadow: "0 0 30px rgba(96, 165, 250, 0.3)" }}
        >
          <div className="flex gap-8 justify-center items-center flex-wrap">
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

            {/* DIVIDER */}
            <div className="hidden md:block w-px h-6 bg-slate-500/30" />

            {/* GITHUB */}
            <a
              href="https://github.com/caidkowal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-300 transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/caidenkowalchuk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-300 transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </nav>

        {/* HOME */}
        <section
          id="home"
          className="min-h-screen p-10 flex flex-col items-center justify-center mt-10"
          style={{ scrollMarginTop: "80px" }}
        >
          {/* name BELOW navbar on mobile */}
          <div className="w-full flex flex-col items-center gap-6 pt-24 md:pt-0">
            {/* MOBILE NAME: centered, directly above the hi block */}
            <h1
              className="md:hidden text-4xl text-slate-300 text-center"
              style={{ textShadow: "0 0 20px #60a5fa, 0 0 40px #1f508c" }}
            >
              caiden kowalchuk
            </h1>

            <div className="p-10">
              <div
                className="bg-black/30 backdrop-blur-md border border-slate-500/30 inline-block px-8 py-4 items-center"
                style={{ boxShadow: "0 0 30px rgba(96, 165, 250, 0.3)" }}
              >
                <h2 className="text-5xl text-center text-orange-300 mb-4">hi!</h2>
                <p className="text-2xl text-gray-300">welcome to my portfolio</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="min-h-screen p-10 flex mt-10" style={{ scrollMarginTop: "80px" }}>
          <div
            className="bg-black/30 backdrop-blur-md p-10 rounded-2xl border border-slate-500/30 w-full"
            style={{ boxShadow: "0 0 30px rgba(96, 165, 250, 0.3)" }}
          >
            <h2 className="text-4xl text-slate-500 mb-10">About me</h2>
            <p className="text-xl text-gray-300 break-words whitespace-normal">
              Im a second-year Computer Science student at the University of Guelph. I have mostly worked with C and Python
              in my coursework, but I'm always up for learning new languages and tools.
              <br /><br /><br /><br /><br /><br />
              I enjoy building cool projects, and challenging myself through code. Outside of tech, I love hiking and
              traveling, whether that's overnight backpacking on the Bruce Trail or exploring overseas. If you ever need a
              buddy for an adventure, im your guy.
              <br /><br />
            </p>
          </div>
        </section>

        <section id="projects" className="min-h-screen p-10 flex mt-10" style={{ scrollMarginTop: "80px" }}>
          <div
            className="bg-black/30 backdrop-blur-md p-10 rounded-2xl border border-slate-500/30 w-full"
            style={{ boxShadow: "0 0 30px rgba(96, 165, 250, 0.3)" }}
          >
            <h2 className="text-4xl text-slate-500 mb-8">Projects</h2>

            <div className="flex flex-col gap-6">
              {/* PROJECT 1 */}
              <div
                className="group cursor-pointer bg-black/30 backdrop-blur-md border border-slate-500/30 rounded-2xl p-6 hover:border-blue-400 hover:bg-black/50 transition-all duration-300"
                style={{ boxShadow: "0 0 15px rgba(96, 165, 250, 0.1)" }}
                onClick={() => window.open("https://github.com/pedro-boudoux/gryph-planner", "_blank")}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl text-slate-400 mb-2 group-hover:text-blue-300 transition-colors">
                      GryphPlanner
                    </h3>
                    <p className="text-gray-300 text-lg">
                      Built at GDSC Hacks 2025. A web app that scans course outlines and extracts academic deadlines, letting users sync directly to Google Calendar via OAuth2. I mostly worked on the frontend development in React, building the UI and integrating it with a Node.js backend REST API that handled file uploads, downloads, and the Google Calendar API.
                    </p>
                  </div>
                  <span className="text-slate-500 text-3xl group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
                <div className="flex flex-wrap gap-3 mt-4">
                  <span className="text-sm px-3 py-1 rounded-full border border-slate-500/40 text-slate-400">React</span>
                  <span className="text-sm px-3 py-1 rounded-full border border-slate-500/40 text-slate-400">Node.js</span>
                </div>
              </div>

              {/* PROJECT 2 */}
              <div
                className="group cursor-pointer bg-black/30 backdrop-blur-md border border-slate-500/30 rounded-2xl p-6 hover:border-blue-400 hover:bg-black/50 transition-all duration-300"
                style={{ boxShadow: "0 0 15px rgba(96, 165, 250, 0.1)" }}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl text-slate-400 mb-2 group-hover:text-blue-300 transition-colors">Portfolio</h3>
                    <p className="text-gray-300 text-lg">
                      This website! I used with Next.js, Tailwind, Three.js and delpoyed it with Vercel.
                    </p>
                  </div>
                  <span className="text-slate-500 text-3xl group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>

                {/* MOBILE: force 2-per-row so 3rd/4th go underneath */}
                <div className="grid grid-cols-2 gap-3 mt-4 md:flex md:flex-wrap">
                  <span className="w-fit text-sm px-3 py-1 rounded-full border border-slate-500/40 text-slate-400">Next.js</span>
                  <span className="w-fit text-sm px-3 py-1 rounded-full border border-slate-500/40 text-slate-400">Three.js</span>
                  <span className="w-fit text-sm px-3 py-1 rounded-full border border-slate-500/40 text-slate-400">Tailwind</span>
                  <span className="w-fit text-sm px-3 py-1 rounded-full border border-slate-500/40 text-slate-400">Vercel</span>
                </div>
              </div>

              {/* PROJECT 3 */}
              <div
                className="group cursor-pointer bg-black/30 backdrop-blur-md border border-slate-500/30 rounded-2xl p-6 hover:border-blue-400 hover:bg-black/50 transition-all duration-300"
                style={{ boxShadow: "0 0 15px rgba(96, 165, 250, 0.1)" }}
                onClick={() => window.open("https://github.com/caidkowal/bmi_calculator", "_blank")}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl text-slate-400 mb-2 group-hover:text-blue-300 transition-colors">BMI Calculator</h3>
                    <p className="text-gray-300 text-lg">
                      Built a Python project that analyzed body measurements, calculated BMI, and used graphs and linear regression to find strong trends in the data.
                    </p>
                  </div>
                  <span className="text-slate-500 text-3xl group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
                <div className="flex flex-wrap gap-3 mt-4">
                  <span className="text-sm px-3 py-1 rounded-full border border-slate-500/40 text-slate-400">Python</span>
                  <span className="text-sm px-3 py-1 rounded-full border border-slate-500/40 text-slate-400">NumPy</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="min-h-screen p-10 flex mt-10" style={{ scrollMarginTop: "80px" }}>
          <div
            className="bg-black/30 backdrop-blur-md p-10 rounded-2xl border border-slate-500/30 w-full"
            style={{ boxShadow: "0 0 30px rgba(96, 165, 250, 0.3)" }}
          >
            <h2 className="text-4xl text-slate-500 mb-8">Contact</h2>

            <form action="https://formspree.io/f/mnjbkgky" method="POST" className="flex flex-col gap-6">
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

              <button
                type="submit"
                className="self-start px-8 py-3 border border-slate-500/30 text-slate-400 hover:text-slate-300 hover:border-slate-400 hover:bg-white/5 backdrop-blur-md transition-all duration-300 rounded-xl"
                style={{ boxShadow: "0 0 15px rgba(96, 165, 250, 0.1)" }}
              >
                send message →
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}