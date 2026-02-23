import Sphere from "./components/Sphere";

export default function Home() {
  return (
    <main className="h-screen bg-black text-white relative">

      {/* NAME AT TOP */}
      <h1 className="absolute top-10 w-full text-center text-3xl ">
        caiden kowalchuk
      </h1>

      {/* SPHERE PERFECT CENTER */}
      <div className="h-full flex items-center justify-center">
        <Sphere />
      </div>

    </main>
  );
}