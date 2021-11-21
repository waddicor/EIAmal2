namespace canvas {

    window.addEventListener("load", drawArt);
    let crc2: CanvasRenderingContext2D;
    let crc3: CanvasRenderingContext2D;
    let crc4: CanvasRenderingContext2D;

    function drawArt(_event: Event): void {
        let canvas: HTMLCanvasElement = document.querySelector(".canvas")!;
        crc2 = canvas.getContext("2d")!;
        crc3 = canvas.getContext("2d")!;
        crc4 = canvas.getContext("2d")!;

        console.log(crc2);

        circle();
    }

  
    function circle(): void {
        for (let index: number = 0; index < 5; index++) {

            let greenCircle: number = Math.floor(Math.random() * 250);
            let blueCircle: number = Math.floor(Math.random() * 100);
            let redCircle: number = Math.floor(Math.random() * 150);

            crc2.beginPath();

            crc2.arc(Math.floor(Math.random() * (1200) + 1), (Math.random() * (750) + 1), (Math.random() * (750) + 1), 0, 5 + Math.PI);

            crc2.fillStyle = "rgb( " + greenCircle + ", " + blueCircle + ", " + redCircle + ")";
            crc2.fill();

            crc2.closePath();
            crc2.stroke();


        }

    }



    let newCanvas: HTMLElement = <HTMLElement>document.querySelector(".reloadCanvas");

    newCanvas.addEventListener("click", function (): void {
        location.reload();
    });




}