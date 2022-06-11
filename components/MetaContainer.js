import React from "react";
import Head from "next/head";
import {useRouter} from "next/router";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function MetaContainer({children, ...customMeta}) {
    const router = useRouter();

    const meta = {
        title: "Jalpa Deepak Patel",
        description: `I am a Software Developer and Researcher. Get in touch with me to know more.`,
        image: "/public/profile.png",
        type: "website",
        date: new Date().toDateString(),
        ...customMeta,
    };
    return (
        <div>
            <Head>
                <title>{meta.title}</title>
                <meta name="robots" content="follow, index"/>
                <meta content={meta.description} name="description"/>
                <meta
                    property="og:url"
                    content={`https://jalpa.me${router.asPath}`}
                />
                <link
                    rel="canonical"
                    href={`https://jalpa.me${router.asPath}`}
                />
                <meta property="og:type" content={meta.type}/>
                <meta property="og:site_name" content="Jalpa Patel"/>
                <meta property="og:description" content={meta.description}/>
                <meta property="og:title" content={meta.title}/>
                <meta property="og:image" content={meta.image}/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@jalpa_015"/>
                <meta name="twitter:title" content={meta.title}/>
                <meta name="twitter:description" content={meta.description}/>
                <meta name="twitter:image" content={meta.image}/>
                {meta.date && (
                    <meta property="article:published_time" content={meta.date}/>
                )}
            </Head>
            <main className="w-full">
                <Navigation/>
                <div>{children}</div>
                <Footer/>
            </main>
        </div>
    );
}