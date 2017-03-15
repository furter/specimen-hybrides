$(document).ready(function(){
    // How to create a jQuery accordion menu

    $('.inside').hide(); // initially hide the inside content
    //set event listener to trigger on menu click
    $('.menu-title').click(function() {
        $(this).next('.inside').slideToggle(); // find the next bottom content afterthe header and toggle it up or down depending on its current state.
    });


    $('.monospace').click(function() {
     $('.container').css('font-family', 'monospace')
 });

$('.serif').click(function() {
     $('.container').css('font-family', 'serif')
 });

$('.sans-serif').click(function() {
     $('.container').css('font-family', 'sans-serif')
 });

    $('.font-size').click(function() {
     $('.container').css('font-size', '6px')
 });


    /*
    $(function () {
        //  Accordion Panels
        $(".inside").hide();
        $(".menu-title").click(function () {
        $(".inside:visible").hide();
        $(this).next(".inside").slideToggle();
        });
    });
    */
});
