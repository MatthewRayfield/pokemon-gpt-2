import gpt_2_simple as gpt2
from datetime import datetime

gpt2.download_gpt2(model_name="124M")

session = gpt2.start_tf_sess()
gpt2.finetune(session,
        dataset='all-images.txt',
        model_name='124M',
        steps=10000,
        restore_from='latest',
        run_name='pokemon-gpt-2-run',
        print_every=10,
        sample_every=500,
        save_every=500
    )
