import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import Skills from '../components/Skills';

export default function experience() {
  return (
    <div className="space-y-14 lg:space-y-24">
        <Head>
            <title>Jalpa Patel | Skills</title>
            <link rel="icon" href="/favion.ico" />
        </Head>

        <main className="max-w-7xl mx-auto mt-16 antialiased">
            <Skills />
        </main>
    </div>
  );
}
