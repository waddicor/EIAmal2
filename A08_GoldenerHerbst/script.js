"use strict";
var Canvas;
(function (Canvas) {
    window.addEventListener("load", handleload);
    let canvas;
    let crc2;
    function handleload() {
        canvas = document.querySelector("canvas");
        canvas.id = "CanvasID";
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.backgroundColor = "#89Cff0";
        crc2 = canvas.getContext("2d");
        drawSun();
        drawMountians(window.innerHeight * 0.4, "#4f4942");
        drawMountians(window.innerHeight * 0.5, "#787067");
        drawGrass();
        var randomXClouds1 = Math.random() * (window.innerWidth * 0.3);
        var randomYClouds1 = Math.random() * (window.innerHeight * 0.3);
        var randomXClouds2 = Math.random() * (window.innerWidth * 0.9 - window.innerWidth * 0.4) + window.innerWidth * 0.4;
        var randomYClouds2 = Math.random() * (window.innerHeight * 0.5 - window.innerHeight * 0.1) + window.innerHeight * 0.1;
        var randomXClouds3 = Math.random() * (window.innerWidth * 0.8 - window.innerWidth * 0.5) + window.innerWidth * 0.5;
        var randomYClouds3 = Math.random() * (window.innerHeight * 0.4 - window.innerHeight * 0.1) + window.innerHeight * 0.1;
        var randomXClouds4 = Math.random() * (window.innerWidth * 0.6);
        var randomYClouds4 = Math.random() * (window.innerHeight * 0.4);
        drawCloud(randomXClouds1, randomYClouds1, 250, 75);
        drawCloud(randomXClouds2, randomYClouds2, 250, 75);
        drawCloud(randomXClouds3, randomYClouds3, 250, 75);
        drawCloud(randomXClouds4, randomYClouds4, 250, 75);
        drawSun();
        for (let index = 0; index < 40; index++) {
            drawFir({ x: Math.random() * 2000, y: 580 + Math.random() * 10 });
        }
        for (let index = 0; index < 6; index++) {
            drawSquirrel({ x: Math.random() * 2000, y: 650 + Math.random() * 100 }, "#824f2b");
        }
        for (let index = 0; index < 8; index++) {
            let scaleNumber = 0.1 + Math.random();
            drawMaple({ x: Math.random() * 2000, y: 600 + Math.random() * 200 }, { x: scaleNumber, y: scaleNumber });
            drawGinko({ x: Math.random() * 2000, y: 600 + Math.random() * 200 }, { x: scaleNumber, y: scaleNumber });
            drawRoundLeave({ x: Math.random() * 1800, y: 600 + Math.random() * 200 }, { x: scaleNumber, y: scaleNumber });
        }
    }
    function drawGrass() {
        crc2.beginPath();
        crc2.moveTo(0, window.innerHeight * 0.6);
        crc2.lineTo(window.innerWidth, window.innerHeight * 0.6);
        crc2.lineTo(window.innerWidth, window.innerHeight);
        crc2.lineTo(0, window.innerHeight);
        crc2.lineTo(0, window.innerHeight * 0.6);
        crc2.strokeStyle = "rgba(1, 1, 1, 0)";
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#a9e08d");
        gradient.addColorStop(0.5, "#e1ffd1");
        gradient.addColorStop(1, "#37472f");
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.closePath();
        crc2.stroke();
    }
    function drawCloud(_positionX, _positionY, _sizeX, _sizeY) {
        let nParticles = 20;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_positionX, _positionY);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _sizeX;
            let y = -(Math.random() * _sizeY);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawSun() {
        console.log("Im at the Sun!");
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, 120);
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(window.innerWidth * 0.05, window.innerHeight * 0.5);
        crc2.translate(window.innerWidth * 0.015, window.innerHeight * 0.055);
        crc2.arc(0, 0, 120, 0, 2 * Math.PI);
        gradient.addColorStop(0, "rgb(255, 192, 98)");
        gradient.addColorStop(1, "rgb(255, 215, 105, 0.5)");
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.strokeStyle = "rgba(1, 1, 1, 0)";
        crc2.stroke();
        crc2.restore();
    }
    function drawMountians(_height, _color) {
        var min = 60;
        var max = 200;
        let stepMin = 30;
        let stepMax = 120;
        let x = 0;
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(0, window.innerHeight * 0.6);
        crc2.lineTo(0, _height);
        crc2.translate(0, _height);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -min - Math.random() * (max - min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(window.innerWidth, window.innerHeight * 0.9);
        crc2.closePath();
        crc2.fillStyle = _color;
        crc2.fill();
        crc2.restore();
        console.log("im at the mountains!");
    }
    function drawGinko(_position, _scale) {
        console.log("Ginko is drawing");
        crc2.resetTransform();
        crc2.translate(_position.x, _position.y);
        crc2.restore();
        crc2.fillStyle = "#95CA74";
        crc2.strokeStyle = "black";
        console.log("Ginko at", _position);
        crc2.scale(_scale.x, _scale.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(15, -10);
        crc2.arc(25, -20, 40, 80, 50);
        crc2.lineTo(40, -20);
        crc2.lineTo(60, -20);
        crc2.arc(30, -20, 40, 0, 1);
        crc2.lineTo(17, -5);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawRoundLeave(_position, _scale) {
        console.log("Round Leaves are drawing");
        crc2.resetTransform();
        crc2.translate(_position.x, _position.y);
        crc2.restore();
        crc2.fillStyle = "#A3210A";
        crc2.strokeStyle = "black";
        console.log("Round Leave at", _position);
        crc2.scale(_scale.x, _scale.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(15, -10);
        crc2.lineTo(20, -5);
        crc2.lineTo(0, 0);
        crc2.ellipse(43, -25, 20, 30, 20, 20, 40);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(17, -8);
        crc2.lineTo(70, -40);
        crc2.moveTo(48, -5);
        crc2.lineTo(18, -10);
        crc2.lineTo(25, -38);
        crc2.moveTo(64, -15);
        crc2.lineTo(35, -20);
        crc2.lineTo(45, -46);
        crc2.stroke();
        crc2.closePath();
    }
    function drawMaple(_position, _scale) {
        console.log("Maple Leaves are drawing");
        crc2.resetTransform();
        crc2.translate(_position.x, _position.y);
        crc2.restore();
        crc2.fillStyle = "#E88727";
        crc2.strokeStyle = "black";
        console.log("Maple at", _position);
        crc2.scale(_scale.x, _scale.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(10, -10);
        crc2.lineTo(20, -70);
        crc2.lineTo(30, -40);
        crc2.lineTo(60, -70);
        crc2.lineTo(50, -30);
        crc2.lineTo(100, -50);
        crc2.lineTo(60, -10);
        crc2.lineTo(100, 0);
        crc2.lineTo(50, 10);
        crc2.lineTo(60, 30);
        crc2.lineTo(15, 0);
        crc2.lineTo(0, 5);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawFir(_position) {
        console.log("Fir");
        crc2.resetTransform();
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.scale(1, 2);
        crc2.beginPath();
        crc2.rect(-10, -40, 20, 40);
        crc2.closePath();
        crc2.fillStyle = "hsl(41, 68%, 22%)";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(0, -120);
        crc2.lineTo(-35, -45);
        crc2.lineTo(-25, -50);
        crc2.lineTo(-37, -27);
        crc2.lineTo(-30, -32);
        crc2.lineTo(-45, -7);
        crc2.lineTo(0, -18);
        crc2.lineTo(45, -7);
        crc2.lineTo(30, -32);
        crc2.lineTo(37, -27);
        crc2.lineTo(25, -50);
        crc2.lineTo(33, -45);
        crc2.moveTo(0, -70);
        crc2.fillStyle = "hsl(166, 68%, 23%)";
        crc2.closePath();
        crc2.fill();
        crc2.restore();
    }
    function drawSquirrel(_position, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.ellipse(_position.x + -90, _position.y + 20, 15, 22, -10, 20, 40);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.ellipse(_position.x + -100, _position.y + 4, 13, 13, -10, 20, 40);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.ellipse(_position.x + -100, _position.y + -7, 7, 7, -10, 20, 40);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.ellipse(_position.x + -100, _position.y + -7, 7, 7, -10, 20, 40);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.ellipse(_position.x + -107, _position.y + 24, 9, 6, -10, 20, 40);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.ellipse(_position.x + -90, _position.y + 40, 10, 5, -10, 20, 40);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.ellipse(_position.x + -62, _position.y + 23, 23, 9, -10, 20, 40);
        crc2.closePath();
        crc2.fill();
    }
})(Canvas || (Canvas = {}));
//# sourceMappingURL=script.js.map