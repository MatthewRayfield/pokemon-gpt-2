const fs = require('fs');
const {createCanvas, loadImage} = require('canvas');

process.argv.slice(2).forEach(path => {
    const inputFilename = path.split('/').slice(-1)[0];

    loadImage(path).then(image => {
        const width = image.width;
        const height = image.height;

        const canvas = createCanvas(width, height);
        const context = canvas.getContext('2d');

        context.clearRect(0, 0, width, height);
        context.drawImage(image, 0, 0);
        let imageData = context.getImageData(0, 0, width, height);
        let data = imageData.data;

        let coords = [];

        for (let i = 0; i < width; i ++) {
            coords.push({x: i, y: 0});        // top
            coords.push({x: i, y: height-1}); // bottom
        }
        for (let i = 0; i < height; i ++) {
            coords.push({x: 0, y: i});       // left
            coords.push({x: width-1, y: i}); // right
        }

        while (coords.length > 0) {
            const coord = coords.pop();
            let x = coord.x;
            let y = coord.y;
            let i = ((y*width) + x) * 4;

            if (x > 0 || x < width) {
                if (y > 0 || y < height) {
                    if (data[i+0] == 255 && data[i+1] == 255 && data[i+2] == 255 && data[i+3] == 255) {
                        data[i+3] = 0;

                        coords.push({x: x  , y: y-1}); // up
                        coords.push({x: x  , y: y+1}); // down
                        coords.push({x: x-1, y: y  }); // left
                        coords.push({x: x+1, y: y  }); // right
                    }
                }
            }
        }

        context.clearRect(0, 0, width, height);
        context.putImageData(imageData, 0, 0);

        const stream = canvas.createPNGStream();
        const out = fs.createWriteStream('color-no-background/'+inputFilename.split('.')[0]+'.png');
        stream.pipe(out);
    });
});
