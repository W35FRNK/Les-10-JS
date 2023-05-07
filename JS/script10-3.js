$(document).keydown(function(e) {
  switch (e.which) {
  case 37:
      $('div').stop().animate({
          left: '-=10'
      }); //links
      break;
  case 38:
      $('div').stop().animate({
          top: '-=10'
      }); //boven
      break;
  case 39:
      $('div').stop().animate({
          left: '+=10'
      }); //rechts
      break;
  case 40:
      $('div').stop().animate({
          top: '+=10'
      }); //beneden
      break;
  }
})