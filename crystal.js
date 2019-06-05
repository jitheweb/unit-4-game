$(document).ready(function() {
  var magicNumber = 0;
  var totalScore = 0;
  var wins = 0;
  var losses = 0;
  var crystal1Num;
  var crystal2Num;
  var crystal3Num;
  var crystal4Num;

  function newGame() {
    magicNumber = Math.floor(Math.random() * 180) + 20;
    totalScore = 0;
    crystal1Num = Math.floor(Math.random() * 18) + 1;
    crystal2Num = Math.floor(Math.random() * 18) + 1;
    crystal3Num = Math.floor(Math.random() * 18) + 1;
    crystal4Num = Math.floor(Math.random() * 18) + 1;
    $("#magicNumber").text(magicNumber);
    $("#totalScore").text(totalScore);
    $("#winOrLose").text("");
  }

  newGame();

  $("#crystal1").on("click", function() {
    totalScore = totalScore + crystal1Num;
    console.log(totalScore);

    if (totalScore === magicNumber) {
      youWin();
    } else if (totalScore > magicNumber) {
      youLose();
    }

    $("#totalScore").text(totalScore);
  });

  $("#crystal2").on("click", function() {
    totalScore = totalScore + crystal2Num;

    if (totalScore === magicNumber) {
      youWin();
    } else if (totalScore > magicNumber) {
      youLose();
    }

    $("#totalScore").text(totalScore);
  });
  $("#crystal3").on("click", function() {
    totalScore = totalScore + crystal3Num;

    if (totalScore === magicNumber) {
      youWin();
    } else if (totalScore > magicNumber) {
      youLose();
    }

    $("#totalScore").text(totalScore);
  });
  $("#crystal4").on("click", function() {
    totalScore = totalScore + crystal4Num;

    if (totalScore === magicNumber) {
      youWin();
    } else if (totalScore > magicNumber) {
      youLose();
    }

    $("#totalScore").text(totalScore);
  });

  function youWin() {
    $("#winOrLose").text("YOU WIN!");
    wins++;
    $("#wins").text(wins);
  }

  function youLose() {
    $("#winOrLose").text("YOU LOSE");
    losses++;
    $("#losses").text(losses);
  }

  $(".btn").on("click", function() {
    newGame();
  });
});
