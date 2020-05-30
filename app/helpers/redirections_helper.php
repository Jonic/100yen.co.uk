<?php
$redirections = [
    '/tetris' => '/code/tetris',
    '/code/wave' => '/code/wave/function',
    '/code/wave/function' => '/code/wave/function/collapse'
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
