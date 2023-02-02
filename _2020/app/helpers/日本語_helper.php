<?php
function ruby($漢字, $振り仮名)
{
    return join(
        '',
        [
            '<ruby>',
            "<rb>{$漢字}</rb>",
            '<rp>(</rp>',
            "<rt>{$振り仮名}</rt>",
            '<rp>)</rp>',
            '</ruby>',
        ]
    );
}
