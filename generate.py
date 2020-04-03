import gpt_2_simple as gpt2

sess = gpt2.start_tf_sess()
gpt2.load_gpt2(sess, run_name='pokerun1')

for i in range(1, 25):
    text = gpt2.generate(sess, run_name='pokerun1', prefix=' ', temperature=0.7, return_as_list=True)[0]

    text_file = open('texts/%i.txt' % i, 'w')
    text_file.write(text)
    text_file.close()