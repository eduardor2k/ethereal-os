<?php
include __DIR__ . '/../data/autoloader.php';
require __DIR__.'/../data/lib/rb.phar';

R::setup('mysql:host=localhost;dbname=etherealos',
    'root','');

use Aura\Router\RouterFactory;

$router_factory = new RouterFactory;
$router = $router_factory->newInstance();

// add a simple unnamed route with params
$router->add('apps','/app/{app}/{method}/?{params}?');

$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$route = $router->match($path, $_SERVER);

if(!$route)
{
    $apps = new \Ethereal\App\Loader();
    $apps->printIndex();
    die;
}

if($route->params['action'] == 'apps')
{
    $controller = $route->params['app'];
    $method = $route->params['method'];
    $className = 'Apps\\'.$controller.'\\'.$controller;
    $app = new $className();
    echo json_encode($app->$method($route->params['params']));
    die;
}

echo json_encode('App not found');
