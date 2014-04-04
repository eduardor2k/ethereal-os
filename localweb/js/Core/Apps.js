function Apps(){
    this.counter = 0;
    this.apps = [];

    oSelf = this;

    this.launch = function(appName){
        var obj = window[appName];
        if(typeof obj == 'undefined')
        {
            alert('App '+appName+' not found');
            return;
        }
        if(typeof obj.Init == 'undefined')
        {
            alert('Method '+appName+'.Init() not found');
            return;
        }
        obj.Init(this.getNewPid());
        this.apps.push(obj);
    }

    /**
     * Returns a unique pid for the app
     * @returns {number}
     */
    this.getNewPid = function(){
        return this.counter++;
    }
}