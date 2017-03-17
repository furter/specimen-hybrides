$(document).ready(function(){
    $(".mySlider").slider({
      min: 8,
      max: 200,
      value: 20,
      orientation: "horizontal",
    });

    var fontSize = $( ".mySlider" ).slider("value");
    $(".container").css('font-size',fontSize);

    $(".mySlider").on( "slide", function() {
      var fontSize = $( ".mySlider" ).slider("value");
      $(".container").css('font-size',fontSize);
    });
    $(".mySlider").on( "slide", function() {
      var fontSize = $( ".mySlider" ).slider("value");
      $(".container2").css('font-size',fontSize);
    });
});
