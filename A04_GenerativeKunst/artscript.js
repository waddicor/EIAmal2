"use strict";
var canvas;
(function (canvas_1) {
    window.addEventListener("load", drawArt);
    let crc2;
    let crc3;
    let crc4;
    function drawArt(_event) {
        let canvas = document.querySelector(".canvas");
        crc2 = canvas.getContext("2d");
        crc3 = canvas.getContext("2d");
        crc4 = canvas.getContext("2d");
        console.log(crc2);
        circle();
    }
    function circle() {
        for (let index = 0; index < 5; index++) {
            let greenCircle = Math.floor(Math.random() * 250);
            let blueCircle = Math.floor(Math.random() * 100);
            let redCircle = Math.floor(Math.random() * 150);
            crc2.beginPath();
            crc2.arc(Math.floor(Math.random() * (1200) + 1), (Math.random() * (750) + 1), (Math.random() * (750) + 1), 0, 5 + Math.PI);
            crc2.fillStyle = "rgb( " + greenCircle + ", " + blueCircle + ", " + redCircle + ")";
            crc2.fill();
            crc2.closePath();
            crc2.stroke();
        }
    }
    let newCanvas = document.querySelector(".reloadCanvas");
    newCanvas.addEventListener("click", function () {
        location.reload();
    });
})(canvas || (canvas = {}));
//# sourceMappingURL=artscript.js.map