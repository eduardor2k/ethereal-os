$.widget( "ethereal.ethDialog", {
    // Default options.
    options: {
        title: 'Default',
        width: 500,
        minWidth: 300,
        height: 400,
        minHeight: 200
    },
    _create: function() {
        this._createContent();
        this._createButtonBar();
        this._createTitlebar();

        this.uiDialog.resizable();
        this.uiDialog.draggable({cancel: '.window_inner'});
    },
    _createContent: function() {
        this.uiDialog = $("<div></div>")
            .addClass('window')
            .css('width',this.options.width+'px')
            .css('min-width',this.options.minWidth+'px')
            .css('height',this.options.height+'px')
            .css('min-height',this.options.minHeight+'px')
            .prependTo( $('body') );

        this.uiInnerContent = $("<div></div>")
            .addClass('window_inner')
            .prependTo(this.uiDialog);

        this.element.prependTo(this.uiInnerContent);
    },
    _createTitlebar: function() {
        this.uiDialogTitleBar = $("<h4></h4>")
            .addClass('title')
            .text(this.options.title)
            .prependTo( this.uiDialog );

    },
    _createButtonBar: function() {

        var mainWindow = this.uiDialog;


        this.uiDialogButtonBar = $("<div></div>")
            .addClass('btn_row')
            .prependTo( this.uiDialog );

        this.uiDialogButtonMinimize = $("<a>_</a>")
            .addClass('btn')
            .addClass('min')
            .attr('title','Minimize')
            .prependTo(this.uiDialogButtonBar)
            .click(function(){
                mainWindow.css('display','none');
            });

        this.uiDialogButtonMaximize = $("<a>o</a>")
            .addClass('btn')
            .addClass('max')
            .attr('title','Maximize')
            .prependTo(this.uiDialogButtonBar)
            .click(function(){
                console.log($(this));

                mainWindow.css('left','0px')
                    .css('top','0px')
                    .css('width',$( window ).width()+'px')
                    .css('height',$( window ).height()+'px');
            });

        this.uiDialogButtonClose = $("<a>x</a>")
            .addClass('btn')
            .addClass('close')
            .attr('title','Close')
            .prependTo(this.uiDialogButtonBar)
            .click(function(){
                mainWindow.css('display','none');
            });
    }
});