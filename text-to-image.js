const fs = require('fs');
const {createCanvas, loadImage, createImageData} = require('canvas');

process.argv.slice(2).forEach(path => {
    const canvas = createCanvas(56, 56);
    const context = canvas.getContext('2d');
    const filename = path.split('/').slice(-1)[0];

    const imageData = createImageData(56, 56);
    const data = imageData.data;
    
    const text = fs.readFileSync(path, 'utf8');
    const lines = text.split('\n');

    lines.forEach(line => {
        const split = line.split(' ');
        const result = (/<([0-9]+)>/).exec(split[0]);

        if (result && result[1]) {
            let y = parseInt(result[1]);

            console.log('line ' + y + ' 👍');

            for (let x = 0; x < split.length-1 && x < 56; x ++) {
                let i = ((y*56) + x) * 4;

                let c = Math.floor((parseInt(split[x+1]) / 9) * 255);

                data[i+0] = c;
                data[i+1] = c;
                data[i+2] = c;
                data[i+3] = 255;
            }
        }
        else {
            console.log('bad line.. 💀');
        }
    });

    context.putImageData(imageData, 0, 0);

    const stream = canvas.createPNGStream();
    const out = fs.createWriteStream('output/'+filename.split('.')[0]+'.png');
    stream.pipe(out);
});
