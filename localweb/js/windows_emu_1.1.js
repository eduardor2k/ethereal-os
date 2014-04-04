$(function() {
	var window = $(".window");
	//Draggable
	window.draggable({ 
		cancel: '.window_inner, .buttonrow',
		containment: '#handle_area',
		scroll: false,
		stack: '.window'
	});
	//Resizeable
	window.resizable({
		handles: 'n, e, s, w, ne, se, sw, nw',
		containment: '#handle_area',
		minHeight: 80,
		minWidth: 138,
		maxHeight: $('#handle_area').height()-33,
		maxWidth: $('#handle_area').width()
	});
});
//Sortable
$(function() {
	var programlist = $("#programlist");
	programlist.sortable({
		axis: 'x',
		containment: '#programlist',
		tolerance: 'pointer',
		revert: true
	});
	programlist.disableSelection();
});
//Time
function checkTime(i) {
	if (i < 10) { i="0" + i; }
	return i;
};

$(document).ready(function() {
	var cur_h;
	var cur_w;
	var cur_offset;
	var window = $(".window");
	var start = $("#start");
	var startmenu = $("#startmenu");
	var aeropeek = $("#aero_peek");
	var windowall = $(".window > *");
	//Start Position
	window.each(function(i) {
		var offset = $(this).position();
		$(this).css({'left' : offset.left + i*30 + 'px', 'top' : offset.top + i*30 + 'px'});
	});
	// Close a Window
	$(".close").click(function () { 
		$(this).parents(".window").remove();
	});
	// Minimize a Window
	$(".min").click(function () { 
		$(this).parents(".window").fadeOut("fast");
	});
	// Aero Peek
	aeropeek.hover(
		function () { 
			windowall.fadeOut("normal");
			window.addClass("trans_win");
		},
		function() { 
			windowall.fadeIn("slow");
			window.removeClass("trans_win");
		}
	);
	aeropeek.click(function () { 
		if ( $(".window:visible").length == 0 ) {
			window.fadeIn("slow");
		} else {
			window.fadeOut("fast");
		};
	});
	// Doubleclick Maximize
	$(".title").dblclick(function () {
		var windowbox = $(this).parent(".window");
		var maxHeight = windowbox.resizable('option', 'maxHeight');
		var maxWidth = windowbox.resizable('option', 'maxWidth');
		if ( windowbox.hasClass("maximized") == false ) {
			cur_h = windowbox.height();
			cur_w = windowbox.width();
			cur_offset = windowbox.position()
			windowbox.addClass("maximized");
			windowbox.height(maxHeight);
			windowbox.width(maxWidth);
			windowbox.animate({top:0,left:0},0);
		} else {
			windowbox.removeClass("maximized");
			windowbox.height(cur_h);
			windowbox.width(cur_w);
			windowbox.animate({
				top: cur_offset.top,
				left: cur_offset.left
			},0);
		};
	});
	// Maximize Button
	window.find(".max").click(function () {
		var windowbox = $(this).parent().parent(".window");
		var maxHeight = windowbox.resizable('option', 'maxHeight');
		var maxWidth = windowbox.resizable('option', 'maxWidth');
		if ( windowbox.hasClass("maximized") == false ) {
			cur_h = windowbox.height();
			cur_w = windowbox.width();
			cur_offset = windowbox.position()
			windowbox.addClass("maximized");
			windowbox.height(maxHeight);
			windowbox.width(maxWidth);
			windowbox.animate({top:0,left:0},0);
		} else {
			windowbox.removeClass("maximized");
			windowbox.height(cur_h);
			windowbox.width(cur_w);
			windowbox.animate({
				top: cur_offset.top,
				left: cur_offset.left
			},0);
		};
	});
	// Add Focus
	window.last().addClass("focus_win");
	window.mousedown(function () { 
		$(".focus_win").removeClass("focus_win");
		$(this).addClass("focus_win");
	});
	// Remove Focus
	$("#taskbar,#handle_area").not("#handle_area *").mousedown(function () { 
		window.removeClass("focus_win");
	});
	$("body *").not("#start,#startmenu,#startmenu *,#taskbar,#page").mousedown( function () {
		if ( start.hasClass("active") ) {
			start.removeClass("active");
			startmenu.hide();
		};
	});
	// Startmenu
	start.mousedown( function () {
		if ( $(this).hasClass("active") ) {
			$(this).removeClass("active");
			startmenu.hide();
		} else {
			$(this).addClass("active");
			startmenu.show();
		};
	});
	// Clock
	setInterval( function() {
		var d = new Date();
		var m = d.getMonth()+1;
		$("#clock").html(checkTime(d.getHours())+":"+checkTime(d.getMinutes())+"<br/>"+checkTime(d.getDate())+"."+checkTime(m)+"."+d.getFullYear());
	}, 1000 );
});