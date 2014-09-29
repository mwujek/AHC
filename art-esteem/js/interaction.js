$(document).ready(function(){

  $('.photo-container-under-text > figure').hover(
   function() {
    var captionElement= $( this ).find('figcaption');
    captionElement.addClass( "show-caption" );
  }, function() {
    var captionElement= $( this ).find('figcaption');
    captionElement.removeClass( "show-caption" );
  }
  );

});