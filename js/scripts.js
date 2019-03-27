$(document).ready(function(){
  $('#blanks form').submit(function(event){
    var message = $("input#message").val();
    $('.message').text(message);
    console.log((message).toUpperCase());
    event.preventDefault();
  });
});
