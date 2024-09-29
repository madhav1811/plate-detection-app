# 🚗 License Plate Detection System

**A powerful solution for real-time vehicle license plate detection and recognition using FastAPI, YOLOv8, and EasyOCR.**

---

![License Plate Detection](frontend/assets/demo-image.png) <!-- Replace with a real screenshot if you have one -->

---

## 📌 Key Features

- **📸 Image & Video Support**: Detect license plates from uploaded images or videos.
- **🔍 Real-time Object Detection**: Utilizes YOLOv8 for high-speed and accurate plate detection.
- **📄 Optical Character Recognition (OCR)**: Extracts text from license plates with EasyOCR.
- **📊 Results Tracking**: Automatically logs detected plates in an Excel sheet for future analysis.
- **💻 Simple Web Interface**: Intuitive and easy-to-use frontend for uploading images or videos.

---

## 🚀 Demo (GIF or Screenshot)

![Demo](frontend/assets/demo.gif) <!-- You can add a GIF to showcase how the project works -->

---

## 🎥 How It Works

1. **Upload** an image or video containing vehicle license plates via the web interface.
2. **YOLOv8** detects the location of plates in the image/video.
3. **EasyOCR** extracts the license plate number from the detected region.
4. The results are **displayed** in the interface and **stored** in an Excel file for tracking.

---

## 🛠️ Tech Stack

- **Backend**: FastAPI (Python)
- **Frontend**: HTML, CSS, JavaScript
- **Object Detection**: YOLOv8
- **Text Recognition**: EasyOCR
- **Image Processing**: OpenCV
- **Data Logging**: Openpyxl (Excel)

---

## ⚡ Quick Start

### 🔧 Prerequisites

- Python 3.8+
- Node.js (optional for serving the frontend)

### 🔨 Setup Instructions

#### 1. Clone the Repository
```bash
git clone https://github.com/your-username/license-plate-detection.git
cd license-plate-detection

```bash
git clone https://github.com/your-username/license-plate-detection.git
cd license-plate-detection
