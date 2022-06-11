import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import Projects from '../components/Projects';

export default function projects() {
  return (
    <div className="space-y-14 lg:space-y-24">
        <Head>
            <title>Jalpa Patel | Projects</title>
            <link rel="icon" href="/favion.ico" />
        </Head>

        <main className="max-w-4xl mx-auto antialiased">
            <Projects />
        </main>
    </div>
  );
}
