/* The following will provide a $(document).ready jQuery event. This fires as soon the DOM is loaded.*/
/* This is the earliest point in the page load process. */
/*This event firest before all of the images, css, etc.*/
/*This event contains variables that contain the data for different objects in the browser window *

/*The game should do these things: 
   -the computer should generate a random number between 19 and 20.
   -a number between 1 and 12 is assigned to each gem button
   -user has to click on each gem button
   -when each buttion is clicked, the button adds value to the score
   -when the score matches a random number exactly, the user wins: add a
   win, display a message, generate new random number
   -the game should display all game stats to the user
   -the reset button should reset all stats
*/

/*The document-ready function starts here, The function generates the randome number
and calls it later. Identifers are given with the var keyword. The random 
number function should return a number between 19 and 120. The randomGemValues generator should
generate random numbers and assign them to each gem */

$(document).ready (function() { 
      var randomNumber = 0;
      var greenGemNumber = 0;
      var redGemNumber = 0;
      var blueGemNumber = 0;
      var yellowGemNumber = 0;
    
        function randomNumberGenerator (){
            randomNumber = Math.floor(Math.random() * (120-19+1) ) +19;
      }
      
      $("#randomNumber").html (randomNumber);

    }   function randomGemValuesGenerator (){

            greenGemNumber = Math.floor (Math.random)() *12 + 1;
            redGemNumber = Math.floor (Math.random)() *12 + 1;
            blueGemNumber = Math.floor (Math.random)() *12 + 1;
            yellowGemNumber = Math.floor (Math.random)() *12 + 1;

    }


    randomNumberGenerator ();
    randomGemGaluesGenerator ();

   var score =  0;
   var wins = 0;
   var losses = 0;

   /* This should make the on-clic function work. I hope it works. */

   $("greenGem").on("click",) function (){
       score = score + greenGemNumber;
       $("score").html (score);

       
				if (score === randomNumber) {
					wins = wins + 1;
					$("#wins").html("Wins: " + wins);
					$("#message").html("YOU WIN");
                    
                    
					randomNumberGenerator();
					randomGemValuesGenerator();
					score = 0;
					$("#score").html(score);
				}

				
				if (score> randomNumber) {
					losses = losses + 1;
					$("#losses").html("Losses: " + losses);
					$("#message").html("YOU LOSE");
					
					randomNumberGenerator();
					randomGemValuesGenerator();
					score = 0;
					$("#score").html(score);
				}
		});

		
		$("#redGem").on("click", function() {
			score = score + redGemNmbr;
			$("#score").html(yourScoreIs);

			
				if (score === randomNumber) {
					wins = wins + 1;
					$("#wins").html("Wins: " + wins);
					$("#message").html("YOU WIN");
					 
					randomNumberGenerator();
					randomGemValuesGenerator();
					score = 0;
					$("#score").html(score);
				}

				 
				if (score > randomNumber) {
					losses = losses + 1;
					$("#losses").html("Losses: " + losses);
					$("#message").html("YOU LOSE");
					 
					randomNumberGenerator();
					randomGemValuesGenerator();
					yourScoreIs = 0;
					$("#yourScore").html(score);
				}
		});
		
		$("#yellowGem").on("click", function() {
			score = score + yellowGemNmbr;
			
			$("#yourScore").html(score);

			
				if (yourScoreIs === randomNumber) {
					wins = wins + 1;
					$("#wins").html("Wins: " + wins);
					$("#message").html("YOU WIN");
					 
					randomNumberGenerator();
					randomGemValuesGenerator();
					yourScoreIs = 0;
					$("#yourScore").html(yourScoreIs);
				}

				 
				if (yourScoreIs > randomNumber) {
					losses = losses + 1;
					$("#losses").html("Losses: " + losses);
					$("#message").html("YOU LOSE");
					 
					randomNumberGenerator();
					randomGemValuesGenerator();
					yourScoreIs = 0;
					$("#yourScore").html(yourScoreIs);
				}
		});

		
		$("#purpleGem").on("click", function() {
			yourScoreIs = yourScoreIs + purpleGemNmbr;
			 
			$("#yourScore").html(yourScoreIs);

			 

				 
				if (yourScoreIs === randomNumber) {
					wins = wins + 1;
					$("#wins").html("Wins: " + wins);
					$("#message").html("YOU WIN");
					 
					randomNumberGenerator();
					randomGemValuesGenerator();
					yourScoreIs = 0;
					$("#score").html(score);
				}

				 
				if (yourScoreIs > randomNumber) {
					losses = losses + 1;
					$("#losses").html("Losses: " + losses);
					$("#message").html("YOU LOSE");
					 
					randomNumberGenerator();
					randomGemValuesGenerator();
					yourScoreIs = 0;
					$("#yourScore").html(yourScoreIs);
				}
		});

	//======

	//Reset Game Stats
		//When the user clicks on the reset button, reset all game stats:
		$("#reset").on("click", function() {
			wins = 0;
			losses = 0;
			yourScoreIs = 0;
			$("#wins").html("Wins: " + 0);
			$("#losses").html("Losses: " + 0);
			$("#score").html(score);
			$("#message").html();
			randomNumberGenerator();
			randomGemValuesGenerator();
		});

 

});



   