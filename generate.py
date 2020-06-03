import random
import time
import gpt_2_simple as gpt2

run_name = 'pokerun5.1-5000'

sess = gpt2.start_tf_sess()
gpt2.load_gpt2(sess, run_name=run_name)

def blankLinePairs():
    pairs = []
    for i in range(0, 60):
        pairs.append({'A': '', 'B': ''})
    return pairs

def interlacePairs(pairs):
    lines = []

    for pair in pairs:
        lines.append(pair['A'])
        lines.append(pair['B'])

    return lines

for ii in range(0,1):
    #sess = gpt2.reset_session(sess)
    #gpt2.load_gpt2(sess, run_name=run_name)

    linePairs = blankLinePairs()

    prefix = ''
    temp = 80 #random.randint(0,30) + 70
    hasColor = False

    while True:
        text = gpt2.generate(sess, run_name=run_name, prefix=prefix, temperature=(temp/100), return_as_list=True)[0]

        print('\n\noutput:');
        print(text)

        newLines = text.split('\n')

        lastIndex = None
        for line in newLines:
                split = line.split(' ')[:61]

                if len(split) < 40:
                    break;

                marker = split[0]
                if len(marker) == 6 and marker[0] == '<' and marker[5] == '>':
                    try:
                        index = int(marker[1:3])
                    except:
                        break

                    if lastIndex != None:
                        if marker[4] == 'd' and index < lastIndex:
                            break
                        elif marker[4] == 'u' and index > lastIndex:
                            break
                    lastIndex = index

                    split[0] = marker.replace('u>', 'd>')

                    if not hasColor:
                        for character in split[1:]:
                            if character != '~' and character != '`':
                                hasColor = True
                                break

                    while len(split) < 61:
                        split.append('`')

                    frameType = marker[3]

                    if not linePairs[index][frameType]:
                        linePairs[index][frameType] = ' '.join(split[:61])

        if not hasColor:
            print('no color')
            linePairs = blankLinePairs()
            continue

        # remove half pairs
        for pair in linePairs:
            if not pair['A'] or not pair['B']:
                pair['A'] = ''
                pair['B'] = ''

        topIndex = None
        for i in range(0, 60):
            pair = linePairs[i]
            if pair and pair['A'] and pair['B']:
                topIndex = i
                break

        bottomIndex = None
        for i in range(topIndex, 60):
            pair = linePairs[i]
            if pair and pair['A'] and pair['B']:
                bottomIndex = i
            else:
                break

        print('\n\ntop %i bottom %i' % (topIndex, bottomIndex))

        sectionSize = 4
        if topIndex > 0:
            pairs = linePairs[topIndex:min(topIndex+sectionSize+1, bottomIndex+1)]
            pairs.reverse()
            section = interlacePairs(pairs)
            for i in range(0, len(section)):
                section[i] = section[i].replace('d>', 'u>')

        elif bottomIndex < 59:
            pairs = linePairs[max(bottomIndex-sectionSize, topIndex):bottomIndex+1]
            section = interlacePairs(pairs)

        else:
            lines = interlacePairs(linePairs)
            print('\n'.join(lines))
            text_file = open('texts/%03d-%i.txt' % (temp, int(time.time())), 'w')
            #text_file = open('/content/drive/My Drive/pokemon-output-texts-5.1-5000/%03d-%i.txt' % (temp, int(time.time())), 'w')
            text_file.write('\n'.join(lines))
            text_file.close()
            print('saved !')
            break

        prefix = '\n'.join(section)
        print('\n\nprefix:\n%s' % prefix)
