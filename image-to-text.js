const fs = require('fs');
const {createCanvas, loadImage} = require('canvas');
const pokemonData = require('./pokemon-data.js').data;

/*let allTypes = [];
Object.keys(pokemonData).forEach(key => {
    const data = pokemonData[key];

    [data.typePrimary, data.typeSecondary].forEach(type => {
        if (type) {
            type = type.toLowerCase();

            if (allTypes.indexOf(type) == -1) {
                allTypes.push(type);
            }
        }
    });
});
console.log(allTypes);*/

let lines = [];
let n = 0;

function next() {
    n ++;

    if (n > 386) {
        console.log(lines.join('\n'));
        return;
    }

    loadImage('pokemon/' + n + '.png').then(image => {
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

                split.push(s);
            }

            const pokemon = pokemonData[n];
            let typePrimary = pokemon.typePrimary.substring(0, 2).toLowerCase();
            const lineNumber = ('00'+y).substr(-2);

            lines.push([lineNumber+'d', typePrimary].concat(split).join(' '));
            lines.unshift([lineNumber+'u', typePrimary].concat(split).join(' '));
        }

        next();
    });
}

next();
