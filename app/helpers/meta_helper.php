<?php

global $config;
global $page;

function page_meta()
{
    $meta = implode(
        "\n",
        [
            static_meta(),
            transient_meta(),
        ]
    );

    echo $meta;
}

function static_meta()
{
    return '';
}

function transient_meta()
{
    return implode(
        "\n",
        [
            html_title(),
            html_description(),
            icons(),
            opengraph(),
            twitter(),
        ]
    );
}

function html_title()
{
    // <title><title>
    return '';
}

function html_description()
{
    // <meta name="description" content="" />
    return '';
}

function icons()
{
    // <link rel="icon" href="/path/to/favicon-32.png" sizes="32x32" />
    // <link rel="icon" href="/path/to/favicon-57.png" sizes="57x57" />
    // <link rel="icon" href="/path/to/favicon-76.png" sizes="76x76" />
    // <link rel="icon" href="/path/to/favicon-96.png" sizes="96x96" />
    // <link rel="icon" href="/path/to/favicon-128.png" sizes="128x128" />
    // <link rel="icon" href="/path/to/favicon-192.png" sizes="192x192" />
    // <link rel="icon" href="/path/to/favicon-228.png" sizes="228x228" />
    // <link rel="shortcut icon" sizes="196x196" href="/path/to/favicon-196.png" />
    // <link rel="apple-touch-icon" href="/path/to/favicon-120.png" sizes="120x120" />
    // <link rel="apple-touch-icon" href="/path/to/favicon-152.png" sizes="152x152" />
    // <link rel="apple-touch-icon" href="/path/to/favicon-180.png" sizes="180x180" />
    return '';
}

function opengraph()
{
    // <meta property="og:description" content="" />
    // <meta property="og:image" content="" />
    // <meta property="og:title" content="" />
    // <meta property="og:url" content="" />
    return '';
}

function twitter()
{
    // <meta name="twitter:description" content="" />
    // <meta name="twitter:image" content="" />
    // <meta name="twitter:title" content="" />
    return '';
}
