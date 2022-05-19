import 'tailwindcss/tailwind.css';
import { useEffect, useRef } from 'react';
import { ThemeProvider } from 'next-themes'
import PDFViewer from "../components/Resume";
import PDFViewe from "../components/ResumePDF";
// import WebViewer from '@pdftron/webviewer';
import dynamic from 'next/dynamic'
// import Viewer from "../components/Viewer";
const Viewer = dynamic(() => import('../components/Viewer'), {ssr: false});
export default function PDF() {

  return (
   
      
      <ThemeProvider attribute="class" enableSystem={false}>
      {/* <div className='webviewer' ref={viewer} style={{ height: '100vh' }}></div> */}
        {/* <ThemeSwitch />  */}
        <Viewer />
        </ThemeProvider>
    
    
  );
}