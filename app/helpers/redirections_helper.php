<?php
$redirections = [
    '/code/black' => '/code/black/lives/matter',
    '/code/black/lives' => '/code/black/lives/matter',
    '/code/wave' => '/code/wave/function',
    '/code/wave/function' => '/code/wave/function/collapse',
    '/tetris' => '/code/tetris',
];

function check_redirections($path)
{
    global $redirections;

    if (isset($redirections[$path])) {
        http_response_code(301);
        header("Location: {$redirections[$path]}");
        exit();
    }
}
