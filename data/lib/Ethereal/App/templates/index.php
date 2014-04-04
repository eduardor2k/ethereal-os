<!DOCTYPE HTML>
<html lang="en">
<head>
    <meta charset="utf-8">

    <link rel="stylesheet" type="text/css" href="/js/jquery-ui-1.10.4/themes/base/jquery.ui.all.css">
    <!-- <link rel="stylesheet" type="text/css" href="/js/easyui-1.3.5/themes/icon.css"> -->
    <link rel="stylesheet" type="text/css" href="/css/fluid.grid.css">
    <link rel="stylesheet" type="text/css" href="/css/default.css">
    <link rel="stylesheet" type="text/css" href="/css/dropdown.css">
    <link rel="stylesheet" type="text/css" href="/css/windows.css">
    <link rel="stylesheet" type="text/css" href="/js/jquery-contextmenu/src/jquery.contextMenu.css">
    <link rel="stylesheet" type="text/css" href="/js/ribbon/ribbon.css">
    <link rel="stylesheet" type="text/css" href="/js/ribbon/ribbon-icon.css">
    <link rel="stylesheet" type="text/css" href="/js/slickgrid/slick.grid.css" />

    <?php
    foreach($this->js as $css)
    {
        echo '<link rel="stylesheet" href="/apps/'.$css.'/default.css">'."\n\t";
    }
    ?>

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0-beta.1/angular.min.js"></script>
    <script src="/js/jquery-2.1.0.min.js"></script>
    <script src="/js/jquery-ui-1.10.4/jquery-1.10.2.js"></script>
    <script src="/js/jquery-ui-1.10.4/ui/jquery.ui.core.js"></script>
    <script src="/js/jquery-ui-1.10.4/ui/jquery.ui.widget.js"></script>
    <script src="/js/jquery-ui-1.10.4/ui/jquery.ui.mouse.js"></script>
    <script src="/js/jquery-ui-1.10.4/ui/jquery.ui.draggable.js"></script>
    <script src="/js/jquery-ui-1.10.4/ui/jquery.ui.position.js"></script>
    <script src="/js/jquery-ui-1.10.4/ui/jquery.ui.resizable.js"></script>
    <script src="/js/jquery-ui-1.10.4/ui/jquery.ui.button.js"></script>
    <script src="/js/jquery-ui-1.10.4/ui/jquery.ui.dialog.js"></script>
    <script src="/js/jquery-ui-1.10.4/ui/jquery.ui.selectable.js"></script>
    <script src="/js/jquery-ui-1.10.4/ui/jquery.ui.draggable.js"></script>
    <script src="/js/jquery-ui-1.10.4/ui/jquery.ui.droppable.js"></script>
    <script src="/js/jquery-contextmenu/src/jquery.contextMenu.js"></script>
    <script src="/js/slickgrid/lib/jquery.event.drag-2.2.js"></script>
    <script src="/js/slickgrid/slick.core.js"></script>
    <script src="/js/slickgrid/slick.grid.js"></script>
    <!-- <script src="/js/easyui-1.3.5/jquery.easyui.min.js"></script>
    <script src="/js/ribbon/jquery.ribbon.js"></script>-->
    <script src="/js/Core/App.js"></script>
    <script src="/js/Core/Apps.js"></script>
    <script src="/js/Core/Window.js"></script>

    <?php
    foreach($this->css as $js)
    {
        echo '<script src="/apps/'.$js.'/default.js"></script>'."\n\t";
    }
    ?>
</head>
<body>
<script type="text/javascript">
    var appMng;
    $( document ).ready(function() {
        var vs = $('body').height()
        if(vs == 0)
        {
            $('body').height($( document ).height());
        }

        appMng = new Apps();
        <?php
        foreach($this->init as $item)
        {
            echo 'appMng.launch("'.$item.'");';
        }
        ?>
    });
</script>

</body>
</html>