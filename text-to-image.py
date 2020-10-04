import sys
from PIL import Image

def readFile(filepath):
    with open(filepath) as f:
        content = f.read()

    return content

for path in sys.argv[1:]:
    filename = path.split('/')[-1].split('.')[0]

    text = readFile(path)
    lines = text.split('\n')

    imageWidth = 0
    imageHeight = 0

    for line in lines:
        split = line.split(' ')

        marker = split[0]
        if len(marker) == 3:
            index = int(marker[0:2])

            width = len(split) - 1
            height = index + 1

            if width > imageWidth:
                imageWidth = width;

            if height > imageHeight:
                imageHeight = height

    pixels = []
    for y in range(imageHeight):
        for x in range(imageWidth):
            pixels.append((0, 0, 0, 0))

    for line in lines:
        split = line.split(' ')

        marker = split[0]
        if len(marker) == 3:
            index = int(marker[0:2])

            for x in range(len(split) - 1):
                s = split[x + 1]

                if s != '~':
                    r = 0
                    g = 0
                    b = 0
                    
                    if s == 'a':
                        r = g = b = 107
                    elif s == 'b':
                        r = g = b = 187
                    else:
                        c = ord(s[0]) - 33

                        b = (c & 3) * 64
                        if b == 192:
                            b += 63

                        c = c >> 2
                        g = (c & 3) * 64
                        if g == 192:
                            g += 63

                        c = c >> 2
                        r = (c & 3) * 64
                        if r == 192:
                            r += 63

                    i = (index * imageWidth) + x

                    pixels[i] = (r, g, b, 255)

    image = Image.new('RGBA', (imageWidth, imageHeight))
    image.putdata(pixels)
    image.save('output/%s.png' % filename)
