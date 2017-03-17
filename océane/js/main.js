if (screen){

  $('p').click(function(){
    var $this = $(this);
    if(!$this.data('changed')){
       $this.data('changed', true);
       $this.html('&nbsp;');
    }
  }).blur(function(){
    var $this = $(this);
    var trimmedText = $this.text().trim();
    if(trimmedText == "" || trimmedText == "."){
      $this.text('Try me here ');
      $this.data('changed', false);
    }
  })
  .on('blur keyup paste', function() {
      var $this = $(this);
      if ($this.html().length > 10) {
          $this.html($this.html().slice(0,10));
      }
  });

}