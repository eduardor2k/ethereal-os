/***
 * Contains basic SlickGrid formatters.
 *
 * NOTE:  These are merely examples.  You will most likely need to implement something more
 *        robust/extensible/localizable/etc. for your use!
 *
 * @module Formatters
 * @namespace Slick
 */
function Desktop()
{
    this.appName = 'Desktop';
    var oSelf = this;

    this.Init = function(pid)
    {
        var html = '<div class="desktop"></div>';
        $('body').append(html);
        this.loadIcons();
        /*$.contextMenu({
            selector: '.desktop',
            callback: function(key, options) {
                var m = "clicked: " + key;
                window.console && console.log(m) || alert(m);
            },
            items: {
                "edit": {name: "Edit", icon: "edit"},
                "cut": {name: "Cut", icon: "cut"},
                "copy": {name: "Copy", icon: "copy"},
                "paste": {name: "Paste", icon: "paste"},
                "delete": {name: "Delete", icon: "delete"},
                "sep1": "---------",
                "quit": {name: "Quit", icon: "quit"}
            }
        });*/
    }

    this.loadIcons = function()
    {
        $.getJSON('/app/Desktop/loadIcons/',function(json){
            var html = '';
            for(var i = 0; i < json.length; i++)
            {
                var item = json[i];
                html += '<div class="icon-properties icon-'+item.icon+'">' +
                    '<a href="#" appName="'+item.name+'">'+item.label+'</a>' +
                    '</div>';
            }
            $('.desktop').html(html);

            $('.icon-properties a').click(function(){
                var name = $(this).attr('appName');
                //alert('launch App:'+name);
                appMng.launch(name);
                //window[pid].Init();
                return false;
            });
        });
    }
}
Desktop.prototype = new App();
var Desktop = new Desktop();