$(document).ready(function(){
    // How to create a jQuery accordion menu

    $('.inside').hide(); // initially hide the inside content
    //set event listener to trigger on menu click
    $('.menu-title').click(function() {
        $(this).next('.inside').slideToggle(); // find the next bottom content afterthe header and toggle it up or down depending on its current state.
    });
    $('.sub-inside').hide();


    $('.biryani').click(function() {
     $(this).next('.sub-inside').slideToggle(); // find the next bottom content afterthe header and toggle it up or down depending on its current state.
    });

     $('.ultralightbiryani').click(function() {
     $('.container-2-3').css('font-family', 'biryaniultralight')

    });
     $('.lightbiryani').click(function() {
     $('.container-2-3').css('font-family', 'biryanilight')
    });
     $('.regularbiryani').click(function() {
     $('.container-2-3').css('font-family', 'biryaniregular')
    });
     $('.boldbiryani').click(function() {
     $('.container-2-3').css('font-family', 'biryanibold')
    });
     $('.demiboldbiryani').click(function() {
     $('.container-2-3').css('font-family', 'biryanidemibold')
    });
     $('.extraboldbiryani').click(function() {
     $('.container-2-3').css('font-family', 'biryaniextrabold')
    });
     $('.heavybiryani').click(function() {
     $('.container-2-3').css('font-family', 'biryaniheavy')
    });




$('.roboto').click(function() {
     $(this).next('.sub-inside').slideToggle(); // find the next bottom content afterthe header and toggle it up or down depending on its current state.
 });

     $('.thinroboto').click(function() {
     $('.container-2-3').css('font-family', 'roboto_slabthin')

 });
     $('.lightroboto').click(function() {
     $('.container-2-3').css('font-family', 'roboto_slablight')
 });
     $('.regularroboto').click(function() {
     $('.container-2-3').css('font-family', 'roboto_slabregular')
 });
     $('.boldroboto').click(function() {
     $('.container-2-3').css('font-family', 'roboto_slabbold')
 });






$('.montserrat').click(function() {
     $(this).next('.sub-inside').slideToggle(); // find the next bottom content afterthe header and toggle it up or down depending on its current state.
 });

     $('.italicmontserra').click(function() {
     $('.container-2-3').css('font-family', 'montserratitalic')
 });
     $('.mediummontserra').click(function() {
     $('.container-2-3').css('font-family', 'montserratmedium')
 });
     $('.mediumitalicmontserra').click(function() {
     $('.container-2-3').css('font-family', 'montserratmedium_italic')
 });
     $('.boldmontserra').click(function() {
     $('.container-2-3').css('font-family', 'montserratbold')
 });
     $('.bolditalicmontserra').click(function() {
     $('.container-2-3').css('font-family', 'montserratbold_italic')
 });
     $('.extraboldmontserra').click(function() {
     $('.container-2-3').css('font-family', 'montserratextrabold')
 });
     $('.extrabolditalicmontserra').click(function() {
     $('.container-2-3').css('font-family', 'montserratextrabold_italic')
 });
     $('.blackmontserra').click(function() {
     $('.container-2-3').css('font-family', 'montserratblack')
 });
     $('.blackitalicmontserra').click(function() {
     $('.container-2-3').css('font-family', 'montserratblack_italic')
 });











    $('.playfair').click(function() {
     $(this).next('.sub-inside').slideToggle(); // find the next bottom content afterthe header and toggle it up or down depending on its current state.
 });

     $('.regularPlayfair').click(function() {
     $('.container-2-3').css('font-family', 'playfair_displayregular')
 });
     $('.italicPlayfair').click(function() {
     $('.container-2-3').css('font-family', 'playfair_displayitalic')
 });
     $('.boldPlayfair').click(function() {
     $('.container-2-3').css('font-family', 'playfair_displaybold')
 });
     $('.bolditalicPlayfair').click(function() {
     $('.container-2-3').css('font-family', 'playfair_displaybold_italic')
 });
     $('.blackPlayfair').click(function() {
     $('.container-2-3').css('font-family', 'playfair_displayblack')
 });
     $('.blackitalicPlayfair').click(function() {
     $('.container-2-3').css('font-family', 'playfair_displayblack_italic')
 });










$('.bluu').click(function() {
     $(this).next('.sub-inside').slideToggle(); // find the next bottom content afterthe header and toggle it up or down depending on its current state.
 });
     $('.boldbluu').click(function() {
     $('.container-2-3').css('font-family', 'bluu')
 });
     $('.bolditalicbluu').click(function() {
     $('.container-2-3').css('font-family', 'bluu_nextbold_italic')
 });








$('.Terminal').click(function() {
     $(this).next('.sub-inside').slideToggle(); // find the next bottom content afterthe header and toggle it up or down depending on its current state.
 });
     $('.regularterminal').click(function() {
     $('.container-2-3').css('font-family', 'terminal_grotesque_openRg')
 });




$('.bagnard').click(function() {
     $(this).next('.inside').slideToggle(); // find the next bottom content afterthe header and toggle it up or down depending on its current state.
 });
     $('.regularbagnard').click(function() {
     $('.container-2-3').css('font-family', 'bagnard_regularregular')
 });


$('.font-size').click(function() {
  $('.container-2-3').css('font-size', '6px')
});

$('.font-size-1').click(function() {
     $('.container-2-3').css('font-size', '15px')
 });
$('.font-size-2').click(function() {
     $('.container-2-3').css('font-size', '30px')
 });
$('.font-size-3').click(function() {
     $('.container-2-3').css('font-size', '45px')
 });
$('.font-size-4').click(function() {
     $('.container-2-3').css('font-size', '60px')
 });
$('.font-size-5').click(function() {
     $('.container-2-3').css('font-size', '75px')
 });
$('.font-size-6').click(function() {
     $('.container-2-3').css('font-size', '90px')
 });
$('.font-size-7').click(function() {
     $('.container-2-3').css('font-size', '105px')
 });
$('.font-size-8').click(function() {
     $('.container-2-3').css('font-size', '120px')
 });
$('.font-size-9').click(function() {
     $('.container-2-3').css('font-size', '135px')
 });
$('.font-size-10').click(function() {
     $('.container-2-3').css('font-size', '150px')
 });
$('.font-size-11').click(function() {
     $('.container-2-3').css('font-size', '165px')
 });
$('.font-size-12').click(function() {
     $('.container-2-3').css('font-size', '180px')
 });








$('.line-height-1').click(function() {
     $('.container-2-3').css('line-height', '10px')
 });
$('.line-height-2').click(function() {
     $('.container-2-3').css('line-height', '30px')
 });
$('.line-height-3').click(function() {
     $('.container-2-3').css('line-height', '50px')
 });
$('.line-height-4').click(function() {
     $('.container-2-3').css('line-height', '60px')
 });
$('.line-height-5').click(function() {
     $('.container-2-3').css('line-height', '70px')
 });
$('.line-height-6').click(function() {
     $('.container-2-3').css('line-height', '80px')
 });
$('.line-height-7').click(function() {
     $('.container-2-3').css('line-height', '90px')
 });
$('.line-height-8').click(function() {
     $('.container-2-3').css('line-height', '100px')
 });
$('.line-height-9').click(function() {
     $('.container-2-3').css('line-height', '120px')
 });
$('.line-height-10').click(function() {
     $('.container-2-3').css('line-height', '130px')
 });   






$('.letter-space-1').click(function() {
     $('.container-2-3').css('letter-spacing', '0px')
 });
$('.letter-space-2').click(function() {
     $('.container-2-3').css('letter-spacing', '8px')
 });
$('.letter-space-3').click(function() {
     $('.container-2-3').css('letter-spacing', '10px')
 });
$('.letter-space-4').click(function() {
     $('.container-2-3').css('letter-spacing', '15px')
 });
$('.letter-space-5').click(function() {
     $('.container-2-3').css('letter-spacing', '20px')
 });
$('.letter-space-6').click(function() {
     $('.container-2-3').css('letter-spacing', '25px')
 });
$('.letter-space-7').click(function() {
     $('.container-2-3').css('letter-spacing', '30px')
 });  







$('.text-align-1').click(function() {
     $('.container-2-3').css('text-align', 'left')
 });
$('.text-align-2').click(function() {
     $('.container-2-3').css('text-align', 'center')
 });
$('.text-align-3').click(function() {
     $('.container-2-3').css('text-align', 'right')
 });



// ajouter ici!

}); // fin document ready
    








