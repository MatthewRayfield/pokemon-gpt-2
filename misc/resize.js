const fs = require('fs');
const {createCanvas, loadImage} = require('canvas');

process.argv.slice(2).forEach(path => {
    const inputFilename = path.split('/').slice(-1)[0];

    loadImage(path).then(image => {
        const width = image.width;
        const height = image.height;

        let canvas = createCanvas(width, height);
        let context = canvas.getContext('2d');
        context.clearRect(0, 0, width, height);
        context.drawImage(image, 0, 0);

        let imageData = context.getImageData(0, 0, width, height);
        let data = imageData.data;

        let left;

        for (let x = 0; x < width; x ++) {
            for (let y = 0; y < height; y ++) {
                let i = ((y*width) + x) * 4;

                if (data[i+3] == 255) {
                    left = x;
                    break;
                }
            }
            if (left != undefined) {
                break;
            }
        }

        let right;

        for (let x = width-1; x >= 0; x --) {
            for (let y = 0; y < height; y ++) {
                let i = ((y*width) + x) * 4;

                if (data[i+3] == 255) {
                    right = x;
                    break;
                }
            }
            if (right != undefined) {
                break;
            }
        }

        let top;

        for (let y = 0; y < height; y ++) {
            for (let x = 0; x < width; x ++) {
                let i = ((y*width) + x) * 4;

                if (data[i+3] == 255) {
                    top = y;
                    break;
                }
            }
            if (top != undefined) {
                break;
            }
        }

        let bottom;

        for (let y = height-1; y >= 0; y --) {
            for (let x = 0; x < width; x ++) {
                let i = ((y*width) + x) * 4;

                if (data[i+3] == 255) {
                    bottom = y;
                    break;
                }
            }
            if (bottom != undefined) {
                break;
            }
        }

        let cropWidth = right - left +1;
        let cropHeight = bottom - top +1;

        console.log(cropWidth, cropHeight);

        let canvasWidth = 64;
        let canvasHeight = 64;
        let x = Math.floor((canvasWidth - cropWidth) / 2);
        let y = Math.floor((canvasHeight - cropHeight) / 2);
        canvas = createCanvas(canvasWidth, canvasHeight);
        context = canvas.getContext('2d');
        context.clearRect(0, 0, cropWidth, cropHeight);
        context.drawImage(image, left, top, cropWidth, cropHeight, x, y, cropWidth, cropHeight);

        const stream = canvas.createPNGStream();
        const out = fs.createWriteStream('all-resized/'+inputFilename.split('.')[0]+'-'+Date.now()+'.png');
        stream.pipe(out);
    });
});
