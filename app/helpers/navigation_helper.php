<?php
$nav_links = [
    [
        'path' => '/',
        'text' => 'Home',
    ],
    [
        'path' => '/jonic',
        'text' => 'Jonic?',
    ],
    [
        'path' => '/code',
        'text' => 'Code',
    ],
    [
        'path' => '/words',
        'text' => 'Words',
    ],
    [
        'path' => '/music',
        'text' => 'Music',
    ],
    [
        'path' => '/adhd',
        'text' => 'My ADHD',
    ],
    [
        'path' => '/日本語',
        'text' => '日本語',
    ],
    [
        'path' => '/contact',
        'text' => 'Contact',
    ],
];

function nav_link_classnames($nav_link)
{
    $base_classname = 'c-nav__link';
    $classnames = [
        $base_classname,
    ];

    // if (is_active($nav_link['path'])) {
    //     array_push($classnames, "#{$base_classname}--is-active");
    // }

    return join(
        ' ',
        $classnames
    );
}

function is_active($path)
{
    global $page;
    return $page->slug == $path;
}

