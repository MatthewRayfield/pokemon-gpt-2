const fs = require('fs');
const {createCanvas, loadImage} = require('canvas');
const canvas = createCanvas(60, 60);
const context = canvas.getContext('2d');

let lines = [];
let n = 0;

function next() {
    n ++;

    //if (n > 251) {
    if (n > 1) {
        console.log(lines.join('\n'));
        return;
    }

    loadImage('animation-frames/' + n + '-0.png').then(imageA => {
        loadImage('animation-frames/' + n + '-1.png').then(imageB => {
            context.clearRect(0, 0, 60, 60);
            context.drawImage(imageA, 0, 0);
            let imageDataA = context.getImageData(0, 0, 60, 60);
            let dataA = imageDataA.data;

            context.clearRect(0, 0, 60, 60);
            context.drawImage(imageB, 0, 0);
            let imageDataB = context.getImageData(0, 0, 60, 60);
            let dataB = imageDataB.data;

            for (let y = 0; y < 60; y ++) {
                let framePair = [];

                [dataA, dataB].forEach((data, f) => {
                    let split = [];

                    for (let x = 0; x < 60; x ++) {
                        let i = ((y*60) + x) * 4;

                        let r = Math.floor(data[i+0]/64);
                        let g = Math.floor(data[i+1]/64);
                        let b = Math.floor(data[i+2]/64);

                        let s = '~';

                        if (data[i+3] > 128) {
                            let c = 0;

                            c += r;
                            c = c << 2;
                            c += g;
                            c = c << 2;
                            c += b;

                            s = String.fromCharCode(c+33);
                        }

                        split.push(s);
                    }

                    const lineNumber = ('00'+y).substr(-2);
                    framePair.push(['<'+lineNumber+(!f ? 'A' : 'B')+'d>'].concat(split).join(' '));
                });

                lines.push(framePair[0]);
                lines.push(framePair[1]);

                lines.unshift(framePair[1].replace('d>', 'u>'));
                lines.unshift(framePair[0].replace('d>', 'u>'));
            }

            next();
        });
    });
}

next();
