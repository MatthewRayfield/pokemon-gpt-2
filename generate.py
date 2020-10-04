import sys
import random
import time
import gpt_2_simple as gpt2

width = 64
height = 64
startFile = ''
run_name = 'pokemon-gpt-2-multigen-250000'

sess = gpt2.start_tf_sess()

def blankLines():
    lines = []

    for i in range(0, height):
        lines.append('')

    return lines

def readFile(filepath):
    with open(filepath) as f:
        content = f.read()

    return content

for ii in range(0, 10):
    sess = gpt2.reset_session(sess)
    gpt2.load_gpt2(sess, run_name=run_name)

    debug = []
    lines = blankLines()

    prefix = '_ _ _ '
    temp = random.randint(0, 40) + 80
    hasColor = False
    first = True

    cycleCount = 0

    while True:
        debug.append('\n\ncycle %i' % cycleCount)
        debug.append('prefix:')
        debug.append(prefix)
        cycleCount += 1

        if startFile and first:
            text = readFile(startFile)
        else:
            text = gpt2.generate(sess, run_name=run_name, prefix=prefix, temperature=(temp/100), return_as_list=True)[0]

        first = False

        debug.append('output:')
        debug.append(text)
        print('\n\noutput:')
        print(text)

        newLines = text.split('\n')

        direction = None
        lastIndex = None
        for line in newLines:
                split = line.split(' ')[:width + 2]

                if len(split) < 55:
                    break;

                marker = split[0]
                if len(marker) == 3:
                    try:
                        index = int(marker[0:2])
                    except:
                        break

                    if direction == None:
                        direction = marker[2]

                    if marker[2] != direction:
                        debug.append('direction changed')
                        print('direction changed')
                        break

                    if lastIndex != None:
                        if marker[2] == 'd' and index <= lastIndex:
                            debug.append('bad line order')
                            print('bad line order')
                            break
                        elif marker[2] == 'u' and index >= lastIndex:
                            debug.append('bad line order')
                            print('bad line order')
                            break
                    lastIndex = index

                    split[0] = marker.replace('u', 'd')

                    if not hasColor:
                        for character in split[2:]:
                            if character != '~' and character != '`':
                                hasColor = True
                                break

                    while len(split) < width:
                        split.append('~')

                    try:
                        lines[index] = ' '.join(split)
                    except IndexError:
                        debug.append('line number out of range')
                        print('line number out of range')
                        break

        if not hasColor:
            debug.append('no color')
            print('no color')
            lines = blankLines()
            continue

        topIndex = None
        for i in range(0, height):
            if lines[i]:
                topIndex = i
                break

        bottomIndex = None
        for i in range(topIndex, height):
            if lines[i]:
                bottomIndex = i
            else:
                break

        debug.append('top %i bottom %i' % (topIndex, bottomIndex))
        print('\n\ntop %i bottom %i' % (topIndex, bottomIndex))

        sectionSize = 5
        if topIndex > 0:
            section = lines[topIndex:min(topIndex+sectionSize+1, bottomIndex+1)]
            section.reverse()
            for i in range(0, len(section)):
                section[i] = section[i].replace('d', 'u')

        elif bottomIndex < height - 1:
            section = lines[max(bottomIndex-sectionSize, topIndex):bottomIndex+1]

        else:
            print('\n'.join(lines))
            filename = '%03d-%i' % (temp, int(time.time()))

            text_file = open('output/%s.txt' % filename, 'w')
            text_file.write('\n'.join(lines))
            text_file.close()

            debug_file = open('output/%s.log' % filename, 'w')
            debug_file.write('\n'.join(debug))
            debug_file.close()

            print('saved !')
            break

        prefix = '\n'.join(section)
        print('\n\nprefix:\n%s' % prefix)
