const fs = require('fs');
const {createCanvas, loadImage} = require('canvas');
const canvas = createCanvas(64, 64);
const context = canvas.getContext('2d');

let text = '';
let n = 0;

function next() {
    n ++;

    if (n > 386) {
        console.log(text);
        return;
    }

    let filename = n + '.png';

    loadImage('pokemon/' + filename).then(image => {
        //context.fillStyle = '#FF00FF';
        //context.fillRect(0, 0, 64, 64);
        context.drawImage(image, 0, 0);

        let imageData = context.getImageData(0, 0, 64, 64);
        let data = imageData.data;

        text += ' ';

        for (let y = 0; y < 64; y ++) {
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

                text += s;
            }
        }

        next();

        //fs.writeFileSync(filename.split('.')[0]+'.txt', text);

        /*context.clearRect(0, 0, 64, 64);
        context.putImageData(imageData, 0, 0);

        const stream = canvas.createPNGStream();
        const out = fs.createWriteStream('out.png');
        stream.pipe(out);*/
    });
}

next();
