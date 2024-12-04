import { useEffect, useRef } from "react";

const Canvas = () => {
  const canvasRef = useRef();

  useEffect(() => {
    writeCanvas(canvasRef.current);
  }, []);

  return <canvas ref={canvasRef} width="401" height="401"></canvas>;
};
export default Canvas;

function writeCanvas(canvas) {
  const ctx = canvas.getContext("2d");
  const height = canvas.height;
  const width = canvas.width;

  ctx.strokeStyle = "#d6d6d6";

  for (let x = 0.5; x < height; x += 20) {
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }

  for (let y = 0.5; y < width; y += 20) {
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
}
