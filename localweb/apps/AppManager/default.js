function AppManager(){

    this.appName = 'AppManager';
    this.app;

    var oSelf = this;

    this.Init = function(pid) {
        this.__proto__.Init(pid);
        this.app = $('<div></div>')
            .addClass(this.getAppName())
            .attr('id','App-'+this.getPid());

        $('body').append(this.app);

        var e = $('.AppManager');
        e.ethDialog({
            title: 'AppManager',
            width: 200,
            minWidth: 200,
            height: 200
        });
        this.loadProcesses();
    }

    this.loadProcesses = function(){
        var e = $('.AppManager');
        e.html('');
        var item;
        var x;
        for(x in appMng.apps)
        {
            item = appMng.apps[x];
            console.log(appMng.apps);
            console.log(item);
            e.append(item.getAppName()+' | Pid: ' +x+ '<br />');
        }
        window.setTimeout('AppManager.loadProcesses()',1000);
    }
}
AppManager.prototype = new App();
var AppManager = new AppManager();