$("#form").submit(function(){
  if ($("#nom").val() === "correct"){
    $("#spanInfo").text( "Validated...").show();
    return;
  }

  $("#spanInfo").text("Not valid!").show().fadeOut(1000);
});
