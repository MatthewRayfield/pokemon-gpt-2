#import random
#import time
#import gpt_2_simple as gpt2

width = 64
height = 64

#run_name = 'pokerun6.0-30000'

sess = gpt2.start_tf_sess()
gpt2.load_gpt2(sess, run_name=run_name)

def blankLines():
    lines = []
    for i in range(0, height):
        lines.append('')
    return lines


for ii in range(0,1):
    #sess = gpt2.reset_session(sess)
    #gpt2.load_gpt2(sess, run_name=run_name)

    lines = blankLines()

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
                split = line.split(' ')[:width + 2]

                if len(split) < 50:
                    break;

                marker = split[0]
                if len(marker) == 3:
                    try:
                        index = int(marker[0:2])
                    except:
                        break

                    if lastIndex != None:
                        if marker[2] == 'd' and index < lastIndex:
                            break
                        elif marker[2] == 'u' and index > lastIndex:
                            break
                    lastIndex = index

                    split[0] = marker.replace('u', 'd')

                    if not hasColor:
                        for character in split[2:]:
                            if character != '~' and character != '`':
                                hasColor = True
                                break

                    while len(split) < width:
                        split.append('`')

                    lines[index] = ' '.join(split)

        if not hasColor:
            print('no color')
            linePairs = blankLines()
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
            #text_file = open('texts/%03d-%i.txt' % (temp, int(time.time())), 'w')
            text_file = open('/content/drive/My Drive/pokemon-output-texts-6.0/30000-%03d-%i.txt' % (temp, int(time.time())), 'w')
            text_file.write('\n'.join(lines))
            text_file.close()
            print('saved !')
            break

        prefix = '\n'.join(section)
        print('\n\nprefix:\n%s' % prefix)
