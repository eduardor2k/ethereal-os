<?php
/**
 * Created by JetBrains PhpStorm.
 * User: Eduardo
 * Date: 2/02/14
 * Time: 6:23
 * To change this template use File | Settings | File Templates.
 */
namespace Apps\Desktop;

use R;

class Desktop
{
    public function __construct()
    {

    }

    public function loadIcons()
    {
        return R::getAll('SELECT * FROM app_desktop_icons as icons LEFT JOIN apps ON icons.app = apps.id');
    }
}