import React, { useEffect, useRef, useState } from "react";
import * as PDFJS from "pdfjs-dist/build/pdf";
PDFJS.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS.version}/pdf.worker.min.js`;

const Resume = () => {
  let renderedPdf;
  const pageRenderRef = useRef(null);
  const DEFAULT_SCALE = 1;
  const [progressTxt, setprogressTxt] = useState("");

  useEffect(() => {
    console.log("load PDF");
    getPDFData();
  });

  const getPDFData = async () => {
    // can be web URL
    const url = "/Jalpa_Patel_Resume.pdf";
    downloadPDFFromURL(url);
  };

  const downloadPDFFromURL = (url) => {
    const xhrObj = new XMLHttpRequest();
    xhrObj.open("GET", url, true);
    xhrObj.responseType = "blob";

    xhrObj.addEventListener("loadstart", loadStartFunction, false);
    xhrObj.addEventListener("progress", progressFunction, false);
    xhrObj.addEventListener("error", downloadError, false);
    xhrObj.addEventListener("timeout", downloadTimeout, false);
    xhrObj.addEventListener("abort", downloadAbort, false);

    xhrObj.onreadystatechange = async (event) => {
      try {
        if (xhrObj && xhrObj.status === 400) {
          console.log("download error");
        } else {
          if (xhrObj && xhrObj.readyState === XMLHttpRequest.DONE) {
            console.log("download complete");
            const pdfData = await convertBlobToBase64(xhrObj.response);
            loadPDFWithBlob(pdfData);
          }
        }
      } catch (error) {
        console.error("File upload exception: ", error);
      }
    };

    xhrObj.send(null);
  };

  const loadStartFunction = (event) => {
    console.log("File download started");
  };

  const progressFunction = async (event) => {
    if (event.lengthComputable) {
      const progress = Math.round((event.loaded / event.total) * 100) + "%";
      setprogressTxt(progress);
    }
  };

  const downloadError = () => {
    console.log("Network Error!");
  };

  const downloadTimeout = () => {
    console.log("Network Timeout!");
  };

  const downloadAbort = () => {
    console.log("Upload Aborted!");
  };

  const loadPDFWithBlob = (pdfData) => {
    const encodedPDF = pdfData;
    const encodedData = encodedPDF.split(",");
    if (encodedData[1] !== undefined) {
      const pdfbase64 = atob(encodedData[1]);
      showPDFInCanvas(pdfbase64);
    }
  };

  const showPDFInCanvas = async (pdfData) => {
    const loadingTask = PDFJS.getDocument({ data: pdfData });
    loadingTask.promise.then(
      (pdf) => {
        renderedPdf = pdf;
        const container = pageRenderRef.current;
        const pageNo = 0;
        fetchPageNo(pageNo, renderedPdf, container);
      },
      (error) => {
        console.log("PDF error");
      }
    );
  };

  const fetchPageNo = (pageNo, pdf, container) => {
    if (pageNo < pdf._pdfInfo.numPages) {
      pageNo += 1;
      createContextForCanvas(pdf, container, pageNo).then((page) => {
        fetchPageNo(page + 1, pdf, container);
      });
    }
  };

  const createContextForCanvas = (pdf, container, pageNo) => {
    return new Promise((resolve) => {
      pdf.getPage(pageNo).then(async (page) => {
        const viewport = page.getViewport({ scale: DEFAULT_SCALE });

        let canvasInHTML = {
          canvas: undefined,
          ctx: undefined
        };

        const li = document.createElement("div");
        li.setAttribute("id", "page-" + (page._pageIndex + 1));
        li.setAttribute("style", "position: relative;");

        canvasInHTML.canvas = document.createElement("canvas");
        canvasInHTML.ctx = canvasInHTML.canvas.getContext("2d");
        canvasInHTML.canvas.height = viewport.height;
        canvasInHTML.canvas.width = viewport.width;

        li.appendChild(canvasInHTML.canvas);
        container.appendChild(li);

        const renderContext = {
          canvasContext: canvasInHTML.ctx,
          viewport
        };

        let renderTask = page.render(renderContext);

        renderTask.promise.then(() => {
          if (pageNo !== null) {
            resolve(pageNo);
          }
        });

        if (pageRenderRef.current) {
          pageRenderRef.current = li;
        }
      });
    });
  };

  const convertBlobToBase64 = (data) => {
    return new Promise((resolve, reject) => {
      let fileReader = new FileReader();
      data = new Blob([data], { type: "application/pdf" });
      fileReader.onload = (evt) => {
        const result = fileReader.result;
        try {
          fileReader = null; // clear file reader
          resolve(result);
        } catch (e) {
          fileReader = null; // clear file reader
          reject(e);
        }
      };
      fileReader.readAsDataURL(data);
    });
  };

  return (
    <div div className="container px-4 mx-auto item-center">
      
      <p>Loading: {progressTxt}</p>
      <div ref={pageRenderRef}></div>
    </div>
  );
};

export default Resume;
