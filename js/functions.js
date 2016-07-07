$(function() {
  $('body').addClass('fadeinbody');
});
$(function() {
  $('.navigation').addClass('bringinnav');
});
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
$(function(){
    $(".navigation, .behindov").click(function(){
        $(".sidelogo").toggleClass("sideborder");
    });
});
$(function(){
    $(".navigation, .behindov").click(function(){
        $("body").toggleClass("noscroll");
    });
});
$(function(){
    $(".navigation").hover(function(){
        $(".icon-wrap, .sidelogo").toggleClass("scaleup");
    });
});
$(function(){
    $(".link").click(function(){
        $(".behindov").toggleClass("appear");
    });
});
$(function(){
    $(".link").click(function(){
        $(".navigation").toggleClass("navisopen");
    });
});

$(function(){
    $(".link").click(function(){
        $("nav").toggleClass("opennav");
    });
});
$(function(){
    $(".link").click(function(){
        $("body").toggleClass("fadeoutbody");
    });
});
$(function(){
    $(".link").click(function(){

      setTimeout(
                  function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
      },
              1500);

    });
});

$(".link").click(function () {
    var url = this.href;
    setTimeout(function () {
        location.href = url;
    }, 4500);
    return false;
});
$('.navigation, .behindov').click(function(){
  if ($('#icon-wrap-2').hasClass('toClose')){
    $('#icon-wrap-2').removeClass('toClose').addClass('toOpen');
  } else {
    $('#icon-wrap-2').removeClass('toOpen').addClass('toClose');
  }
});
if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
    skrollr.init({
        forceHeight: false
    });
}
