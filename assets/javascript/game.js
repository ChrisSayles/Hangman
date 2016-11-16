window.onload = function() {

    // possible hangman words
    var words = ["maverick", "goose", "iceman", "viper", "slider", "wolfman", "charlie", "cougar", "merlin"];

    //Variables for tracking wins, lives, guesses, and dashes
    var wins = 0;
    var lives = 10;
    var guesses = [];
    var dashes = [];
	var winAudio = new Audio('assets/images/win.mp3');
	var winAudioLoss = new Audio('assets/images/dead.mp3')
    
    //What word will be randomly choses by the computer
    var randomWord = words[Math.floor(Math.random() * words.length)];

    //create dashes 
    for (var i = 0; i < randomWord.length; i++) {
        dashes.push("_");
    }

    function htmlRewrite() {
        var html = "<h2>Press any key to play! </h2>" +
            "<p>Wins: " + wins + "</p>" +
            "<p>Lives: " + lives + "</p>" +
            "<p>Current Word: " + dashes.join(" ") + "</p>" +
            "<p> Previous Guesses:" + guesses.join(", ") + "</p>";
        document.querySelector("#game").innerHTML = html;
        console.log(htmlRewrite);
    }

    htmlRewrite();

    function reset() {
    	randomWord = words[Math.floor(Math.random() * words.length)];
    	for (var i = 0; i < randomWord.length; i++) {
    		dashes.push("_");
    	}
    }

  //user inputed letters using onkeyup
  document.onkeyup = function(event) {
  	if (event.keyCode >= 65 && event.keyCode <=90) {
  		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  		if (guesses.indexOf(userGuess) === -1) {
  			guesses.push(userGuess);

  			var index = randomWord.indexOf(userGuess);
  			if (index === -1) {
  					lives --;
  				}
  			while (index >=0) {
  				dashes[index] = userGuess;
  				index = randomWord.indexOf(userGuess, index +1);
  			}
  			}
  		if (dashes.includes("_") === false) {
  			wins++;
  			guesses = [];
  			dashes = [];
  			winAudio.play();
  			alert("Yeehaw Jesters Dead!")
  			reset();
  			htmlRewrite();
  		}
  		if (lives === 0) {
  			winAudioLoss.play();
  			var playAgain = alert("Return to the Ship")
  				if (playAgain = true) {
  					guesses = [];
  					dashes = [];
  					
  					reset();
  					htmlRewrite();
  					wins = 0;
  					lives = 10;
  				}
  		}	
  		}
  		htmlRewrite();
  		}

  	}
  









