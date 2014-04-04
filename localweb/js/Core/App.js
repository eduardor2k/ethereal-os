function App(){

    this.appName = '';
    this.pid = 0;

    var Oself = this;

    this.Init = function(pid){
        this.pid = pid;
        //alert('The App PID: '+pid);


    }

    /**
     * This method will return the unique identifier of the process
     */
    this.getPid = function(){
        return this.pid;
    }
    this.getAppName = function(){
        return this.appName;
    }
}