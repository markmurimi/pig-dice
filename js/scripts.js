// user interface

$(document).ready(function() {
  $("form#inputForm").submit(function(event){
    event.preventDefault();

    var player1 = $('#player1-name').val();
    var player2 = $('#player2-name').val();
    $('#display-players').show();
    $('#player1-Name').text(player1);
    $('#player2-Name').text(player2);

  });
});
