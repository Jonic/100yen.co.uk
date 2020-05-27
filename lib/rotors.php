<?php
/**
 * Rotors
 *
 * @author Jonic Linley <jonic@100yen.co.uk>
 */
echo 'made it to rotors.php<br />';
require_once ROTORS_ROOT . '/config/application.php';
require_once ROTORS_ROOT . '/app/helpers/application_helper.php';
echo 'oh boy we about to require the page model<br />';
require_once ROTORS_ROOT . '/app/models/page.php';
use Jonic\Rotors\Page;
echo 'we have a page<br />';
echo 'getting url<br />';
$url = urldecode(
    parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH)
);
echo '$url = ' . $url . '<br />';
$path = $url;

if ($url == '/') {
    $path = '/home';
}
echo $path . '<br />';

$page = new Page($path, $url);

if ($page->not_found()) {
    http_response_code(404);
    $page = new Page('/404', $url);
}

require_once ROTORS_ROOT . '/app/layouts/application.php';
