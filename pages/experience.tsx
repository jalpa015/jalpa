import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import Experience from '../components/Experience';

export default function experience() {
    return (
    
        <div className="space-y-14 lg:space-y-24">
            <Head>
                <title>Jalpa Patel | Experience</title>
                <link rel="icon" href="/favion.ico" />
            </Head>

            <main className="max-w-4xl mx-auto mt-16 antialiased">
                <Experience />
            </main>
        </div>
    );
}
