


  $(document).ready(function(){
    $("#showHide").click(function () {
      if ($(this).is(":checked")) {
          $("#dummyText").hide();
      } else {
          
          $("#dummyText").show();
      }
      })
  });
