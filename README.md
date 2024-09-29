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

```
#### 2. Backend Setup
```bash
cd backend
pip install -r requirements.txt
```
#### 3. Download YOLOv8 Model
-> Place your trained YOLOv8 model (best.pt) in the backend/models/ folder.
#### 4. Run the BAckend Server
```bash
uvicorn app:app --reload
```
#### 5. 🖥️ Frontend Setup
### Manual Setup
Open the index.html file in the frontend/ folder in your browser to interact with the backend.
### Node.js Setup (Optional)
If you prefer serving the frontend via Node.js:
  1. Install live-server globally:
      ```bash
      npm install -g live-server
      ```
  2. Run the live server:
     ```bash
     live-server
     ```
#### 📄 API Documentation
The API can be explored via the FastAPI docs:

-> Swagger UI: http://127.0.0.1:8000/docs
-> ReDoc: http://127.0.0.1:8000/redoc

#### 🛠️ Tech Stack
Backend: FastAPI, YOLOv8, EasyOCR
Frontend: HTML, CSS, JavaScript
Database: Excel (for storing results)
Deployment: Uvicorn server for FastAPI




#### 📂 Project Structure

license-plate-detection/
│
├── backend/                 # Backend code using FastAPI
│   ├── app.py               # Main API logic
│   ├── requirements.txt      # Python dependencies
│   └── models/              # Pre-trained YOLOv8 model
│
├── frontend/                # Frontend code (HTML, CSS, JS)
│   ├── index.html           # Web UI
│   ├── app.js               # Frontend logic
│   ├── styles.css           # Custom styles
│   └── assets/              # Images, icons, etc.
│
└── README.md                # Project documentation
#### 🛠️ Additional Commands
Installing Python Virtual Environment (Optional)
It’s recommended to use a Python virtual environment to manage dependencies and avoid conflicts:

Install virtualenv if you don’t have it:

```bash

pip install virtualenv
```
Create a virtual environment:
```bash


virtualenv venv
```
Activate the virtual environment:

->On Windows:

```bash
venv\Scripts\activate
```
->On macOS/Linux:

```bash

source venv/bin/activate
```
Install dependencies inside the virtual environment:

```bash

pip install -r requirements.txt
```
#### 🔥 Hot Reload Backend Server (Optional)
If you want the server to auto-reload when you make changes, use the following command:

```bash

uvicorn app:app --reload
```
#### 🎯 Usage
  1.Open the web interface.
  2.Upload an image or video containing vehicle license plates.
  3.Wait for the system to process and detect plates.
  4.View the results (including extracted text) on the page and download the Excel report.
#### 📊 Excel Log Sample
The system stores each detected plate with a timestamp, count, and other details in an Excel sheet:

S.No	Number Plate	Date	Time	Count
1	ABC1234	2024-09-29	14:20:45	1
2	XYZ5678	2024-09-29	14:22:10	1

#### 💡 Example Use Cases
  1.Smart Traffic Systems: Automate the detection of vehicles violating traffic rules.
  2.Parking Management: Detect and log vehicles entering or leaving parking areas.
  3.Security Systems: Monitor license plates entering restricted areas.
#### 🤝 Contributing
  Contributions, issues, and feature requests are welcome! Feel free to check out the issues page.
#### ✨ Acknowledgments
 -> YOLOv8 for powerful object detection.
 -> EasyOCR for text extraction from images.
 -> OpenCV for image processing.
#### 🎉 Congratulations!
You now have a working backend for real-time license plate detection. Make sure to try uploading images and videos via the frontend to see the object detection in action!

### Key Points:
- **Backend Installation Instructions**: Clearly explained steps to install dependencies, download the YOLO model, and run the backend.
- **Frontend Setup**: Described both manual and optional Node.js-based setups for serving the frontend.
- **Project Structure**: Added to help developers understand the folder organization.
- **Python Virtual Environment**: Optional but recommended for managing dependencies.









