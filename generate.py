import random
import time
import gpt_2_simple as gpt2

sess = gpt2.start_tf_sess()
gpt2.load_gpt2(sess, run_name='pokerun4.3.1')

def blankLines():
    lines = []
    for i in range(0, 64):
        lines.append('')
    return lines

for ii in range(0,1):
    lines = blankLines()

    prefix = ''
    temp = 80 #random.randint(0,30) + 70
    hasColor = False

    while True:
        text = gpt2.generate(sess, run_name='pokerun4.3.1', prefix=prefix, temperature=(temp/100), return_as_list=True)[0]
        print(text)

        newLines = text.split('\n')

        lastIndex = None
        for line in newLines:
                split = line.split(' ')[:65]

                if len(split) < 50:
                    break;

                marker = split[0]
                if len(marker) == 5 and marker[0] == '<' and marker[4] == '>':
                    try:
                        index = int(marker[1:3])
                    except:
                        break

                    if lastIndex != None:
                        if marker[3] == 'd' and index < lastIndex:
                            break
                        elif marker[3] == 'u' and index > lastIndex:
                            break

                    split[0] = '<%02dd>' % index

                    if not hasColor:
                        for character in split[1:]:
                            if character != '~':
                                hasColor = True
                                break

                    while len(split) < 65:
                        split.append('~')

                    if not lines[index]:
                        lines[index] = ' '.join(split[:65])

        if not hasColor:
            print('no color')
            lines = blankLines()
            continue

        topIndex = None
        for i in range(0, 64):
            if lines[i]:
                topIndex = i
                break

        bottomIndex = None
        for i in range(topIndex, 64):
            if lines[i]:
                bottomIndex = i
            else:
                break

        print('top %i bottom %i' % (topIndex, bottomIndex))

        if topIndex > 0:
            section = lines[topIndex:min(topIndex+5, bottomIndex)]
            section.reverse()
            for i in range(0, len(section)):
                section[i] = section[i].replace('d', 'u')

        elif bottomIndex < 63:
           section = lines[max(bottomIndex-5, topIndex):bottomIndex]

        else:
            print('\n'.join(lines))
            text_file = open('texts/%03d-%i.txt' % (temp, int(time.time())), 'w')
            text_file.write('\n'.join(lines))
            text_file.close()
            print('saved !')
            break

        prefix = '\n'.join(section)
        print('prefix:\n%s' % prefix)
