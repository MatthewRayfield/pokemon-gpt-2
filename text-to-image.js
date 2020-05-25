const fs = require('fs');
const {createCanvas, loadImage, createImageData} = require('canvas');
const GIFEncoder = require('gifencoder');

function parseMarker(string) {
    let result = /<([0-9]+)([AB])>/.exec(string);

    if (result) {
        return {line: parseInt(result[1]), frame: result[2] == 'A' ? 0 : 1};
    }

    return null;
}

process.argv.slice(2).forEach(path => {
    const inputFilename = path.split('/').slice(-1)[0];

    const text = fs.readFileSync(path, 'utf8');
    const lines = text.split('\n');

    let imageWidth = 0;
    let imageHeight = 0;
    lines.forEach(line => {
        const split = line.split(' ');
        const marker = parseMarker(split[0]);

        if (marker) {
            if (marker.line + 1 > imageHeight) {
                imageHeight = marker.line + 1;
            }

            const lineWidth = split.length - 1;

            if (lineWidth > imageWidth) {
                imageWidth = lineWidth;
            }
        }
    });

    const canvasA = createCanvas(imageWidth, imageHeight);
    const contextA = canvasA.getContext('2d');

    const imageDataA = createImageData(imageWidth, imageHeight);
    const dataA = imageDataA.data;

    const canvasB = createCanvas(imageWidth, imageHeight);
    const contextB = canvasB.getContext('2d');

    const imageDataB = createImageData(imageWidth, imageHeight);
    const dataB = imageDataB.data;

    lines.forEach(line => {
        const split = line.split(' ');
        const marker = parseMarker(split[0]);

        if (marker) {
            const y = marker.line;
            const data = [dataA, dataB][marker.frame];

            for (let x = 0; x < split.length-1; x ++) {
                let colorCode = split[x+1].split('');

                let r = parseInt(colorCode[0], 16) * 16;
                let g = parseInt(colorCode[1], 16) * 16;
                let b = parseInt(colorCode[2], 16) * 16;

                let i = ((y*imageWidth) + x) * 4;
                data[i+0] = r;
                data[i+1] = g;
                data[i+2] = b;
                data[i+3] = 255;
            }
        }
    });

    contextA.putImageData(imageDataA, 0, 0);
    contextB.putImageData(imageDataB, 0, 0);

    const encoder = new GIFEncoder(imageWidth, imageHeight);
    encoder.createReadStream().pipe(fs.createWriteStream('output/'+inputFilename.split('.')[0]+'.gif'));
    encoder.start();
    encoder.setRepeat(0); // 0 = repeat -1 = no repeat
    encoder.setDelay(500);
    encoder.setQuality(1); // lower is better 1 is lowest

    encoder.addFrame(contextA);
    encoder.addFrame(contextB);
    encoder.finish();
});
