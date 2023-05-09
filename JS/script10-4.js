$('.small-image').click(function() {
  var imgsrc = $(this).attr('src');
  $('.large-image').attr('src', imgsrc);
});