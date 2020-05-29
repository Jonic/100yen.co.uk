<?php
$redirections = [
    '/tetris' => '/stuff/tetris',
    '/stuff/wave' => '/stuff/wave/function',
    '/stuff/wave/function' => '/stuff/wave/function/collapse'
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
