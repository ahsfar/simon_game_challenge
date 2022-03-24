// alert("let's do it");
var buttonColours =["red", "blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];
//You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.
var started = false;
//2. Create a new variable called level and start at level 0.
var level = 0;
// $(document).one("keydown", function(event){
//   nextSequence(event.key);
//   var level = 0 ;
//   $("h1").text("Level" +level);
//
// });
$(document).keydown(function() {
  if (!started) {

    //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").on("click", function(){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  // console.log(userClickedPattern);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);

});
function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }

    } else {

      console.log("wrong");

      //1. In the sounds folder, there is a sound called wrong.mp3, play this sound if the user got one of the answers wrong.
      playSound("wrong");

      //2. In the styles.css file, there is a class called "game-over", apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.
      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      //3. Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.
      $("#level-title").text("Game Over, Press Any Key to Restart");
      startOver();
    }

}
function nextSequence(){
  userClickedPattern = [];
  level++;
  $("h1").text("Level " +level);
var randomNumber = Math.floor(Math.random()*4);
var randomChosenColor = buttonColours[randomNumber];
gamePattern.push(randomChosenColor);
// var buttonC =$("#" + randomChosenColor);
// $("button").attr("id", "buttonC" )fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);;
$("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
// use the above button and make them flash
// $("buttonC").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
// The jQuery way
// let $button = $('#' + nextSequence());
playSound(randomChosenColor);
}
function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
function animatePress(currentColor){
  //2. Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
  $("#" + currentColor).addClass("pressed");
  //3. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function startOver(){
level = 0;
started = false;
 gamePattern = [];
}
// function checkAnswer(currentLevel){
//   if (randomChosenColor===userChosenColour){console.log(success)}
//   else console.log(wrong);
// }
//1. Create a new function called checkAnswer(), it should take one input with the name currentLevel
// function checkAnswer(currentLevel) {
//     //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
//     if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
//       console.log("success");
//       //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
//       if (userClickedPattern.length === gamePattern.length){
//         //5. Call nextSequence() after a 1000 millisecond delay.
//         setTimeout(function () {
//           nextSequence();
//         }, 1000);
//       }
//     } else {
//       playSound("wrong");
//       $("body").addClass("game-over");
//       setTimeout(function () {
//         $("body").removeClass("game-over");
//       }, 200);
//       $("#level-title").text("Game Over, Press Any Key to Restart");
//     }
// }
