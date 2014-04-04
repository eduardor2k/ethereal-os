<?php
/**
 * Created by JetBrains PhpStorm.
 * User: Eduardo
 * Date: 2/02/14
 * Time: 22:22
 * To change this template use File | Settings | File Templates.
 */
namespace Ethereal;

class Session
{
    private $_data = array();

    public function __construct()
    {
        session_start();
        if(!array_key_exists('Ethereal',$_SESSION))
        {
            return;
        }
        $this->_data = $_SESSION['Ethereal'];
    }

    public function userIsLoggedIn()
    {
        if(!array_key_exists('loggedIn',$this->_data))
        {
            return false;
        }
        return $this->_data['loggedIn'];
    }
}