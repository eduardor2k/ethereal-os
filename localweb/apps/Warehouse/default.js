/***
 * Contains basic SlickGrid formatters.
 *
 * NOTE:  These are merely examples.  You will most likely need to implement something more
 *        robust/extensible/localizable/etc. for your use!
 *
 * @module Formatters
 * @namespace Slick
 */
function Warehouse(){

    this.appName = 'WarehouseApp';
    this.app;

    var oSelf = this;

    this.Init = function(pid) {
        this.__proto__.Init(pid);
        this.app = $('<div></div>')
            .addClass(this.getAppName())
            .attr('id','App-'+this.getPid());

        $('body').append(this.app);

        var e = $('.WarehouseApp');
        e.ethDialog({
            title: 'Almacen',
            width: 650,
            minWidth: 450,
            height: 400
        });
        this.loadMenu();
    }

    this.loadMenu = function(){
        var html =
            '<div class="ui-ribbon">\
                <div title="Home">\
                    <div class="ribbon-group">\
                        <div class="ribbon-toolbar" style="width:120px">\
                            <div class="ribbon-icon ribbon-icon-input">\
                                <a href="#">Entrada</a>\
                            </div>\
                            <div class="ribbon-icon ribbon-icon-output">\
                                <a href="#">Salida</a>\
                            </div>\
                        </div>\
                        <div class="ribbon-group-title">Input-Output</div>\
                    </div>\
                    <div class="ribbon-group-sep"></div>\
                    <div class="ribbon-group">\
                        <div class="ribbon-toolbar" style="width:200px">\
                            <div class="ribbon-icon ribbon-icon-product-add">\
                                <a href="#">Agregar Producto</a>\
                            </div>\
                            <div class="ribbon-icon ribbon-icon-product-list">\
                                <a href="#">Lista de Productos</a>\
                            </div>\
                            <div class="ribbon-icon ribbon-icon-warehouse">\
                                <a href="#">Almacen</a>\
                            </div>\
                        </div>\
                        <div class="ribbon-group-title">Products</div>\
                    </div>\
                </div>\
                <div style="clear: both"></div>\
            </div>';
        $('.WarehouseApp').append(html);

        $('.WarehouseApp .ribbon-icon-product-add').click(function(){
            oSelf.addProduct();
        });

        $('.WarehouseApp .ribbon-icon-product-list').click(function(){
            oSelf.listProducts();
        });

        $('.WarehouseApp .ribbon-icon-input').click(function(){
            oSelf.input();
        });

        $('.WarehouseApp .ribbon-icon-output').click(function(){
            oSelf.output();
        });
    }

    this.addProduct = function()
    {
        $('.WarehouseApp').html('');
        this.loadMenu();
        var html = '<form><fieldset>\
            <legend>Añadir Producto</legend>\
            <label for="code">Código</label>\
            <input name="code" class="required" maxlength="50" minlength="3" type="text">\
            <label for="name">Nombre</label>\
            <input name="name" class="required" maxlength="50" minlength="3" type="text">\
            <label for="purchase_price">Precio entrada</label>\
            <input name="purchase-price" id="purchase_price" class="number just_money" placeholder="0.00" type="text">\
            <label for="sale_price">Precio Salida</label>\
            <input name="sale-price" id="sale_price" class="number just_money" placeholder="0.00" type="text">\
            <div>\
                <input value="Añadir »" type="submit">\
            </div>\
        </fieldset></form>';
        $('.WarehouseApp').append(html);

        $('.WarehouseApp input[type="submit"]').click(function(){
            var obj = {};
            obj.code = $('.WarehouseApp input[name="code"]').val();
            obj.name = $('.WarehouseApp input[name="name"]').val();
            obj.name = $('.WarehouseApp input[name="name"]').val();
            obj.purchasePrice = $('.WarehouseApp input[name="purchase-price"]').val();
            obj.salePrice = $('.WarehouseApp input[name="sale-price"]').val();
            $.post('/app/Warehouse/addProduct/',{data: obj},function(data){
                oSelf.addProduct();
            });
        });
    }

    this.listProducts = function()
    {
        $('.WarehouseApp').html('');
        this.loadMenu();

        var html = '<div id="myGrid"></div>';

        $('.WarehouseApp').append(html);

        var grid;
        var columns = [
            {id: "id", name: "Id", field: "id"},
            {id: "code", name: "Code", field: "code"},
            {id: "name", name: "Name", field: "name"},
            {id: "purchase-price", name: "Purchase Price", field: "purchaseprice"},
            {id: "sale-price", name: "Sale Price", field: "saleprice"}
        ];

        var options = {
            enableCellNavigation: true,
            enableColumnReorder: false
        };

        $.getJSON('/app/Warehouse/getProducts/',function(data){
            $('.WarehouseApp tbody').append(html);
            console.log(data);
            grid = new Slick.Grid("#myGrid", data, columns, options);
        });
    }

    this.input = function(){
        $('.WarehouseApp').html('');
        this.loadMenu();

        var html = '<div class="container_12"><form><fieldset>\
            <div class="grid_12"><label>Entradas</label></div>\
            <div class="grid_9"><label for="code">Código</label>\
            <input type="text" name="code" class="code" tabindex="1" placeholder="Introduce código"></div>\
            <div class="grid_3"><label for="code">Unidades</label>\
            <input type="text" name="units" class="units" tabindex="2" placeholder="0"></div>\
            <div class="grid_9"><img src="/apps/Warehouse/img/barcodereader.png" /></div>\
            <div class="grid_3" style="text-align: center; padding-top: 10px"><button tabindex="3" class="submit">Guardar</button></div>\
            </fieldset></form></div>';
        $('.WarehouseApp').append(html);

        $('form',this.app).submit(function(){
            return false; //alert('Hi');
        });

        $('input[name=units]',this.app).keydown(function(event){
            if(event.which == 13){
                alert('submit');
            }
        });
        $('input[name=code]',this.app).focus();
    }


    this.output = function(){
        $('.WarehouseApp').html('');
        this.loadMenu();

        var html = '<div class="container_12"><form><fieldset>\
            <div class="grid_12" style="text-align: left"><img src="/apps/Warehouse/img/barcodereader.png" /></div>\
            <div class="grid_2"><label for="code">Unidades</label>\
            <input type="text" name="units" class="units" tabindex="1" placeholder="0"></div>\
            <div class="grid_7"><label for="code">Código</label>\
            <input type="text" name="code" class="code" tabindex="2" placeholder="Introduce código"></div>\
            <div class="grid_3"><label for="code">&nbsp;</label><button tabindex="3" class="submit">Guardar</button></div>\
            </fieldset></form></div>';
        $('.WarehouseApp').append(html);

        $('form',this.app).submit(function(){
            alert('Hi');
        });

        $('input[name=code]',this.app).keydown(function(event){
            if(event.which == 13){
                alert('submit');
            }
        });
        $('input[name=units]',this.app).focus();
    }
}
Warehouse.prototype = new App();

var Warehouse = new Warehouse();