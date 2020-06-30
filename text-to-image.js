const fs = require('fs');
const {createCanvas, loadImage, createImageData} = require('canvas');

process.argv.slice(2).forEach(path => {
    const inputFilename = path.split('/').slice(-1)[0];

    const text = fs.readFileSync(path, 'utf8');
    const lines = text.split('\n');

    const typeCounts = {};
    let mostCount = 0;
    let mostType;

    let imageWidth = 0;
    let imageHeight = 0;
    lines.forEach(line => {
        const split = line.split(' ');
        const marker = split[0];

        let type = split[1];
        typeCounts[type] = typeCounts[type] ? typeCounts[type] + 1 : 1;
        if (typeCounts[type] > mostCount) {
            mostCount = typeCounts[type];
            mostType = type;
        }

        if (marker.length == 3) {
            const line = parseInt(marker.substring(0, 2));

            if (line > imageHeight) {
                imageHeight = line + 1;
            }

            const lineWidth = split.length - 2;

            if (lineWidth > imageWidth) {
                imageWidth = lineWidth;
            }
        }
    });

    const canvas = createCanvas(imageWidth, imageHeight);
    const context = canvas.getContext('2d');

    const imageData = createImageData(imageWidth, imageHeight);
    const data = imageData.data;

    lines.forEach(line => {
        const split = line.split(' ');
        const marker = split[0];

        if (marker.length) {
            const y = parseInt(marker.substring(0, 2));

            for (let x = 0; x < split.length-2; x ++) {
                let s = split[x+2] || '~';

                if (s != '~') {
                    let i = ((y*imageWidth) + x) * 4;

                    let c = s.charCodeAt(0)-33;

                    let b = (c & 3) * 64;
                    if (b == 192) b += 63;
                    c = c >> 2;
                    let g = (c & 3) * 64;
                    if (g == 192) g += 63;
                    c = c >> 2
                    let r = (c & 3) * 64;
                    if (r == 192) r += 63;

                    data[i+0] = r;
                    data[i+1] = g;
                    data[i+2] = b;
                    data[i+3] = 255;
                }
            }
        }
    });

    context.putImageData(imageData, 0, 0);

    const stream = canvas.createPNGStream();
    const out = fs.createWriteStream('output/'+mostType+'-'+inputFilename.split('.')[0]+'.png');
    stream.pipe(out);
});
