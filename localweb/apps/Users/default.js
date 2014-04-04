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
        "Users": {
            "Init": init
        }
    });
    function init() {
        var html = '<div class="UsersManager"></div>';
        $('body').append(html);
        var e = $('.UsersManager');
        e.dialog({
            resizable: true,
            width: 600,
            height: 400,
            modal: true
        });
    }
})(jQuery);