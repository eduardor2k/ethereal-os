<?php
/**
 * Created by JetBrains PhpStorm.
 * User: Eduardo
 * Date: 2/02/14
 * Time: 6:34
 * To change this template use File | Settings | File Templates.
 */
namespace Ethereal\App;

use Aura\Sql\ExtendedPdo;
use League\Plates\Template;
use League\Plates\Engine;

class Loader
{
    private $_apps = array();

    private $_init = array();

    public function __construct()
    {
        $pdo = new ExtendedPdo(
            'mysql:host=localhost;dbname=etherealos',
            'root',
            ''
        );

        foreach($pdo->query('SELECT * FROM apps')->fetchAll() as $item)
        {
            $this->_apps[$item['id']] = $item['name'];
        }

        $session = new \Ethereal\Session();
        $userId = 0;
        if($session->userIsLoggedIn())
        {
            $userId = 1;
        }

        $sql = 'SELECT * FROM init WHERE userId = "'.$userId.'"';
        foreach($pdo->query($sql)->fetchAll() as $item)
        {
            if(!array_key_exists($item['appId'],$this->_apps))
            {
                continue;
            }
            $this->_init[] = $this->_apps[$item['appId']];

        }
    }

    public function getJs()
    {
        return $this->_apps;
    }

    public function getInit()
    {
        return $this->_init;
    }

    public function printIndex()
    {
        $engine = new Engine(__DIR__.'/templates');
        $template = new Template($engine);
        $template->js = $this->getJs();
        $template->css = $this->getJs();
        $template->init = $this->getInit();
        echo $template->render('index');
    }
}