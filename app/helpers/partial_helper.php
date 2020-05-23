<?php

function render_partial($partial, $arguments = [])
{
    global $root;

    $partial_file = $root . '/app/views/' . $partial . '.php';

    if (file_exists($partial_file)) {
        if (is_array($arguments)) {
            extract($arguments);
        }

        include $partial_file;
    } else {
        exit('<h1>Unable to include partial: ' . $partial_file . '</h1>');
    }
}
