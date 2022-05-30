import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <ThemeProvider attribute="class" enableSystem={true}>
      <Navigation/>
      {/* <ThemeSwitch />  */}
      <Component {...pageProps} />
      <Footer/>
      </ThemeProvider>
    </>
  )
}

export default MyApp
