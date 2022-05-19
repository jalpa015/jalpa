import React, { useState } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import resumeFile from '../public/Jalpa_Patel_Resume.pdf' 

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function ResumePDF() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div className="container px-4 mx-auto">
            <div className="font-mono lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
                    <Document file={resumeFile} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page pageNumber={pageNumber} />
                    </Document>

                    {/* <ReactPDF
                        file={{
                            resumeFile
                        }}
                    />
                    <p>
                        Page {pageNumber} of {numPages}
                    </p> */}

                    {/* <embed
                        src={resumeFile}
                        type="application/pdf"
                        height={800}
                        width={500}
                    /> */}
                </div>
            </div>
        </div>
    );
  }
