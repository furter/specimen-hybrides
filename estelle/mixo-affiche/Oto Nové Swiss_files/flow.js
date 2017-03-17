$(function() {

$('.open-close').click(function(){
  $(this).toggleClass("open");
  $(this).toggleClass("no");
  $(".close").toggleClass("close-closed");
  $(".credits").toggleClass("credits-open");
  $(".credits-a").toggleClass("credits-open");
});

$('.infos.close').click(function(){
  $(".open-close").toggleClass("open");
  $(".open-close").toggleClass("no");
  $(".close").toggleClass("close-closed");
  $(".credits").toggleClass("credits-open");
  $(".credits-a").toggleClass("credits-open");
});

$(".eins").hover(function() {
  $(".eins").toggleClass("eins-C1");
  $(".zwei").toggleClass("zwei-C1");
  $(".drei").toggleClass("drei-C1");
  $(".vier").toggleClass("vier-C1");
  $(".funf").toggleClass("funf-C1");
  $(".sechs").toggleClass("sechs-C1");
  $(".sieben").toggleClass("sieben-C1");
  $(".acht").toggleClass("acht-C1");
  $(".neun").toggleClass("neun-C1");
  $(".zehn").toggleClass("zehn-C1");
  $(".elf").toggleClass("elf-C1");
  $(".zwolf").toggleClass("zwolf-C1");
  $(".mouse").toggleClass("mousered");
  $(".mouse").toggleClass("mousebig");
  $(".fill1").toggleClass("fill2");
  $(".band.5").toggleClass("band-active");
  $(".datum.5").toggleClass("datum-active");
});

$(".zwei").hover(function() {
  $(".eins").toggleClass("eins-C2");
  $(".zwei").toggleClass("zwei-C2");
  $(".drei").toggleClass("drei-C2");
  $(".vier").toggleClass("vier-C2");
  $(".funf").toggleClass("funf-C2");
  $(".sechs").toggleClass("sechs-C2");
  $(".sieben").toggleClass("sieben-C2");
  $(".acht").toggleClass("acht-C2");
  $(".neun").toggleClass("neun-C2");
  $(".zehn").toggleClass("zehn-C2");
  $(".elf").toggleClass("elf-C2");
  $(".zwolf").toggleClass("zwolf-C2");
  $(".band.6").toggleClass("band-active");
});

$(".drei").hover(function() {
  $(".eins").toggleClass("eins-C3");
  $(".zwei").toggleClass("zwei-C3");
  $(".drei").toggleClass("drei-C3");
  $(".vier").toggleClass("vier-C1");
  $(".funf").toggleClass("funf-C1");
  $(".sechs").toggleClass("sechs-C1");
  $(".sieben").toggleClass("sieben-C1");
  $(".acht").toggleClass("acht-C1");
  $(".neun").toggleClass("neun-C1");
  $(".zehn").toggleClass("zehn-C1");
  $(".elf").toggleClass("elf-C1");
  $(".zwolf").toggleClass("zwolf-C1");
  $(".mouse").toggleClass("mousebig");
  $(".band.7").toggleClass("band-active");
    $(".fill1").toggleClass("fill3");
});


$(".vier").hover(function() {
  $(".eins").toggleClass("eins-C4");
  $(".zwei").toggleClass("zwei-C4");
  $(".drei").toggleClass("drei-C4");
  $(".vier").toggleClass("vier-C4");
  $(".funf").toggleClass("funf-C4");
  $(".sechs").toggleClass("sechs-C4");
  $(".sieben").toggleClass("sieben-C4");
  $(".acht").toggleClass("acht-C1");
  $(".neun").toggleClass("neun-C1");
  $(".zehn").toggleClass("zehn-C1");
  $(".elf").toggleClass("elf-C1");
  $(".zwolf").toggleClass("zwolf-C1");
});

$(".funf").hover(function() {
  $(".eins").toggleClass("eins-C5");
  $(".zwei").toggleClass("zwei-C5");
  $(".drei").toggleClass("drei-C5");
  $(".vier").toggleClass("vier-C5");
  $(".funf").toggleClass("funf-C5");
  $(".sechs").toggleClass("sechs-C5");
  $(".sieben").toggleClass("sieben-C5");
  $(".acht").toggleClass("acht-C2");
  $(".neun").toggleClass("neun-C2");
  $(".zehn").toggleClass("zehn-C2");
  $(".elf").toggleClass("elf-C2");
  $(".zwolf").toggleClass("zwolf-C2");
  $(".mouse").toggleClass("mousebig");
  $(".fill1").toggleClass("fill4");
});

$(".sechs").hover(function() {
  $(".eins").toggleClass("eins-C5");
  $(".zwei").toggleClass("zwei-C5");
  $(".drei").toggleClass("drei-C5");
  $(".vier").toggleClass("vier-C5");
  $(".funf").toggleClass("funf-C6");
  $(".sechs").toggleClass("sechs-C6");
  $(".sieben").toggleClass("sieben-C5");
  $(".acht").toggleClass("acht-C2");
  $(".neun").toggleClass("neun-C2");
  $(".zehn").toggleClass("zehn-C2");
  $(".elf").toggleClass("elf-C2");
  $(".zwolf").toggleClass("zwolf-C2");
});

$(".sieben").hover(function() {
  $(".eins").toggleClass("eins-C4");
  $(".zwei").toggleClass("zwei-C4");
  $(".drei").toggleClass("drei-C4");
  $(".vier").toggleClass("vier-C7");
  $(".funf").toggleClass("funf-C7");
  $(".sechs").toggleClass("sechs-C7");
  $(".sieben").toggleClass("sieben-C7");
  $(".acht").toggleClass("acht-C1");
  $(".neun").toggleClass("neun-C1");
  $(".zehn").toggleClass("zehn-C1");
  $(".elf").toggleClass("elf-C1");
  $(".zwolf").toggleClass("zwolf-C1");
});

$(".acht").hover(function() {
  $(".eins").toggleClass("eins-C8");
  $(".zwei").toggleClass("zwei-C8");
  $(".drei").toggleClass("drei-C8");
  $(".vier").toggleClass("vier-C8");
  $(".funf").toggleClass("funf-C8");
  $(".sechs").toggleClass("sechs-C8");
  $(".sieben").toggleClass("sieben-C8");
  $(".acht").toggleClass("acht-C8");
  $(".neun").toggleClass("neun-C8");
  $(".zehn").toggleClass("zehn-C8");
  $(".elf").toggleClass("elf-C8");
  $(".zwolf").toggleClass("zwolf-C8");
  $(".band.1").toggleClass("band-active");
  $(".datum.1").toggleClass("datum-active");
  $(".band.2").toggleClass("band-transparent");
  $(".band.3").toggleClass("band-transparent");
  $(".datum.2").toggleClass("datum-transparent");
  $(".datum.3").toggleClass("datum-transparent");
  $(".land.1").toggleClass("land-visible");
});

$(".neun").hover(function() {
  $(".eins").toggleClass("eins-C9");
  $(".zwei").toggleClass("zwei-C9");
  $(".drei").toggleClass("drei-C9");
  $(".vier").toggleClass("vier-C9");
  $(".funf").toggleClass("funf-C9");
  $(".sechs").toggleClass("sechs-C9");
  $(".sieben").toggleClass("sieben-C9");
  $(".acht").toggleClass("acht-C9");
  $(".neun").toggleClass("neun-C9");
  $(".zehn").toggleClass("zehn-C9");
  $(".elf").toggleClass("elf-C9");
  $(".zwolf").toggleClass("zwolf-C9");
});

$(".zehn").hover(function() {
  $(".eins").toggleClass("eins-C10");
  $(".zwei").toggleClass("zwei-C10");
  $(".drei").toggleClass("drei-C10");
  $(".vier").toggleClass("vier-C10");
  $(".funf").toggleClass("funf-C10");
  $(".sechs").toggleClass("sechs-C10");
  $(".sieben").toggleClass("sieben-C10");
  $(".acht").toggleClass("acht-C10");
  $(".neun").toggleClass("neun-C10");
  $(".zehn").toggleClass("zehn-C10");
  $(".elf").toggleClass("elf-C10");
  $(".zwolf").toggleClass("zwolf-C10");
    $(".mouse").toggleClass("mousebig");
    $(".fill1").toggleClass("fill5");
});


$(".elf").hover(function() {
  $(".eins").toggleClass("eins-C9");
  $(".zwei").toggleClass("zwei-C9");
  $(".drei").toggleClass("drei-C9");
  $(".vier").toggleClass("vier-C9");
  $(".funf").toggleClass("funf-C9");
  $(".sechs").toggleClass("sechs-C9");
  $(".sieben").toggleClass("sieben-C9");
  $(".acht").toggleClass("acht-C9");
  $(".neun").toggleClass("neun-C11");
  $(".zehn").toggleClass("zehn-C11");
  $(".elf").toggleClass("elf-C11");
  $(".zwolf").toggleClass("zwolf-C9");
  $(".band.2").toggleClass("band-active");
  $(".datum.2").toggleClass("datum-active");
  $(".band.1").toggleClass("band-transparent");
  $(".band.3").toggleClass("band-transparent");
  $(".datum.1").toggleClass("datum-transparent");
  $(".datum.3").toggleClass("datum-transparent");
  $(".land.2").toggleClass("land-visible");
});

$(".zwolf").hover(function() {
  $(".eins").toggleClass("eins-C8");
  $(".zwei").toggleClass("zwei-C8");
  $(".drei").toggleClass("drei-C8");
  $(".vier").toggleClass("vier-C8");
  $(".funf").toggleClass("funf-C8");
  $(".sechs").toggleClass("sechs-C8");
  $(".sieben").toggleClass("sieben-C8");
  $(".acht").toggleClass("acht-C12");
  $(".neun").toggleClass("neun-C12");
  $(".zehn").toggleClass("zehn-C12");
  $(".elf").toggleClass("elf-C12");
  $(".zwolf").toggleClass("zwolf-C12");
  $(".band.3").toggleClass("band-active");
  $(".band.2").toggleClass("band-transparent");
  $(".band.1").toggleClass("band-transparent");
  $(".datum.3").toggleClass("datum-active");
  $(".datum.2").toggleClass("datum-transparent");
  $(".datum.1").toggleClass("datum-transparent");
  $(".land.3").toggleClass("land-visible");
});


});

