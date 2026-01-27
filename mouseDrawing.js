const svg = document.getElementById("drawingArea");
let isDrawing = false;
let currentPath;

svg.addEventListener("mousedown", (e) => {
    isDrawing = true;
    currentPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    currentPath.setAttribute("stroke", "black");
    currentPath.setAttribute("fill", "none");
    currentPath.setAttribute("stroke-width", "2");
    currentPath.setAttribute("d", `M${e.offsetX},${e.offsetY}`);
    svg.appendChild(currentPath);
});

svg.addEventListener("mousemove", (e) => {
    if (!isDrawing) return;
    const d = currentPath.getAttribute("d");
    currentPath.setAttribute("d", `${d} L${e.offsetX},${e.offsetY}`);
});

svg.addEventListener("mouseup", () => {
    isDrawing = false;
});