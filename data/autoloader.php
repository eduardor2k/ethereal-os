<?php
include __DIR__ . '/lib/Aura.Autoload/src/Loader.php';

$loader = new \Aura\Autoload\Loader;
$loader->register();
$loader->addPrefix('Aura\Router', __DIR__.'/lib/Aura.Router/src');
$loader->addPrefix('Aura\Sql',__DIR__.'/lib/Aura.Sql/src');
$loader->addPrefix('Apps',__DIR__.'/Apps');
$loader->addPrefix('Ethereal', __DIR__.'/lib/Ethereal');
$loader->addPrefix('Ethereal\App', __DIR__.'/lib/Ethereal/App');
$loader->addPrefix('League\Plates', __DIR__.'/lib/League/Plates/src');