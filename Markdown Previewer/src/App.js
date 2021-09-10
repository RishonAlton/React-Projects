import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import placeholder from "./placeholder";
import { FaExpand, FaCompress } from "react-icons/fa";


const App = () => {

  const [markdown, setMarkdown] = useState(placeholder);
  const [editorFullScreen, setEditorFullScreen] = useState(false);
  const [previewerFullScreen, setPreviewerFullScreen] = useState(false);

  return (
    <main>
      <section
        className={"editor-section"}
        style={previewerFullScreen ? { display: "none" } : { display: "block" }}
      >
        <header>
          Editor
          {editorFullScreen ? (
            <FaCompress
              className="icon"
              onClick={() => setEditorFullScreen(!editorFullScreen)}
            />
          ) : (
            <FaExpand
              className="icon"
              onClick={() => setEditorFullScreen(!editorFullScreen)}
            />
          )}
        </header>
        <textarea
          id="editor"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          className={editorFullScreen ? "full-screen" : "non-full-screen"}
        />
      </section>
      <section
        className="previewer-section"
        style={editorFullScreen ? { display: "none" } : { display: "block" }}
      >
        <header>
          Previewer
          {previewerFullScreen ? (
            <FaCompress
              className="icon"
              onClick={() => setPreviewerFullScreen(!previewerFullScreen)}
            />
          ) : (
            <FaExpand
              className="icon"
              onClick={() => setPreviewerFullScreen(!previewerFullScreen)}
            />
          )}
        </header>
        <article
          id="preview"
          className={previewerFullScreen ? "full-screen" : "non-full-screen"}
        >
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
  
};


export default App;


