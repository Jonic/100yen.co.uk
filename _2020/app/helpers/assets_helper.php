<?php
global $config;

function application_script()
{
    echo script('/app/assets/javascripts/application.js');
}

function application_styles()
{
    echo styles('/app/assets/stylesheets/application.css');
}

function page_script()
{
    global $page;

    if ($page->script) {
        script($page->asset('script'));
    }
}

function page_styles()
{
    global $page;

    if ($page->styles) {
        styles($page->asset('styles'));
    }
}

function script($src)
{
    $now = time();
    echo '<script src="' . $src . '?whatevs=' . $now .'"></script>';
}

function styles($href)
{
    $now = time();
    echo '<link rel="stylesheet" href="' . $href . '?whatevs=' . $now .'" />';
}
