<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Object Detection</title>
    <link rel="stylesheet" href="../assets/css/style.css">
    <link rel="stylesheet" href="../assets/css/object_detection.css">
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"></script>
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/coco-ssd"></script>
</head>
<body>
<div class="container">
    <a href="../index.php" class="home-btn">← Home</a>
    <div class="hero">
        <span class="hero-tag">COCO SSD MODEL</span>
        <h1>Object Detection</h1>
        <p>Upload image and detect objects using AI model</p>
    </div>
    <div class="detect-layout">
        <div class="detect-card">
            <div class="detect-left">
                <label class="upload-box">
                    <input type="file" id="imageInput" accept="image/*">
                    <span>Upload Image</span>
                </label>
                <div class="canvas-wrapper">
                    <canvas id="canvas"></canvas>
                </div>
                <img id="image"hidden>
            </div>
            <div class="detect-right">
                <div id="result">
                    <div class="result-card">
                        <div class="result-title">AI Status</div>
                        <div class="result-main">Loading...</div>
                        <div class="result-text">COCO SSD model is loading</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="../assets/js/object_detection.js"></script>
</body>
</html>