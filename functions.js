$(function(){
    $(".navigation, .behindov").click(function(){
        $(".navigation").toggleClass("navisopen");
    });
});

$(function(){
    $(".navigation, .behindov").click(function(){
        $("nav").toggleClass("opennav");
    });
});
$(function(){
    $(".navigation, .behindov").click(function(){
        $(".behindov").toggleClass("appear");
    });
});
$(function(){
    $(".navigation, .behindov").click(function(){
        $(".mmbb").toggleClass("bringmenu");
    });
});

$(".link").click(function () {
    var url = this.href;
    setTimeout(function () {
        location.href = url;
    }, 1490);
    return false;
});
$('.navigation, .behindov').click(function(){
  if ($('#icon-wrap-2').hasClass('toClose')){
    $('#icon-wrap-2').removeClass('toClose').addClass('toOpen');
  } else {
    $('#icon-wrap-2').removeClass('toOpen').addClass('toClose');
  }
});
