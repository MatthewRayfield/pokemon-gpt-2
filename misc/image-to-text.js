const fs = require('fs');
const {createCanvas, loadImage} = require('canvas');

process.argv.slice(2).forEach(path => {
    loadImage(path).then(image => {
        const lines = [];

        const width = image.width;
        const height = image.height;

        const canvas = createCanvas(width, height);
        const context = canvas.getContext('2d');

        context.clearRect(0, 0, width, height);
        context.drawImage(image, 0, 0);
        let imageData = context.getImageData(0, 0, width, height);
        let data = imageData.data;

        for (let y = 0; y < height; y ++) {
            let split = [];

            for (let x = 0; x < width; x ++) {
                let i = ((y*width) + x) * 4;

                let s = '~';

                if (data[i+3] > 128) {
                    let r = data[i+0];
                    let g = data[i+1];
                    let b = data[i+2];

                    if (r == 85 && g == 85 && b == 85) {
                        s = 'a'; // use grayscale character #1
                    }
                    else if (r == 170 && g == 170 && b == 170) {
                        s = 'b'; // use grayscale character #2
                    }
                    else { // use one of 64 color characters
                        let mR = Math.floor(r/64);
                        let mG = Math.floor(g/64);
                        let mB = Math.floor(b/64);

                        let c = 0;

                        c += mR;
                        c = c << 2;
                        c += mG;
                        c = c << 2;
                        c += mB;

                        s = String.fromCharCode(c+33);
                    }
                }

                split.push(s);
            }

            const lineNumber = ('00'+y).substr(-2);

            lines.push([lineNumber+'d'].concat(split).join(' '));
        }

        const reversed = [];
        lines.forEach(line => {
            reversed.unshift(line.replace('d ', 'u '));
        });

        console.log(reversed.join('\n'));
        console.log(lines.join('\n'));
    });
});
