//jQuery(document).ready(function($) {
//    $("").click(function(){ 
//        
//    });
//});


$(document).on('click', ".btn-browseup input[type='file']",function(){
    if ($(this).val()) {

        var filename = $(this).val().split("\\"),
            detailname = $(this).parents('.btn-browseup');
        console.log(detailname);
        filename = filename[filename.length-1];
        detailname.attr('data-content', filename);
    }
});


$(document).on('click', ".vacancy-list .btn-apply-now",function(){
    var tabsO = $(".custom-tabs .eael-tabs-content .clearfix"), 
        nav0 = $(".custom-tabs .eael-tabs-nav .eael-tab-inline-icon li");
    
    if (tabsO.hasClass("active")) {
        $(this).removeClass("active").addClass("inactive");
        
    }
    else if(tabsF.hasClass("inactive")) {
        $(this).removeClass("inactive").addClass("active"); 
        

    }
});


$(document).on('click', ".custom-tabs .btn-apply-now",function(){
    var content = $(".custom-tabs .eael-tabs-content .clearfix"), 
        nav = $(".custom-tabs .eael-tabs-nav li");

    nav.each(function(key, value) {

        if (nav.hasClass("active")) {
            $(this).removeClass("active").addClass("inactive");

        }
        else {
            $(this).removeClass("inactive").addClass("active"); 
        }
    });

    content.each(function(key, value) {

        if (content.hasClass("active")) {
            $(this).removeClass("active").addClass("inactive");

        }
        else {
            $(this).removeClass("inactive").addClass("active"); 
        }
    });
});





$(".vacancy-list .btn-apply-now").click(function(){ 
    var content0 = $(".custom-tabs .eael-tabs-content .clearfix"), 
        contentF = $(".custom-tabs .eael-tabs-content .clearfix:not(:first-child)"), 
        nav0 = $(".custom-tabs .eael-tabs-nav .eael-tab-inline-icon li"),
        navF = $(".custom-tabs .eael-tabs-nav .eael-tab-inline-icon li:not(:first-child)");

    content0.each(function(key, value) {
//        console.log($(this).length);
        if (content.length >= 5) {
            if (contentF.hasClass("active")) {
                $(this).removeClass("active").addClass("inactive");
            }
            else if(contentF.hasClass("inactive")) {
                $(this).removeClass("inactive").addClass("active"); 

            }
            if( key == 3 ){
               $(this).removeClass("inactive").addClass("active"); 
            }
        }
        else{
            if ($(this).hasClass("active")) {
                $(this).removeClass("active").addClass("inactive");
            }
            else if($(this).hasClass("inactive")) {
                $(this).removeClass("inactive").addClass("active");
            }
        }
    });

    nav0.each(function() {
//        console.log($(this).length);
        if (nav0.length >= 3) {
            if (navF.hasClass("active")) {
                $(this).removeClass("active").addClass("inactive");
            }
            else if(navF.hasClass("inactive")) {
                $(this).removeClass("inactive").addClass("active");
            }
        }
        else{
            if ($(this).hasClass("active")) {
                $(this).removeClass("active").addClass("inactive");
            }
            else if($(this).hasClass("inactive")) {
                $(this).removeClass("inactive").addClass("active");
            }
        }
    });
});