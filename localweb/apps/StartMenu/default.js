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
        "StartMenu": {
            "Init": Init
        }
    });

    function Init() {
        var html = '<div id="startbar"> \
            <div id="win"> \
            <div id="menu"> \
                <div class="left-menu"> \
                    <ul> \
                        <li><a href="#" class="arrow"><div class="fleft foldr"></div>My Documents</a> \
                            <div class="recent"> \
                                <hr /> \
                                <ul> \
                                    <li><a href="#">Recent 1</a></li> \
                                    <li><a href="#">Recent 2</a></li> \
                                    <li><a href="#">Recent 3</a></li> \
                                    <li><a href="#">Film-Bokep.3gp</a></li> \
                                    <li><a href="#">Film-Nyokep.3gp</a></li> \
                                    <li><a href="#">Film-Enyak.3gp</a></li> \
                                    <li><a href="#">Film-Babeh.3gp</a></li> \
                                </ul> \
                            </div> \
                        </li> \
                        <li><a href="#"><div class="fleft foldr"></div>Your Documents</a></li> \
                        <li><a href="#"><div class="fleft foldr"></div>Our Documents</a></li> \
                        <li><a href="#" class="arrow"><div class="fleft mw"></div>Microsoft Office Word 2007</a> \
                            <div class="recent"> \
                                <hr /> \
                                <ul> \
                                    <li><a href="#">Andai.docx</a></li> \
                                    <li><a href="#">Saja.docx</a></li> \
                                    <li><a href="#">Engkau.docx</a></li> \
                                    <li><a href="#">Tahu.docx</a></li> \
                                    <li><a href="#">Betapa.docx</a></li> \
                                    <li><a href="#">Aku.docx</a></li> \
                                    <li><a href="#">Kebelet.docx</a></li> \
                                    <li><a href="#">Pipis.docx</a></li> \
                                </ul> \
                            </div> \
                        </li> \
                        <li><a href="#"><div class="fleft op">O</div>Opera Web Browser</a></li> \
                        <li><a href="#"><div class="fleft ie">e</div>Internet Explorer</a></li> \
                        <li><a href="#"><div class="fleft np"></div>Notepad</a></li> \
                        <li><a href="#"><div class="fleft ai">Fl</div>Adobe Fl</a></li> \
                        <li class="all-prog"><a href="#">All Programs</a> \
                            <div class="recent all"> </div>  \
                        </li> \
                    </ul> \
                    <form id="search" action="" name="prikitiw"><input type="text" placeholder="Search programs and files" /></form> \
                </div> <!-- leftmenu --> \
                <div class="right-menu"> \
                    <ul> \
                        <li><a href="#">Taufik</a></li> \
                        <li><a href="#">Documents</a></li> \
                        <li><a href="#">Pictures</a></li> \
                        <li><a href="#">Music</a></li> \
                        <li style="border-top:1px solid rgba(255,255,255,0.1);padding-top:2px;"><a href="#">Games</a></li> \
                        <li style="border-bottom:1px solid rgba(255,255,255,0.1);padding-top:5px;margin-bottom:2px;"><a href="#">Computer</a></li> \
                        <li><a href="#">Control Panel</a></li> \
                        <li><a href="#">Device and Printer</a></li> \
                        <li><a href="#">Default Programs</a></li> \
                        <li><a href="#">Help and Support</a></li> \
                    </ul> \
                    <div class="shutdown"> \
                        <div class="lf">Log Out</div> \
                        <div class="clear"></div> \
                    </div> \
                    <div id="kontener"> \
                        <div class="admin"></div> \
                    </div> \
                </div> <!-- rightmenu --> \
                <div class="clear"></div> \
            </div> <!-- menu --> \
            <div id="cont-win" title="Start"> \
                <div class="w1"></div><div class="w2"></div> \
                <div class="clear"></div> \
                <div class="w3"></div><div class="w4"></div> \
                <div class="clear"></div> \
            </div> \
            </div> <!-- win --> \
        <div id="list" style="display: none"> \
            <div class="opened tunggal"><div class="foldr small"></div> \
                <div class="screensht"> \
                    <div class="col1 fold"> \
                        <div class="close">&times;</div><div class="kotak"></div> \
                    </div> \
                </div> \
            </div> \
            <div class="opened tunggal"><div class="foldr np small"></div> \
                <div class="screensht"> \
                    <div class="col1 ntpad"> \
                        <div class="close">&times;</div><div class="kotak"></div> \
                    </div> \
                </div> \
            </div> \
            <div class="opened pilled"> \
                <div class="screensht"> \
                    <div class="col1 blank"> \
                        <div class="close">&times;</div><div class="kotak"></div> \
                    </div> \
                    <div class="col2 blank"> \
                        <div class="close">&times;</div><div class="kotak"></div> \
                    </div> \
                    <div class="clear"></div> \
                </div> \
            </div> <!-- list --> \
            <div class="clear"></div> \
        </div> <!-- opened pilled --> \
            <div class="opened hide"></div> \
        <div id="fright"> \
            <div class="plus"> \
                <div class="screensht"> \
                    <div class="grup"> \
                        <b>&#169; 29-Nov-2011</b><br /> \
                        <a href="https://plus.google.com/108949996304093815163/about" target="_blank">About the Author</a> \
                    </div> \
                </div> \
            </div> <!-- plus --> \
            <div class="connection" title="Local Area Connection is Now Ready to Prikitiw..."></div> \
            <div class="speker" title="Digunakan untuk Mendengarkan Hal yang Baik-Baik"></div> \
            <div class="jam">11:18 WIB</div> \
            <div class="clear"></div> \
        </div> \
 \
            </div> <!-- startbar -->';
        $('body').append(html);

        $('#startbar .shutdown').click(function(){
            Login.LogOut();
        });
    }

    function DoLogin() {

    }

    function LogOut() {

    }

    function Register() {

    }
})(jQuery);
