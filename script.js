"use strict";

const canvasEle = document.getElementById("my-first-canvas");
const img = document.getElementById("img");

const ctx = canvasEle.getContext("2d");
const color = "#b81616";
const gradient = ctx.createLinearGradient(0, 0, canvasEle.width, 0);

gradient.addColorStop(0, "red");
gradient.addColorStop(0.5, "white");
gradient.addColorStop(1, "green");

const pattern = ctx.createPattern(img, "no-repeat")

ctx.fillStyle = pattern;
ctx.fillRect(0, 0, canvasEle.width, canvasEle.height);
