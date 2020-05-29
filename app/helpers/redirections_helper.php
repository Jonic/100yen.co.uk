<?php
$redirections = [
    '/tetris' => '/writing/tetris',
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
