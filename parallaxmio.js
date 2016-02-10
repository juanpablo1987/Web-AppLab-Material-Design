$(window).scroll(function(){



var wScroll = $(this).scrollTop();

 $('.ciudad-delante').css({
 'transform' : 'translate(0px, '+ wScroll /5 +'%)'

});


  $('.ciudad-detras').css({
 'transform' : 'translate(0px, '+ wScroll /10 +'%)'

});

    $('.nube1').css({
 'transform' : 'translate(0px, -'+ wScroll /6 +'%)'

});

      $('.nube2').css({
 'transform' : 'translate(0px, -'+ wScroll /10 +'%)'

});

           $('.nube3').css({
 'transform' : 'translate(0px, -'+ wScroll /8 +'%)'

});


                  $('.moleculadesen-1').css({
 'transform' : 'translate(0px, -'+ wScroll /10 +'%)'

});


                                 $('.moleculadesen-2').css({
 'transform' : 'translate(0px, -'+ wScroll /6 +'%)'

});


                               $('.moleculaenfo').css({
 'transform' : 'translate(0px, '+ wScroll /10 +'%)'

});




                                 $('.moleculadesen-3').css({
 'transform' : 'translate(0px, -'+ wScroll /14 +'%)'

});                           



                                 $('.moleculadesen-4').css({
 'transform' : 'translate(0px, -'+ wScroll /12 +'%)'

});












});