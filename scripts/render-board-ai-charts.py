"""Render the committed loss CSV snapshots; requires matplotlib and Pillow.

Run with a Python environment containing those libraries. No training runs,
models, external services or original repository paths are required.
"""
import csv
import os
import tempfile
from pathlib import Path

os.environ.setdefault('MPLCONFIGDIR', str(Path(tempfile.gettempdir()) / 'portfolio-matplotlib'))
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib.ticker import MaxNLocator
from PIL import Image

out = Path(__file__).resolve().parents[1] / 'public/assets/board-game-ai'
for slug in ('gomoku', 'xiangqi'):
    with (out / f'{slug}-loss.csv').open(newline='') as source:
        rows = list(csv.DictReader(source))
    for theme in ('dark', 'light'):
        dark = theme == 'dark'
        bg = '#11161c' if dark else '#ffffff'
        fg = '#b4bfcc' if dark else '#505f70'
        grid = '#27313c' if dark else '#e0e6ed'
        plt.rcParams.update({'font.family': 'DejaVu Sans', 'font.size': 12,
                             'axes.labelcolor': fg, 'xtick.color': fg,
                             'ytick.color': fg, 'text.color': fg})
        for mobile in (False, True):
            fig, axes = plt.subplots(2 if mobile else 1, 1 if mobile else 2,
                                     figsize=(3.8, 7) if mobile else (12, 4),
                                     dpi=150, facecolor=bg, layout='constrained')
            for ax, key, title, color in zip(
                axes, ('policy_loss', 'value_loss'), ('Policy loss', 'Value loss'),
                ('#85cff5' if dark else '#136b9e', '#dda96a' if dark else '#955c27')
            ):
                ax.set_facecolor(bg)
                ax.plot([int(r['iteration']) for r in rows], [float(r[key]) for r in rows],
                        color=color, linewidth=1.7)
                ax.set_title(title, loc='left', pad=18,
                             color='#eef3f7' if dark else '#171c24', fontsize=16)
                ax.set_xlabel('Training iteration', labelpad=12)
                ax.set_xlim(int(rows[0]['iteration']), int(rows[-1]['iteration']))
                ax.set_ylim(bottom=0)
                ax.yaxis.set_major_locator(MaxNLocator(4))
                ax.xaxis.set_major_locator(MaxNLocator(4 if mobile else 5, integer=True))
                ax.grid(axis='y', color=grid, linewidth=.6)
                for spine in ax.spines.values():
                    spine.set_visible(False)
                ax.tick_params(length=0, pad=8)
            stem = out / f'{slug}-loss-{theme}{"-mobile" if mobile else ""}'
            fig.savefig(stem.with_suffix('.png'), facecolor=bg)
            plt.close(fig)
            with Image.open(stem.with_suffix('.png')) as image:
                image.save(stem.with_suffix('.webp'), lossless=True)
    print(f'{slug}: {len(rows)} recorded iterations rendered')
