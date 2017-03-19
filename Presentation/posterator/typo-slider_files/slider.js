$(document).ready(function(){
    // How to create a jQuery accordion menu

    $('.inside').hide(); // initially hide the inside content
    //set event listener to trigger on menu click
    $('.menu-title').click(function() {
        $('.inside').hide();
        $(this).next('.inside').slideToggle(); // find the next bottom content afterthe header and toggle it up or down depending on its current state.
    });
    $('.sub-inside').hide();

    $('.text-color').click(function() {
     $(this).next('.sub-inside').slideToggle(); // find the next bottom content afterthe header and toggle it up or down depending on its current state.
    });

    $('.background-color').click(function() {
    $(this).next('.sub-inside').slideToggle(); // find the next bottom content afterthe header and toggle it up or down depending on its current state.
   });

    $('.outil-1-1').hide();
    $('.case-grille').mouseenter(function() {
        $(this).find('.outil-1-1').show(); // find the next bottom content afterthe header and toggle it up or down depending on its current state.
    });
    $('.case-grille').mouseleave(function() {
        $(this).find('.outil-1-1').hide(); // find the next bottom content afterthe header and toggle it up or down depending on its current state.
    });

    $('.biryani').click(function() {
     $(this).next('.sub-inside').slideToggle(); // find the next bottom content afterthe header and toggle it up or down depending on its current state.
    });

     $('.ultralightbiryani').click(function() {
     $(this).parents('.case-grille').children(this).parents('.case-grille').children('.container').css('font-family', 'biryaniultralight')

    });
     $('.lightbiryani').click(function() {
     $(this).parents('.case-grille').children('.container').css('font-family', 'biryanilight')
    });
     $('.regularbiryani').click(function() {
     $(this).parents('.case-grille').children('.container').css('font-family', 'biryaniregular')
    });
     $('.boldbiryani').click(function() {
     $(this).parents('.case-grille').children('.container').css('font-family', 'biryanibold')
    });
     $('.demiboldbiryani').click(function() {
     $(this).parents('.case-grille').children('.container').css('font-family', 'biryanidemibold')
    });
     $('.extraboldbiryani').click(function() {
     $(this).parents('.case-grille').children('.container').css('font-family', 'biryaniextrabold')
    });
     $('.heavybiryani').click(function() {
     $(this).parents('.case-grille').children('.container').css('font-family', 'biryaniheavy')
    });




$('.roboto').click(function() {
     $(this).next('.sub-inside').slideToggle(); // find the next bottom content afterthe header and toggle it up or down depending on its current state.
 });

     $('.thinroboto').click(function() {
     $(this).parents('.case-grille').children('.container').css('font-family', 'roboto_slabthin')

 });
     $('.lightroboto').click(function() {
     $(this).parents('.case-grille').children('.container').css('font-family', 'roboto_slablight')
 });
     $('.regularroboto').click(function() {
     $(this).parents('.case-grille').children('.container').css('font-family', 'roboto_slabregular')
 });
     $('.boldroboto').click(function() {
     $(this).parents('.case-grille').children('.container').css('font-family', 'roboto_slabbold')
 });






$('.montserrat').click(function() {
     $(this).next('.sub-inside').slideToggle(); // find the next bottom content afterthe header and toggle it up or down depending on its current state.
 });

     $('.italicmontserra').click(function() {
     $(this).parents('.case-grille').children('.container').css('font-family', 'montserratitalic')
 });
     $('.mediummontserra').click(function() {
     $(this).parents('.case-grille').children('.container').css('font-family', 'montserratmedium')
 });
     $('.mediumitalicmontserra').click(function() {
     $(this).parents('.case-grille').children('.container').css('font-family', 'montserratmedium_italic')
 });
     $('.boldmontserra').click(function() {
     $(this).parents('.case-grille').children('.container').css('font-family', 'montserratbold')
 });
     $('.bolditalicmontserra').click(function() {
     $(this).parents('.case-grille').children('.container').css('font-family', 'montserratbold_italic')
 });
     $('.extraboldmontserra').click(function() {
     $(this).parents('.case-grille').children('.container').css('font-family', 'montserratextrabold')
 });
     $('.extrabolditalicmontserra').click(function() {
     $(this).parents('.case-grille').children('.container').css('font-family', 'montserratextrabold_italic')
 });
     $('.blackmontserra').click(function() {
     $(this).parents('.case-grille').children('.container').css('font-family', 'montserratblack')
 });
     $('.blackitalicmontserra').click(function() {
     $(this).parents('.case-grille').children('.container').css('font-family', 'montserratblack_italic')
 });











    $('.playfair').click(function() {
     $(this).next('.sub-inside').slideToggle(); // find the next bottom content afterthe header and toggle it up or down depending on its current state.
 });

     $('.regularPlayfair').click(function() {
     $(this).parents('.case-grille').children('.container').css('font-family', 'playfair_displayregular')
 });
     $('.italicPlayfair').click(function() {
     $(this).parents('.case-grille').children('.container').css('font-family', 'playfair_displayitalic')
 });
     $('.boldPlayfair').click(function() {
     $(this).parents('.case-grille').children('.container').css('font-family', 'playfair_displaybold')
 });
     $('.bolditalicPlayfair').click(function() {
     $(this).parents('.case-grille').children('.container').css('font-family', 'playfair_displaybold_italic')
 });
     $('.blackPlayfair').click(function() {
     $(this).parents('.case-grille').children('.container').css('font-family', 'playfair_displayblack')
 });
     $('.blackitalicPlayfair').click(function() {
     $(this).parents('.case-grille').children('.container').css('font-family', 'playfair_displayblack_italic')
 });










$('.bluu').click(function() {
     $(this).next('.sub-inside').slideToggle(); // find the next bottom content afterthe header and toggle it up or down depending on its current state.
 });
     $('.boldbluu').click(function() {
     $(this).parents('.case-grille').children('.container').css('font-family', 'bluu')
 });
     $('.bolditalicbluu').click(function() {
     $(this).parents('.case-grille').children('.container').css('font-family', 'bluu_nextbold_italic')
 });








$('.Terminal').click(function() {
     $(this).next('.sub-inside').slideToggle(); // find the next bottom content afterthe header and toggle it up or down depending on its current state.
 });
     $('.regularterminal').click(function() {
     $(this).parents('.case-grille').children('.container').css('font-family', 'terminal_grotesque_openRg')
 });




$('.bagnard').click(function() {
     $(this).next('.sub-inside').slideToggle(); // find the next bottom content afterthe header and toggle it up or down depending on its current state.
 });
     $('.regularbagnard').click(function() {
     $(this).parents('.case-grille').children('.container').css('font-family', 'bagnard_regularregular')
 });


$('.font-size').click(function() {
  $(this).parents('.case-grille').children('.container').css('font-size', '6px')
});

$('.font-size-1').click(function() {
     $(this).parents('.case-grille').children('.container').css('font-size', '15px')
 });
$('.font-size-2').click(function() {
     $(this).parents('.case-grille').children('.container').css('font-size', '30px')
 });
$('.font-size-3').click(function() {
     $(this).parents('.case-grille').children('.container').css('font-size', '45px')
 });
$('.font-size-4').click(function() {
     $(this).parents('.case-grille').children('.container').css('font-size', '60px')
 });
$('.font-size-5').click(function() {
     $(this).parents('.case-grille').children('.container').css('font-size', '75px')
 });
$('.font-size-6').click(function() {
     $(this).parents('.case-grille').children('.container').css('font-size', '90px')
 });
$('.font-size-7').click(function() {
     $(this).parents('.case-grille').children('.container').css('font-size', '105px')
 });
$('.font-size-8').click(function() {
     $(this).parents('.case-grille').children('.container').css('font-size', '120px')
 });
$('.font-size-9').click(function() {
     $(this).parents('.case-grille').children('.container').css('font-size', '135px')
 });
$('.font-size-10').click(function() {
     $(this).parents('.case-grille').children('.container').css('font-size', '150px')
 });
$('.font-size-11').click(function() {
     $(this).parents('.case-grille').children('.container').css('font-size', '165px')
 });
$('.font-size-12').click(function() {
     $(this).parents('.case-grille').children('.container').css('font-size', '180px')
 });








$('.line-height-1').click(function() {
     $(this).parents('.case-grille').children('.container').css('line-height', '10px')
 });
$('.line-height-2').click(function() {
     $(this).parents('.case-grille').children('.container').css('line-height', '30px')
 });
$('.line-height-3').click(function() {
     $(this).parents('.case-grille').children('.container').css('line-height', '50px')
 });
$('.line-height-4').click(function() {
     $(this).parents('.case-grille').children('.container').css('line-height', '60px')
 });
$('.line-height-5').click(function() {
     $(this).parents('.case-grille').children('.container').css('line-height', '70px')
 });
$('.line-height-6').click(function() {
     $(this).parents('.case-grille').children('.container').css('line-height', '80px')
 });
$('.line-height-7').click(function() {
     $(this).parents('.case-grille').children('.container').css('line-height', '90px')
 });
$('.line-height-8').click(function() {
     $(this).parents('.case-grille').children('.container').css('line-height', '100px')
 });
$('.line-height-9').click(function() {
     $(this).parents('.case-grille').children('.container').css('line-height', '120px')
 });
$('.line-height-10').click(function() {
     $(this).parents('.case-grille').children('.container').css('line-height', '130px')
 });






$('.letter-space-1').click(function() {
     $(this).parents('.case-grille').children('.container').css('letter-spacing', '0px')
 });
$('.letter-space-2').click(function() {
     $(this).parents('.case-grille').children('.container').css('letter-spacing', '8px')
 });
$('.letter-space-3').click(function() {
     $(this).parents('.case-grille').children('.container').css('letter-spacing', '10px')
 });
$('.letter-space-4').click(function() {
     $(this).parents('.case-grille').children('.container').css('letter-spacing', '15px')
 });
$('.letter-space-5').click(function() {
     $(this).parents('.case-grille').children('.container').css('letter-spacing', '20px')
 });
$('.letter-space-6').click(function() {
     $(this).parents('.case-grille').children('.container').css('letter-spacing', '25px')
 });
$('.letter-space-7').click(function() {
     $(this).parents('.case-grille').children('.container').css('letter-spacing', '30px')
 });





$('.text-align-1').click(function() {
     $(this).parents('.case-grille').children('.container').css('text-align', 'left')
 });
$('.text-align-2').click(function() {
     $(this).parents('.case-grille').children('.container').css('text-align', 'center')
 });
$('.text-align-3').click(function() {
     $(this).parents('.case-grille').children('.container').css('text-align', 'right')
 });

      $('.txt-yellow').click(function() {
      $(this).parents('.case-grille').children('.container').css('color', '#FFFF00')
     });
      $('.txt-red').click(function() {
      $(this).parents('.case-grille').children('.container').css('color', '#FF0000')
     });
      $('.txt-purple').click(function() {
      $(this).parents('.case-grille').children('.container').css('color', '#B4BEF2')
      });
      $('.txt-green').click(function() {
      $(this).parents('.case-grille').children('.container').css('color', '#97D3C1')
     });
      $('.txt-black').click(function() {
      $(this).parents('.case-grille').children('.container').css('color', '#000000')
     });
      $('.txt-white').click(function() {
      $(this).parents('.case-grille').children('.container').css('color', '#FFFFFF')
     });




      $('.background-yellow').click(function() {
      $(this).parents('.case-grille').css('background-color', '#FFFF00')
     });
      $('.background-red').click(function() {
      $(this).parents('.case-grille').css('background-color', '#FF0000')
     });
      $('.background-purple').click(function() {
      $(this).parents('.case-grille').css('background-color', '#B4BEF2')
     });
      $('.background-green').click(function() {
      $(this).parents('.case-grille').css('background-color', '#97D3C1')
     });
      $('.background-black').click(function() {
      $(this).parents('.case-grille').css('background-color', 'black')
     });
      $('.background-white').click(function() {
      $(this).parents('.case-grille').css('background-color', '#FFFFFF')
      });
      $('.background-transparent').click(function() {
      $(this).parents('.case-grille').css('background-color', 'transparent')
      });


      $('.image-small-1').click(function() {
      $(this).parents('.case-grille').css('background-image', 'url(img/selection/1.jpg)')
     });
      $('.image-small-2').click(function() {
      $(this).parents('.case-grille').css('background-image', 'url(img/selection/2.jpg)')
     });
      $('.image-small-3').click(function() {
      $(this).parents('.case-grille').css('background-image', 'url(img/selection/3.jpg)')
     });
      $('.image-small-4').click(function() {
      $(this).parents('.case-grille').css('background-image', 'url(img/selection/4.jpg)')
     });
      $('.image-small-5').click(function() {
      $(this).parents('.case-grille').css('background-image', 'url(img/selection/5.jpg)')
     });
      $('.image-enlever').click(function() {
      $(this).parents('.case-grille').css('background-image', 'none')
     });




$('.hidden').hide();
$('#compo-1').show();



$('.vignette-1').click(function() {
  $('.hidden').hide();
  $('#compo-1').show();
});
$('.vignette-2').click(function() {
  $('.hidden').hide();
  $('#compo-2').show();
  $('#outil-2-1').show();
});
$('.vignette-3').click(function() {
  $('.hidden').hide();
  $('#compo-3').show();
  $('#outil-3-1').show();
});



/*
$('.case-1-2').click(function() {
  $('.outil-hidden').hide();
  $('#outil-1-2').show();
});
$('.case-1-3').click(function() {
  $('.outil-hidden').hide();
  $('#outil-1-3').show();
});
$('.case-1-4').click(function() {
  $('.outil-hidden').hide();
  $('#outil-1-4').show();
});
$('.case-1-5').click(function() {
  $('.outil-hidden').hide();
  $('#outil-1-5').show();
});


$('.case-2-1').click(function() {
  $('.outil-hidden').hide();
  $('#outil-2-1').show();
});
$('.case-2-2').click(function() {
  $('.outil-hidden').hide();
  $('#outil-2-2').show();
});
$('.case-2-3').click(function() {
  $('.outil-hidden').hide();
  $('#outil-2-3').show();
});
$('.case-2-4').click(function() {
  $('.outil-hidden').hide();
  $('#outil-2-4').show();
});
$('.case-2-5').click(function() {
  $('.outil-hidden').hide();
  $('#outil-2-5').show();
});



$('.case-3-1').click(function() {
  $('.outil-hidden').hide();
  $('#outil-3-1').show();
});
$('.case-3-2').click(function() {
  $('.outil-hidden').hide();
  $('#outil-3-2').show();
});
$('.case-3-3').click(function() {
  $('.outil-hidden').hide();
  $('#outil-3-3').show();
});
$('.case-3-4').click(function() {
  $('.outil-hidden').hide();
  $('#outil-3-4').show();
});
$('.case-3-5').click(function() {
  $('.outil-hidden').hide();
  $('#outil-3-5').show();
});

*/


// ajouter ici!

}); // fin document ready
