const fs = require('fs');
const {createCanvas, loadImage} = require('canvas');
const canvas = createCanvas(64, 64);
const context = canvas.getContext('2d');

let lines = [];
let n = 0;

function next() {
    n ++;

    if (n > 386) {
    //if (n > 1) {
        console.log(lines.join('\n'));
        return;
    }

    let filename = n + '.png';

    loadImage('pokemon/' + filename).then(image => {
    //loadImage('1text.png').then(image => {
        context.clearRect(0, 0, 64, 64);
        //context.fillStyle = 'white';
        //context.fillRect(0, 0, 64, 64);

        let xo = Math.floor((64-image.width)/2);
        let yo = Math.floor((64-image.height)/2);
        context.drawImage(image, xo, yo);

        let imageData = context.getImageData(0, 0, 64, 64);
        let data = imageData.data;

        for (let y = 0; y < 64; y ++) {
            let split = [];

            for (let x = 0; x < 64; x ++) {
                let i = ((y*64) + x) * 4;

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
            lines.push(['<'+lineNumber+'d>'].concat(split).join(' '));
            lines.unshift(['<'+lineNumber+'u>'].concat(split).join(' '));
        }

        next();
    });
}

next();
