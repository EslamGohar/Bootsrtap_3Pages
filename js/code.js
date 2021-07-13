/*jslint browser: true*/
/*global $, jQuery, alert, console*/

$(function () {
    
    'use strict';
    
    $('.carousel').carousel({
        
        interval: 4000
    });
    
    
    //Show Color Option when click on The Gear
    
    $(".gear-check").click(function () {
        
        $(".color-box").fadeToggle();
    });
    
    // Change Theme Color On Click
    
    var colorLi = $(".color-box ul li"),
        scrollButton = $("#scroll-top");
    
    colorLi
        .eq(0).css("backgroundColor", "#E41B17").end()
        .eq(1).css("backgroundColor", "#FF890B").end()
        .eq(2).css("backgroundColor", "#BF17B9").end()
        .eq(3).css("backgroundColor", "#233DB5");
    
    colorLi.click(function () {
        
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
        
    });
    
    // Check Scroll Top Element 
    
   /* $(window).scroll(function () {
        
        if ($(this).scrollTop() >= 800) {
            
            scrollButton.show();
            
        } else {
            
            scrollButton.hide();
            
        }
        
    });
    
    // Click On Scroll Top Button
        
    scrollButton.click(function () {
            
        $('html, body').animate({scrollTop: 0}, 2000);
            
    }); */
    
    // Trigger Nice Scroll Plugin
    
    $("html").niceScroll({
        
        cursorcolor: "#585858",
        cursorborder: "1px solid #545454",
        cursorborderradius: 5,
        cursorwidth: 8,
        scrollspeed: 150,
        nativeparentscrolling: false,
        touchbehavior: false,
        cursoropacitymax: 0.7,
        autohidemode: false,
        horizrailenabled: false
    });
    
    /*$("html").css({"overflow-x": "hidden"});
    $("#boxscroll").niceScroll({horizrailenabled: false});*/

    // Loading Screen
    
    $(window).load(function () {
        
        $(".loading-overlay .spinner").fadeOut(2500, function () {
          
            $("body").css("overflow", "auto");
            
            $(this).parent().fadeOut(2500, function () {
                
                $(this).remove();
            });
        });
    });
});