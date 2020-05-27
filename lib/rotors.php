<?php
/**
 * Rotors
 *
 * @author Jonic Linley <jonic@100yen.co.uk>
 */
require_once ROTORS_ROOT . '/config/application.php';
require_once ROTORS_ROOT . '/app/helpers/application_helper.php';
require_once ROTORS_ROOT . '/app/models/page.php';

$url = urldecode(
    parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH)
);
$path = $url;

if ($url == '/') {
    $path = '/home';
}

$page = new Page($path, $url);

if ($page->not_found()) {
    http_response_code(404);
    $page = new Page('/404', $url);
}

require_once ROTORS_ROOT . '/app/layouts/application.php';
