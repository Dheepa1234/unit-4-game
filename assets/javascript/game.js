//*The following will provide a $(document).ready jQuery event. This fires as soon the DOM is loaded.*/
//* This is the earliest point in the page load process. */
//*This event firest before all of the images, css, etc.*/
//*This event contains variables that contain the data for different objects in the browser window */

$(document).ready(function() {
    var userScore = 0
    var randomNumber = 0
    var wins = 0
    var losses = 0
    var crystal1 = 0
    var crystal2 = 0
    var crystal3 = 0
    var crystal4 = 0
    
    var roundStart = function(){

        crystal1 = Math.floor ((Math.random() * 12) + 1;
        crystal2 = Math.floor ((Math.random () * 12) + 1;;
        crystal3 = Math.floor ((Math.random () * 12) + 1;
        crystal4 = Math.floor ((Math.random () * 12) + 1;
    }

        randomNumber = Math.floor ((Math.random() * 100) + 17;
        $("#randomNumber").text (randomNumber);

        userScore = )
          $("#user_score").text(" " +userScore);


          console.log(crystal1);
          console.log(crystal2);
          console.log (crystal3);
          console.log (crystal4);
          console.log (randomNumber);

};

roundStart ();

//*This is the end of the statement *

//*The following is the on-click function as it applies to the crystal buttons//


$("#redcrystal").click(function(){
    userScore = userScore + crystal1;
    $("#user_score").text(" "+userScore);
    compare ();
});

$("#bluecrystal").click(function(){
    userScore = userScore + crystal2;
    $("#user_score").text(" "+userScore);
    compare ();
});

$("#yellowcrystal").click(function(){
    userScore = userScore + crystal3;
    $("#user_score").text(" "+userScore);
    compare ();
});

$("#greencrystal").click(function(){
    userScore = userScore + crystal4;
    $("#user_score").text(" "+userScore);
    compare ();
});


