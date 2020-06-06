<?php
$things = [
    '<span lang="ja">日本語を　勉強しています。</span>',
    'I&nbsp;have ADHD.',
    'I&nbsp;like to make things with <a class="c-link" href="/code">code</a>.',
    'I&nbsp;made <a class="c-link" href="https://jonic.itch.io/knifey-spoony">a video game</a> one time.',
    'I&nbsp;sing, and play guitar, drums, and piano.',
    'I&nbsp;sometimes make things out of electronics.',
    'I’m&nbsp;a Senior Software Engineer at <a class="c-link" href="https://www.raspberrypi.org">Raspberry Pi</a>.',
    'I’m&nbsp;from the UK.',
    'I’m&nbsp;named after Sonic the Hedgehog.',
    'I’m&nbsp;really good at <a class="c-link" href="/code/tetris">Tetris</a>.',
];
shuffle($things);
?>

<h1 class="c-type--page-title">Hiya! I’m Jonic.</h1>

<p class="c-type--lead">
    <?php echo implode("\n", $things); ?>
</p>

<p>
    This site is a work-in-progress. More coming soon. Maybe.
    Who knows. We all just saw that bit about me having ADHD.
</p>

<p>Find me around the web, if you like:</p>

<ul>
    <li><a class="c-link" href="https://twitter.com/Jonic">Twitter</a></li>
    <li><a class="c-link" href="https://www.instagram.com/Jonic/">Instagram</a></li>
    <li><a class="c-link" href="https://soundcloud.com/jonic">Soundcloud</a></li>
    <li><a class="c-link" href="https://github.com/Jonic">Github</a></li>
</ul>

<p class="c-shoutout">
    Thanks,
    <a
        class="c-link"
        href="https://twitter.com/lexaloffle/status/1052920070316339201"
    >
        Zep
    </a>
</p>

<div class="c-two-js"></div>

<script src="https://cdn.jsdelivr.net/npm/two.js@0.7.0-stable.1/build/two.min.js"></script>
