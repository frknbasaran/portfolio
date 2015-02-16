// @progress-system.js

progressJs().setOptions({theme: 'orangeRadiusInputs'}).start().autoIncrease(1, 500);

if(window.attachEvent) {
    window.attachEvent('onload', function() {
        progressJs().end();
    });
} else {
    if(window.onload) {
        var curronload = window.onload;
        var newonload = function() {
            curronload();
            progressJs().end();
        };
        window.onload = newonload;
    } else {
        window.onload = function(){
            progressJs().end();
        };
    }
}

//
var fjs   = document.getElementsByTagName('script')[0];
var frag  = document.createDocumentFragment();
var js;

var addSrc = function(src,isRequire) {
    js = document.createElement('script');
    js.src = src;

    if(isRequire==true) {
        var customAttribute     =   document.createAttribute("data-main");
        customAttribute.value   =   "static/script/main";

        js.setAttributeNode(customAttribute);
    }

    frag.appendChild(js);
}

addSrc('static/script/require.js',true);

fjs.parentNode.insertBefore(frag, fjs);
//