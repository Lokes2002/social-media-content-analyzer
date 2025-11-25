# Social Media Content Analyzer

A full-stack AI-powered system that analyzes Images and PDFs to extract text, detect objects, understand image quality, and generate engagement-boosting suggestions for social media content.

This project uses:

- **React (Frontend)**
- **Spring Boot (Backend API)**
- **Python FastAPI + YOLOv8 (AI Object Detection)**

---
## 🎥 Demo Video

[Watch the demo video](https://drive.google.com/file/d/16Tbqp9T0UbuAxqdPYECE-oyHLmDXu51S/view?usp=sharing)


#  Live Working Application

### **Frontend (User Interface)**
🔗 https://forent-psi.vercel.app/

### **Backend (Spring Boot APIs)**
🔗 https://backedns-6.onrender.com/

### **YOLO Detection FastAPI Service**
🔗 https://pythd-3.onrender.com/

---

#  Project Structure

root/
├── frontend/ → React UI
├── backend/ → Spring Boot (PDF/OCR/YOLO integration)
└── yolo-service/ → Python FastAPI (YOLOv8 object detection)


---

#  Features

✔ Upload Image or PDF  
✔ Extract Text (OCR / PDF extraction)  
✔ Object Detection using YOLOv8  
✔ Image Insights (Brightness, Colors, Sharpness, etc.)  
✔ AI-generated Suggestions for better social media engagement  
✔ Clean, modern UI  
✔ Fully deployed on cloud (Render + Vercel)

---

#  System Architecture

React Frontend
↓ (FormData file)
Spring Boot Backend (/api/extract)
↓
┌───────────────┬────────────────────────────┬────────────────────┐
│ PDF Extractor │ OCR Engine │ YOLO FastAPI Model │
└───────────────┴────────────────────────────┴────────────────────┘
↓
Suggestion Engine
↓
Frontend Output (Text + Objects + Insights + Suggestions)


---

# 🔧 Tech Stack

### **Frontend**
- React.js
- Axios
- Tailwind/CSS
- Vercel Deployment

### **Backend (Java)**
- Spring Boot
- Spring Web
- PDFBox
- Tesseract OCR (or your OCR service)
- Java HTTPClient for YOLO communication
- Render Deployment

### **YOLO Service (Python)**
- FastAPI
- Ultrayltics YOLOv8
- Pillow
- Uvicorn
- Render Deployment

---

# 📌 API Flow

### **POST /api/extract**
Sends file → Backend processes → Calls:

- `pdfService.extractText()`
- `ocrService.extractText()`
- `imageService.analyze()`
- `yoloService.detect(imageBytes)`

Backend returns:

```json
{
  "text": "...",
  "imageInsights": {...},
  "objectsDetected": [
    {"label": "person", "confidence": 0.98}
  ],
  "suggestions": [...]
}

---

# 🔧 Tech Stack

### **Frontend**
- React.js
- Axios
- Tailwind/CSS
- Vercel Deployment

### **Backend (Java)**
- Spring Boot
- Spring Web
- PDFBox
- Tesseract OCR (or your OCR service)
- Java HTTPClient for YOLO communication
- Render Deployment

### **YOLO Service (Python)**
- FastAPI
- Ultrayltics YOLOv8
- Pillow
- Uvicorn
- Render Deployment

---

# 📌 API Flow

### **POST /api/extract**
Sends file → Backend processes → Calls:

- `pdfService.extractText()`
- `ocrService.extractText()`
- `imageService.analyze()`
- `yoloService.detect(imageBytes)`

Backend returns:

```json
{
  "text": "...",
  "imageInsights": {...},
  "objectsDetected": [
    {"label": "person", "confidence": 0.98}
  ],
  "suggestions": [...]
}

---

# 🔧 Tech Stack

### **Frontend**
- React.js
- Axios
- Tailwind/CSS
- Vercel Deployment

### **Backend (Java)**
- Spring Boot
- Spring Web
- PDFBox
- Tesseract OCR (or your OCR service)
- Java HTTPClient for YOLO communication
- Render Deployment

### **YOLO Service (Python)**
- FastAPI
- Ultrayltics YOLOv8
- Pillow
- Uvicorn
- Render Deployment

---

# 📌 API Flow

### **POST /api/extract**
Sends file → Backend processes → Calls:

- `pdfService.extractText()`
- `ocrService.extractText()`
- `imageService.analyze()`
- `yoloService.detect(imageBytes)`

Backend returns:

```json
{
  "text": "...",
  "imageInsights": {...},
  "objectsDetected": [
    {"label": "person", "confidence": 0.98}
  ],
  "suggestions": [...]
}
1. Frontend
cd frontend
npm install
npm start

2. Backend (Spring Boot)
cd backend
mvn clean install
mvn spring-boot:run

Python YOLO Service
cd yolo-service
pip install -r requirements.txt
uvicorn app:app --reload
