/***
 * Contains basic SlickGrid formatters.
 *
 * NOTE:  These are merely examples.  You will most likely need to implement something more
 *        robust/extensible/localizable/etc. for your use!
 *
 * @module Formatters
 * @namespace Slick
 */

(function ($) {
    // register namespace
    $.extend(true, window, {
        "Login": {
            "Init": Init,
            "DoLogin": DoLogin,
            "LogOut": LogOut,
            "Register": Register
        }
    });

    function Init() {
        var html = '<div id="LoginDialog"></div>';
        $('body').append(html);

        var e = $('#LoginDialog');
        e.dialog({
            resizable: false,
            width: 350,
            height: 250,
            modal: true,
            buttons: {
                "LogIn": function() {
                    var obj = {};
                    obj.username = $('#LoginDialog input[type="text"]').val();
                    obj.password = $('#LoginDialog input[type="password"]').val();

                    $.post('/app/Login/logIn/',{ data: obj },function(json){
                        var result = $.parseJSON(json)
                        console.log(result);
                        if(result === true)
                        {
                            $('#LoginDialog').html('<p>Loading Desktop</p>');
                            location.reload(true);
                            return;
                        }
                        alert(result.msg);
                    });
                    return false;
                }
            }
        });

        /*e.window({
            title:'Login',
            width:300,
            height:200,
            closable:false,
            draggable:true,
            maximizable:false,
            minimizable: false,
            collapsible: false
        });*/

        var html = '<p class="intro">Welcome to the login screen!<br />Plese insert your login username & password</p>' +
            '<form method="post">' +
            '<p class="username"><input type="text" name="username" placeholder="your.username@domain.com" /></p>' +
            '<p class="password"><input type="password" name="password" placeholder="Password2014" /></p>' +
            '</form>';
        e.append(html);
    }

    function DoLogin() {

    }

    function LogOut() {
        $.post('/app/Login/logOut/',function(){
            location.reload(true);
        });
    }

    function Register() {

    }
})(jQuery);