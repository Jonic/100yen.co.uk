<?php
/**
 * Rotors - Just enough PHP to get you off the ground
 */
define('ENV', 'development');
error_reporting(E_ALL);

if ($_SERVER['REMOTE_ADDR'] != '127.0.0.1') {
    define('ENV', 'production');
    error_reporting(0);
}

define('ROTORS_ROOT', $_SERVER['DOCUMENT_ROOT']);

require_once ROTORS_ROOT . '/lib/rotors.php';
