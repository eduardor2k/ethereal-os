<?php
/**
 * Created by JetBrains PhpStorm.
 * User: Eduardo
 * Date: 2/02/14
 * Time: 6:23
 * To change this template use File | Settings | File Templates.
 */
namespace Apps\Warehouse;

use R;

class Warehouse
{
    public function __construct()
    {

    }

    public function getProducts()
    {
        return R::getAll('SELECT * FROM appwarehouseproducts');
    }

    public function addProduct($params)
    {
        $data = $_POST['data'];

        $b = R::dispense( 'appwarehouseproducts' );
        $b->code = $data['code'];
        $b->name = $data['name'];
        $b->purchase_price = $data['purchasePrice'];
        $b->sale_price = $data['salePrice'];

        R::store( $b );
        return true;
    }
}