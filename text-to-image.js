const fs = require('fs');
const {createCanvas, loadImage, createImageData} = require('canvas');

console.log(process.argv);

process.argv.slice(2).forEach(path => {
    const canvas = createCanvas(64, 64);
    const context = canvas.getContext('2d');
    const filename = path.split('/').slice(-1)[0];

    const text = fs.readFileSync(path, 'utf8');
    const split = text.split('');

    const imageData = createImageData(64, 64);
    const data = imageData.data;

    for (let y = 0; y < 64; y ++) {
        for (let x = 0; x < 64; x ++) {
            let i = (y*64) + x + 1;
            let s = split[i] || '~';

            if (s != '~') {
                let c = s.charCodeAt(0)-33;

                let b = (c & 3) * 64;
                c = c >> 2;
                let g = (c & 3) * 64;
                c = c >> 2
                let r = (c & 3) * 64;
                
                i = (i - 1) * 4;

                data[i+0] = r;
                data[i+1] = g;
                data[i+2] = b;
                data[i+3] = 255;
            }
        }
    }

    context.putImageData(imageData, 0, 0);

    const stream = canvas.createPNGStream();
    const out = fs.createWriteStream('output/'+filename.split('.')[0]+'.png');
    stream.pipe(out);
});
