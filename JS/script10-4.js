$(document).ready(function(){
  $('.product-small-image').click(function(){
       $('.product-large-image').html($(this).html());
       $('.tekst').html($(this).attr('title'));        

  })


}) 



