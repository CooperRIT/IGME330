export const drawRectangle = (ctx, x, y, width, height, fillStyle = "black", lineWidth = 0, strokeStyle = "black") => {
    ctx.save();
    ctx.fillStyle = fillStyle;
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = lineWidth;
    ctx.fillRect(x, y, width, height);
    if (lineWidth > 0) ctx.strokeRect(x, y, width, height);
    ctx.restore();
};

export const drawArc = (ctx, x, y, radius, fillStyle = "black", lineWidth = 0, strokeStyle = "black", startAngle = 0, endAngle = Math.PI * 2) => {
    ctx.save();
    ctx.fillStyle = fillStyle;
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle);
    ctx.fill();
    if (lineWidth > 0) ctx.stroke();
    ctx.restore();
};

export const drawLine = (ctx, x1, y1, x2, y2, lineWidth = 1, strokeStyle = "black") => {
    ctx.save();
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.restore();
};