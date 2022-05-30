import Head from 'next/head'
import About from "../components/About";

export default function Home() {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Jalpa&apos;s Portfolio</title>
        <link rel="icon" href="/favion.ico" />
      </Head>

      <main className="max-w-7xl mx-auto mt-16 antialiased">
        <About/>
      </main>
    </div>
  )
}