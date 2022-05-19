import React, { useRef, useEffect } from "react";
import WebViewer from "@pdftron/webviewer";

const Viewer = (props) => {
  const viewer = useRef(null);

  useEffect(() => {       
    WebViewer({
      path: '/webviewer/lib',
      initialDoc: '/files/Jalpa_Patel_Resume.pdf'
    }, viewer.current);
  }, []);

  return (
    <div className="Viewer container px-4 mx-auto max-h-full">
      <div className="webviewer" ref={viewer} style={{height: "100vh"}}></div>
    </div>
  );
};

export default Viewer;