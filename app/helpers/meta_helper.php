<?php
echo 'I’m in the meta helper?<br />';
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

function build_meta_element($meta)
{
    $output = ['<meta'];

    foreach ($meta as $attribute => $value) {
        $output[] = "$attribute=\"$value\"";
    }

    $output[] = '/>';

    return implode(" ", $output);
}

function canonican_url()
{
    global $config;
    global $page;

    return implode([$config['url'], $page->url]);
}

function cover_image($cover_image)
{
    global $config;

    return implode(
        [
            $config['url'],
            $cover_image,
        ]
    );
}

function static_meta()
{
    global $config;
    $output = [];

    foreach ($config['meta']['static'] as $meta) {
        $output[] = build_meta_element($meta);
    }

    return implode("\n", $output);
}

function transient_meta()
{
    global $config;
    global $page;

    $meta_config = array_merge($config['meta']['transient'], $page->config);

    return implode(
        "\n",
        [
            html_title($meta_config['title']),
            html_description($meta_config['description']),
            icons($meta_config['icon']),
            opengraph($meta_config),
            twitter($meta_config),
        ]
    );
}

function html_title($title)
{
    global $config;
    $site_name = $config['site_name'];
    return "<title>{$title} — {$site_name}</title>";
}

function html_description($description)
{
    return "<meta name=\"description\" content=\"$description\" />";
}

function icons($icon)
{
    return implode(
        "\n",
        [
            "<link rel=\"shortcut icon\" href=\"$icon\" />",
            "<link rel=\"apple-touch-icon\" href=\"$icon\" />",
        ]
    );
}

function opengraph($meta_config)
{
    $cover_image = cover_image($meta_config['cover_image']);
    $url = canonican_url();

    return implode(
        "\n",
        [
            "<meta property=\"og:description\" content=\"{$meta_config['description']}\" />",
            "<meta property=\"og:image\" content=\"{$cover_image}\" />",
            "<meta property=\"og:title\" content=\"{$meta_config['title']}\" />",
            "<meta property=\"og:url\" content=\"$url\" />",
        ]
    );
}

function twitter($meta_config)
{
    $cover_image = cover_image($meta_config['cover_image']);

    return implode(
        "\n",
        [
            "<meta name=\"twitter:description\" content=\"{$meta_config['description']}\" />",
            "<meta name=\"twitter:image\" content=\"{$cover_image}\" />",
            "<meta name=\"twitter:title\" content=\"{$meta_config['title']}\" />",
        ]
    );
}
