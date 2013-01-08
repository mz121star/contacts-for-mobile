$(document).bind("mobileinit", function(){
    //apply overrides here
    $.mobile.defaultPageTransition="flip";
    $.mobile.loader.prototype.options.text = "loading";
    $.mobile.loader.prototype.options.textVisible = true;
    $.mobile.loader.prototype.options.theme = "b";
    $.mobile.loader.prototype.options.html = "";
    $.mobile.touchOverflowEnabled = true;
    $.mobile.allowCrossDomainPages = true;
    $.mobile.phonegapNavigationEnabled = true;

});

