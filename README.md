# AI Object Detection Web

A simple AI-powered web application using TensorFlow.js and COCO-SSD for real-time object detection directly in the browser.

---

## Features

- Upload image detection
- AI object recognition
- Bounding box visualization
- Duplicate object filtering
- Responsive modern UI
- Browser-based AI processing

---

## Technologies Used

- HTML5
- CSS3
- JavaScript
- TensorFlow.js
- COCO-SSD Model

---

## Project Structure

```bash
project/
│
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   └── components.css
│   │
│   └── js/
│       └── object_detection.js
│
├── pages/
│   └── object_detection.php
│
├── index.php
└── README.md
```

---

## Installation

### 1. Clone Repository

```bash
git clone https://github.com/LyPhucHai/Object_Detection_AI.git
```

---

### 2. Move Project To XAMPP

Move the folder into:

```bash
C:\xampp\htdocs\
```

---

### 3. Start Apache

Open XAMPP Control Panel and start:

- Apache

---

### 4. Open Browser

```bash
http://localhost/Object_Detection_AI
```

---

## How It Works

1. User uploads an image
2. TensorFlow.js loads the COCO-SSD model
3. AI scans the image
4. Objects are detected
5. Bounding boxes and labels are rendered on canvas
6. Results are displayed on the right panel

---

## AI Model

### COCO-SSD

COCO-SSD is a lightweight object detection model trained on the COCO dataset.

Supported detections include:

- Person
- Car
- Bus
- Motorcycle
- Cat
- Dog
- Bottle
- Chair
- Laptop
- Phone
- And many more

---

## Notes

- Internet connection is required for loading TensorFlow.js CDN libraries.
- Detection performance depends on browser and device performance.

---

## Authors

- Ly Phuc Hai - 524H0013
- Tran Huu Danh - 524H0007

---

## Demo

Upload an image and the AI will automatically detect objects inside the image.
