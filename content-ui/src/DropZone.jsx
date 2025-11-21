import { useState } from "react";

export default function DropZone({ onFileSelect }) {
  const [dragging, setDragging] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files.length > 0) {
      onFileSelect(e.dataTransfer.files[0]);
    }
  };

  return (
    <div
      onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
      style={{
        border: dragging ? "2px dashed #007bff" : "2px dashed #bbb",
        padding: 35,
        borderRadius: 10,
        textAlign: "center",
        background: dragging ? "#eef6ff" : "#fafafa",
        cursor: "pointer",
        marginBottom: 15
      }}
    >
      <p style={{ color: "#555" }}>
        {dragging ? "Drop file here..." : "Drag & drop PDF/Image here or click to browse"}
      </p>

      <input
        type="file"
        style={{ display: "none" }}
        id="fileInput"
        onChange={(e) => onFileSelect(e.target.files[0])}
      />

      <button
        className="btn"
        onClick={() => document.getElementById("fileInput").click()}
      >
        Browse File
      </button>
    </div>
  );
}
