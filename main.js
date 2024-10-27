//cc 12

//task 1 - html code

// task 2

const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');

let drawing = false;
let startX, startY;
let selectedTool = 'line';

const colorPicker = document.getElementById('colorPicker');

const toolRadios = document.querySelectorAll('input[name="tool"]');
toolRadios.forEach(tool => {
    tool.addEventListener('change', () => {
        selectedTool = tool.value;
    });
});

canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    startX = e.offsetX;
    startY = e.offsetY;
});

canvas.addEventListener('mousemove', (e) => {
    if (!drawing) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawShape(e.offsetX, e.offsetY);
});

canvas.addEventListener('mouseup', () => {
    drawing = false;
    ctx.beginPath();
});

// task 3

function drawShape(x, y) {
    ctx.strokeStyle = colorPicker.value;
    ctx.beginPath();

    switch (selectedTool) {
        case 'line':
            ctx.moveTo(startX, startY);
            ctx.lineTo(x, y);
            break;
        case 'rectangle':
            ctx.rect(startX, startY, x - startX, y - startY);
            break;
        case 'circle':
            const radius = Math.sqrt(Math.pow(x - startX, 2) + Math.pow(y - startY, 2));
            ctx.arc(startX, startY, radius, 0, 2 * Math.PI);
            break;
    }
    ctx.stroke();
}
