const fs = require('fs');
const {createCanvas, loadImage, createImageData} = require('canvas');

console.log(process.argv);

process.argv.slice(2).forEach(path => {
    const canvas = createCanvas(56, 56);
    const context = canvas.getContext('2d');
    const filename = path.split('/').slice(-1)[0];

    const text = fs.readFileSync(path, 'utf8');
    const split = text.split(' ');

    const imageData = createImageData(56, 56);
    const data = imageData.data;

    for (let y = 0; y < 56; y ++) {
        for (let x = 0; x < 56; x ++) {
            let i = (y*56) + x + 1;
            let s = split[i];

            if (s) {
                let c = Math.floor((s.charCodeAt(0)-48) / 9 * 255);

                i = (i - 1) * 4;

                data[i+0] = c;
                data[i+1] = c;
                data[i+2] = c;
                data[i+3] = 255;
            }
        }
    }

    context.putImageData(imageData, 0, 0);

    const stream = canvas.createPNGStream();
    const out = fs.createWriteStream('output/'+filename.split('.')[0]+'.png');
    stream.pipe(out);
});