$(document).ready(function() {
if ($.browser.webkit) {
   $("#fancy-goo").css('-webkit-filter', 'none');
}
});

$(document).on('mousemove', function(e){
   $('#mouse').css({
      left:  e.pageX,
      top:   e.pageY
   });
});

$(document).mouseleave(function () {
   $(".mouse").addClass("mouseleave");
});

$(document).mouseenter(function () {
   $(".mouse").removeClass("mouseleave");
});

/*
   //sound-1

$(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'http://www.otonoveswiss.co.uk/sounds/GIGER_1.mp3');

    $('.eins').mouseenter(function() {
        audioElement.play();
        audioElement.currentTime = 0;
    });
});

   //sound-2

$(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'http://www.otonoveswiss.co.uk/sounds/GIGER_2.mp3');

    $('.zwei').mouseenter(function() {
        audioElement.play();
        audioElement.currentTime = 0;
    });
});

   //sound-3

$(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'http://www.otonoveswiss.co.uk/sounds/GIGER_3.mp3');

    $('.drei').mouseenter(function() {
        audioElement.play();
        audioElement.currentTime = 0;
    });
});

   //sound-4

$(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'http://www.otonoveswiss.co.uk/sounds/GIGER_4.mp3');

    $('.vier').mouseenter(function() {
        audioElement.play();
        audioElement.currentTime = 0;
    });
});

   //sound-5

$(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'http://www.otonoveswiss.co.uk/sounds/GIGER_5.mp3');

    $('.funf').mouseenter(function() {
        audioElement.play();
        audioElement.currentTime = 0;
    });
});

   //sound-6

$(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'http://www.otonoveswiss.co.uk/sounds/GIGER_6.mp3');

    $('.sechs').mouseenter(function() {
        audioElement.play();
        audioElement.currentTime = 0;
    });
});

//sound-7

$(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'http://www.otonoveswiss.co.uk/sounds/GIGER_7.mp3');

    $('.sieben').mouseenter(function() {
        audioElement.play();
        audioElement.currentTime = 0;
    });

});

//sound-8

$(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'http://www.otonoveswiss.co.uk/sounds/GIGER_8.mp3');

    $('.acht').mouseenter(function() {
        audioElement.play();
        audioElement.currentTime = 0;
    });

});

//sound-9

$(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'http://www.otonoveswiss.co.uk/sounds/GIGER_9.mp3');

    $('.neun').mouseenter(function() {
        audioElement.play();
        audioElement.currentTime = 0;
    });

});

//sound-10

$(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'http://www.otonoveswiss.co.uk/sounds/GIGER_10.mp3');

    $('.zehn').mouseenter(function() {
        audioElement.play();
        audioElement.currentTime = 0;
    });

});

//sound-11

$(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'http://www.otonoveswiss.co.uk/sounds/GIGER_11.mp3');

    $('.elf').mouseenter(function() {
        audioElement.play();
        audioElement.currentTime = 0;
    });

});

//sound-12

$(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'http://www.otonoveswiss.co.uk/sounds/GIGER_12.mp3');

    $('.zwolf').mouseenter(function() {
        audioElement.play();
        audioElement.currentTime = 0;
    });

});
*/
