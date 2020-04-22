import random
import time
import gpt_2_simple as gpt2

sess = gpt2.start_tf_sess()
gpt2.load_gpt2(sess, run_name='pokerun3')

for ii in range(0,10):
    lines = []
    for i in range(0, 56):
        lines.append('')

    prefix = '<00>'
    good = False
    temp = 80 #random.randint(0,30) + 70

    while True:
        text = gpt2.generate(sess, run_name='pokerun3', prefix=prefix, temperature=(temp/100), return_as_list=True)[0]
        print(text)

        newLines = text.split('\n')

        lastIndex = None
        for line in newLines:
            split = line.split(' ')[:57]

            if not good:
                for number in split[1:]:
                    try:
                        value = int(number)
                    except:
                        continue

                    if value < 9:
                        good = True
                        break

        if not good:
            print('NOT good..')
            continue

        for line in newLines:
                split = line.split(' ')[:57]

                if len(split) < 50:
                    break;

                marker = split[0]
                if len(marker) == 4 and marker[0] == '<' and marker[3] == '>':
                    try:
                        index = int(marker[1:3])
                    except:
                        continue
                    lines[index] = ' '.join(split)

        lastIndex = 0 
        for i in range(0, 56):
            if lines[i]:
                lastIndex = i
            elif lastIndex:
                break

        print('%i / 55' % lastIndex)

        if lastIndex == 55:
            print('\n'.join(lines))
            text_file = open('texts/%03d-%i.txt' % (temp, int(time.time())), 'w')
            text_file.write('\n'.join(lines))
            text_file.close()
            print('saved !')
            break
        else:
            prefix = '\n'.join(lines[lastIndex-5:lastIndex])
