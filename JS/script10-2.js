//finish stopt de functie en voltooid deze direct

$(document).ready(function(){
  $("#start").click(function(){
    $("#div1").hide(5000, function(){
      alert("Animatie gereed");
    });
  });
  
  $("#finish").click(function(){
    $("#div1").finish();
  });
});




//stop pauzeert de animatie en gaat verder nadat er weer op start wordt gedrukt

$(document).ready(function(){
  $("#start2").click(function(){
    $("#div2").hide(5000, function(){
      alert("Animatie gereed");
    });
  });
  
  $("#stop").click(function(){
    $("#div2").stop();
  });
});


//queue bepaalt de volgorde, dequeue voert de volgende animatie in de wachtrij uit

$(document).ready(function(){
  $("#start3").click(function(){
      
    $("#div3").animate({height: 300}, 5000);
    $("#div3").animate({width: 300}, 5000);
    $("#div3").queue(function(){
      $("#div3").css("background-color", "red");  
      $("#div3").dequeue();
    });
    $("#div3").animate({height: 100}, 5000);
    $("#div3").animate({width: 100}, 5000);
  });
});