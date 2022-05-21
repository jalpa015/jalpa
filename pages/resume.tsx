import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import dynamic from 'next/dynamic';
const Viewer = dynamic(() => import('../components/Viewer'), { ssr: false });

export default function PDF() {

  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Jalpa Patel | Resume</title>
        <link rel="icon" href="/favion.ico" />
      </Head>

      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <Viewer />
      </main>
    </div>
  );
}