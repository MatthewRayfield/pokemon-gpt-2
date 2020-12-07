import sys
import math
from PIL import Image

for path in sys.argv[1:]:
    image = Image.open(path).convert('RGBA')
    pixels = image.load()
    width = image.size[0]
    height = image.size[1]

    lines = []

    for y in range(height):
        split = ['%02dd' % y]

        for x in range(width):
            color = pixels[x, y] 

            s = '~'

            if len(color) < 4 or color[3] > 128:
                r = color[0]
                g = color[1]
                b = color[2]
               
                if r == 85 and g == 85 and b == 85:
                    s = 'a' # use grayscale character 1

                elif r == 170 and g == 170 and b == 170:
                    s = 'b' # use grayscale character 2

                else: # use one of 64 color characters
                    mR = math.floor(r/64)
                    mG = math.floor(g/64)
                    mB = math.floor(b/64)

                    c = 0;

                    c += mR
                    c = c << 2
                    c += mG
                    c = c << 2
                    c += mB

                    s = chr(c+33)

            split.append(s)

        lines.append(' '.join(split))

    reversed = []
    for line in lines:
        reversed.insert(0, (line.replace('d ', 'u ', 1)))

    print('\n'.join(reversed))
    print('\n'.join(lines))
