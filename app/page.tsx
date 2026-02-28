import App from "./components/Sphere";
import Link from 'next/link'

export default function Home() {
  return (
    <main className="h-screen bg-black text-white relative">

      <Link href="/about" className="absolute top-50 right-50 text-white hover:text-blue-400 z-10 text-2xl">
        about
      </Link>

      <Link href="/about" className="absolute top-60 right-50 text-white hover:text-blue-400 z-10 text-2xl">
        projects
      </Link>

      {/* NAME AT TOP */}
      <h1 className="absolute top-10 w-full text-center text-3xl text-blue-600" 
        style={{ textShadow: '0 0 20px #60a5fa, 0 0 40px #1f508c' }}>
        caiden kowalchuk
      </h1>

      {/* SPHERE PERFECT CENTER */}
      <div className="h-full flex items-center justify-center">
        <App />
      </div>

    </main>
  );
}