import { useState } from "react";
import axios from "axios";
import DropZone from "./DropZone";
import SuggestionsBox from "./components/SuggestionsBox";

function App() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const uploadFile = async () => {
    if (!file) return;
    setLoading(true);
    setError("");
    setResult(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(
        "http://localhost:8080/api/extract",  // 🔥 Backend URL
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      setResult(res.data);

    } catch (err) {
      setError(err?.response?.data?.error || "Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <h2>📄 Social Media Content Analyzer</h2>
      <p>Upload a PDF or Image → extract text → get instant improvement suggestions</p>

      <DropZone onFileSelect={setFile} />

      {file && <p><b>Selected File:</b> {file.name}</p>}

      <button 
        className="btn" 
        disabled={!file || loading} 
        onClick={uploadFile}
      >
        {loading ? "Extracting..." : "Extract Now"}
      </button>

      {error && <p className="error">{error}</p>}

      {result && (
        <>
          <h3>Extracted Text</h3>
          <pre>{result.text}</pre>

          <SuggestionsBox suggestions={result.suggestions} />

          <button 
            className="btn" 
            onClick={() => navigator.clipboard.writeText(result.text)}
          >
            Copy Extracted Text
          </button>
        </>
      )}
    </div>
  );
}

export default App;
