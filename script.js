"use strict";

const canvasEle = document.getElementById("my-first-canvas");

const ctx = canvasEle.getContext("2d");

ctx.fillStyle = "#b81616";
ctx.fillRect(0, 0, canvasEle.width / 2, canvasEle.height / 2);
