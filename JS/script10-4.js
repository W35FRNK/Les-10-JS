$(document).ready(function(){
  $('.product-small-image').click(function(){
        $('.product-large-image').html($(this).html());
        $('.text').text($(this).attr("alt"));

  })


}) 



