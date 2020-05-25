const fs = require('fs');
const gifuct = require('gifuct-js');
const {createCanvas, loadImage} = require('canvas');

for (let i = 1; i <= 251; i ++) {
    const gifData = fs.readFileSync(`pokemon/${i}.gif`);

    const gif = gifuct.parseGIF(gifData);
    const frames = gifuct.decompressFrames(gif, true);

    let firstFrameImageData;
    let mostDifferentImageData;
    let mostDifferences = 0;
    let lastDisposalType;
    frames.forEach((frame, ii) => {
        const canvas = createCanvas(60, 60);
        const context = canvas.getContext('2d');

        const patchCanvas = createCanvas(frame.dims.width, frame.dims.height);
        const patchContext = patchCanvas.getContext('2d');
        const frameImageData = patchContext.createImageData(frame.dims.width, frame.dims.height);
        
        frameImageData.data.set(frame.patch);
        patchContext.putImageData(frameImageData, 0, 0);

        if (lastDisposalType == 2) {
            context.clearRect(0, 0, 60, 60);
        }
        context.drawImage(patchCanvas, frame.dims.left, frame.dims.top);
        lastDisposalType = frame.disposalType;

        const renderedFrameImageData = context.getImageData(0, 0, 60, 60);

        if (!firstFrameImageData) {
            firstFrameImageData = renderedFrameImageData;
        }
        else {
            const dataA = renderedFrameImageData.data;
            const dataB = firstFrameImageData.data;
            let differences = 0;
            for (let iii = 0; iii < dataA.length; iii +=4) {
                const cA = (dataA[iii+0] + dataA[iii+1] + dataA[iii+2]) == (255*3);
                const cB = (dataB[iii+0] + dataB[iii+1] + dataB[iii+2]) == (255*3);

                if (cA != cB) {
                    differences ++;
                }
            }

            if (differences > mostDifferences) {
                mostDifferences = differences;
                mostDifferentImageData = renderedFrameImageData;
            }
        }
    });

    [firstFrameImageData, mostDifferentImageData].forEach((imageData, ii) => {
        const canvas = createCanvas(60, 60);
        const context = canvas.getContext('2d');
        context.putImageData(imageData, 0, 0);
        const stream = canvas.createPNGStream();
        const out = fs.createWriteStream(`animation-frames/${i}-${ii}.png`);
        stream.pipe(out);
    });
}
