import { getRandomColor, getRandomInt } from "./utils.js";
import { drawRectangle, drawArc, drawLine } from "./canvas-utils.js";

let ctx;
let canvas;
let paused = false;
let createRectangles = true;
let createArcs = false;
let createLines = false;

const init = () => {
    console.log("page loaded!");

    canvas = document.querySelector("canvas");
    ctx = canvas.getContext("2d");

    setupUI();
    update();
};

const update = () => {
    if (paused) return;
    requestAnimationFrame(update);

    // Add a fade effect
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (createRectangles) drawRandomRect(ctx);
    if (createArcs) drawRandomArc(ctx);
    if (createLines) drawRandomLine(ctx);
};

const setupUI = () => {
    document.querySelector("#btn-pause").onclick = () => (paused = true);
    document.querySelector("#btn-play").onclick = () => {
        if (!paused) return;
        paused = false;
        update();
    };
    document.querySelector("#btn-clear").onclick = () => ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.onclick = canvasClicked;
    document.querySelector("#cb-rectangles").onclick = (e) => (createRectangles = e.target.checked);
    document.querySelector("#cb-arcs").onclick = (e) => (createArcs = e.target.checked);
    document.querySelector("#cb-lines").onclick = (e) => (createLines = e.target.checked);
};

const canvasClicked = (e) => {
    const rect = e.target.getBoundingClientRect();
    const mouseX = e.clientX - rect.x;
    const mouseY = e.clientY - rect.y;

    for (let i = 0; i < 10; i++) {
        const x = Math.max(0, Math.min(canvas.width, getRandomInt(-100, 100) + mouseX));
        const y = Math.max(0, Math.min(canvas.height, getRandomInt(-100, 100) + mouseY));
        const radius = getRandomInt(10, 50);
        const color = getRandomColor();
        drawArc(ctx, x, y, radius, color);
    }
};

const drawRandomRect = (ctx) => {
    drawRectangle(
        ctx,
        getRandomInt(0, 600),
        getRandomInt(0, 600),
        getRandomInt(0, 600),
        getRandomInt(0, 600),
        getRandomColor(),
        getRandomInt(1, 10),
        getRandomColor()
    );
};

const drawRandomArc = (ctx) => {
    drawArc(
        ctx,
        getRandomInt(0, 600),
        getRandomInt(0, 600),
        getRandomInt(10, 100),
        getRandomColor(),
        getRandomInt(1, 10),
        getRandomColor(),
        0,
        Math.PI * 2
    );
};

const drawRandomLine = (ctx) => {
    drawLine(
        ctx,
        getRandomInt(0, 600),
        getRandomInt(0, 600),
        getRandomInt(0, 600),
        getRandomInt(0, 600),
        getRandomInt(1, 10),
        getRandomColor()
    );
};

init();