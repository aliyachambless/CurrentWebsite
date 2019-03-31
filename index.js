$(document).ready(function(){
    $("#codinglink").click(function(){
        hide();
        $("#codingouterwrapper").fadeToggle(800);
        $("#aboutwrapper").hide(800);
        $("#artouterwrapper").hide(800);
        $("#designouterwrapper").hide(800);
        $("#aboutlink").css({"border-bottom": "0px #FFF solid"});
//        if($("body").css("background-image") == "none"){
//            $("body").css({"background-image" : "url(background-small.jpg)"});
//        }
        $(".f").css({"position" : "relative", "clear" : "both"});
    });
});

$(document).ready(function(){
    $("#aboutlink").click(function(){
        hide();
        $("#codingouterwrapper").hide(800);
        $("#aboutwrapper").fadeToggle(800);
        $("#artouterwrapper").hide(800);
        $("#designouterwrapper").hide(800);
        $("#aboutlink").css({"border-bottom": "1px #FFF solid"});
//        if($("body").css("background-image") == "none"){
//            $("body").css({"background-image" : "url(background-small.jpg)"});
//        }
        $(".f").css({"position" : "relative", "clear" : "both", "padding-top" : "60px"});
    });
});

$(document).ready(function(){
    $("#artlink").click(function(){
        hide();
        $("#artouterwrapper").fadeToggle(800);
        $("#codingouterwrapper").hide(800);
        $("#aboutwrapper").hide(800);
        $("#designouterwrapper").hide(800);
        $("#aboutlink").css({"border-bottom": "0px #FFF solid"});
        $("body").css({"background" : "rgba(0,0,0,1)"});
        $(".f").css({"position" : "relative", "clear" : "both"});
    });
});

$(document).ready(function(){
    $("#designlink").click(function(){
        hide();
        $("#designouterwrapper").fadeToggle(800);
        $("#artouterwrapper").hide(800);
        $("#codingouterwrapper").hide(800);
        $("#aboutwrapper").hide(800);
        $("#aboutlink").css({"border-bottom": "0px #FFF solid"});
        $("body").css({"background" : "rgba(0,0,0,1)"});
        $(".f").css({"position" : "relative", "clear" : "both"});
    });
});

$(document).ready(function(){
    $(".containerLarge").click(function(){
        $(this).toggleClass("bigger");   
    });
});

$(document).ready(function(){
    $(".container").click(function(){
        $(this).toggleClass("bigger");   
    });
});

function resizeIframe(obj) {
    console.log("okk");
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
}
