import { useEffect, useRef } from "react";

const Canvas = () => {
  const canvasRef = useRef();

  useEffect(() => {
    writeCanvas(canvasRef.current);
  }, []);

  return <canvas ref={canvasRef} width="700" height="600"></canvas>;
};
export default Canvas;

function writeCanvas(canvas) {
  const ctx = canvas.getContext("2d");
  const color = "#b81616";
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);

  gradient.addColorStop(0, "red");
  gradient.addColorStop(0.5, "white");
  gradient.addColorStop(1, "green");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}
