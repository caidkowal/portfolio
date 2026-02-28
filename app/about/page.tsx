import Link from 'next/link'

<Link href="/about">About</Link>


export default function About() {
  return (
    <main className="h-screen bg-black text-white flex items-center justify-center">
      <div>
        <h1>about me</h1>
        <p>your text here</p>
      </div>
    </main>
  )
}