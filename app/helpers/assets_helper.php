<?php
global $config;

function application_script()
{
    echo script('/app/assets/javascripts/master.js');
}

function application_styles()
{
    echo styles('/app/assets/stylesheets/master.css');
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
    echo '<script src="' . $src . '"></script>';
}

function styles($href)
{
    echo '<link rel="stylesheet" href="' . $href . '" />';
}
