// user interface

$(document).ready(function() {
  $("form#inputForm").submit(function(event){
    event.preventDefault();

    var player1 = $('#player1-name').val();
    var player2 = $('#player2-name').val();
    $('#display-players').show();
    $('#player1-Name').text(player1);
    $('#player2-Name').text(player2);
    $('#score1').text (score1);
    $('#roll1').click(player1.win1());
    $('#score2').text(score2);
    $('#roll2').click(player2.win2());

  });
});

// end of user interface

// business logic

var player1 = new Player();
var player2 = new Player();

var score1 = 0;
var score2 = 0;

Player.protoype.Win1 = function (){
  var rolling1 = Math.floor(Math.random() * 6 + 1);

  if (rolling1 == 1) {
    alert("Next player.");
    score1 = 0;
  }else {
    if (score1 >= 100) {
      alert("Trophy goes to Player 1");
    }else {
      console.log('Continuing');
      player1.points = rolling1;
      score1 += rolling1;
      console.log(score1);
      console.log(rolling1 + score1);
    }
  }
}

player.prototype.Win2 = function (){
  var rolling2 = Math.floor(Math.random() * 6 + 1);

  if (rolling2 === 1){
    alert("Next player.");
    score2 = 0;
  }else {
    if (rolling2 >= 100){
      alert("Trophy goes to player 2");
    }else {
      console.log('Continuing');
      player2.points = rolling2;
      score2 += rolling2;
      console.log(score2);
      console.log(rolling2 + score2);
    }
  }
}

console.log(player1);
console.log(player2);
