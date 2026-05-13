const imageInput = document.getElementById("imageInput");
const image = document.getElementById("image");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const result = document.getElementById("result");
let model;

async function loadModel(){
    result.innerHTML = `
        <div class="result-card">
            <div class="result-title">AI Status</div>
            <div class="result-main">Loading...</div>
            <div class="result-text">COCO SSD model is loading</div>
        </div>
    `;

    try{
        model = await cocoSsd.load();
        result.innerHTML = `
            <div class="result-card">
                <div class="result-title">AI Ready</div>
                <div class="result-main">Model Loaded</div>
                <div class="result-text">Upload image to start detection</div>
            </div>
        `;

    } catch(error){
        console.error(error);
        result.innerHTML = `
            <div class="result-card">
                <div class="result-title">Error</div>
                <div class="result-main">Load Failed</div>
                <div class="result-text">Cannot load COCO SSD model</div>
            </div>
        `;
    }
}

imageInput.addEventListener("change",(event)=>{
    const file = event.target.files[0];
    if(!file) return;
    const reader = new FileReader();
    reader.onload = function(){
        image.src = reader.result;
    };
    reader.readAsDataURL(file);
});

image.onload = async ()=>{
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0);
    result.innerHTML = `
        <div class="result-card">
            <div class="result-title">Detecting</div>
            <div class="result-main">AI Processing</div>
            <div class="result-text">Detecting objects...</div>
        </div>
    `;

    const predictions = await model.detect(image);
    ctx.drawImage(image, 0, 0);

    let uniqueObjects = {};
    let objectIndexes = {};
    let currentIndex = 1;

    predictions.forEach(pred => {
        if(pred.score > 0.3){
            const [x,y,width,height] = pred.bbox;
            const name = pred.class;

            if(!objectIndexes[name]) {
                objectIndexes[name] =currentIndex;
                currentIndex++;
            }

            const objectNumber = objectIndexes[name];

            if(!uniqueObjects[name] || pred.score > uniqueObjects[name]){
                uniqueObjects[name] = pred.score;
            }

            ctx.strokeStyle = "#2563eb";
            ctx.lineWidth = 4;
            ctx.strokeRect(x, y, width, height);
            ctx.fillStyle = "#2563eb";
            ctx.beginPath();
            ctx.arc(x + 18, y + 18, 18, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "white";
            ctx.font = "bold 18px Arial";
            ctx.fillText(objectNumber, x + 12, y + 24);
        }
    });

    if(Object.keys(uniqueObjects).length === 0){
        result.innerHTML = `
            <div class="result-card">
                <div class="result-title">Result</div>
                <div class="result-main">No Object Found</div>
                <div class="result-text">No objects detected</div>
            </div>
        `;
        return;
    }

    let resultHTML = "";

    for(let name in uniqueObjects){
        resultHTML += `
            <div class="result-item">
                <div class="result-name">${objectIndexes[name]}. ${name}</div>
                <div class="result-confidence">Confidence:${(uniqueObjects[name] * 100).toFixed(1)}%</div>
            </div>
        `;
    }
    result.innerHTML = resultHTML;
};

loadModel();