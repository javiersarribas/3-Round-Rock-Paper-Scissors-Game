const options = document.querySelectorAll(".options");
    let playerScore = 0;
    let compScore = 0;
	
	/*add*/
	let moves = 3;
	/*add*/

    options.forEach((option) => {
      option.addEventListener("click", function () {
        const playerInput = this.value;
		
		/*add Added move counter */
		
        moves--;
        
		/*add*/

        const cOptions = ["Rock", "Paper", "Scissors"];
        const compInput = cOptions[Math.floor(Math.random() * 3)];
        
        updateMoves(playerInput, compInput);
        compareInputs(playerInput, compInput);
        updateScore();
        if(checkWinner()){
          
          updateScore();
        }
	
		
		
      });
    });

    function updateMoves(playerInput, compInput){
      document.getElementById("p-move").src = `img/${playerInput}.png`;
      document.getElementById("c-move").src = `img/${compInput}.png`;
    }


    function compareInputs(playerInput, compInput) {
      const currentMatch = `${playerInput} vs ${compInput}`;
     
      if (playerInput === compInput) {
        displayResult(currentMatch + " = We have a Tie!");
		changeBg("tie");
        return;
      }
		//Check for Rock
      if (playerInput === "Rock") {
        if (compInput === "Scissors") {
          displayResult(`${currentMatch} = You Win!`);
          playerScore++;
		  changeBg("win");
        } else {
          displayResult(`${currentMatch} = Computer Wins`);
          compScore++;
		  changeBg("lose");
        }
      }
      //Check for Paper
      else if (playerInput === "Paper") {
        if (compInput === "Rock") {
          displayResult(`${currentMatch} = You Win!`);
          playerScore++;
		  changeBg("win");
        } else {
          displayResult(`${currentMatch} = Computer Wins`);
          compScore++;
		  changeBg("lose");
        }
      }
      //Check for Scissors
      else {
        if (compInput === "Paper") {
          displayResult(`${currentMatch} = You Win!`);
          playerScore++;
		  changeBg("win");
        } else {
          displayResult(`${currentMatch} = Computer Wins`);
          compScore++;
		  changeBg("lose");
        }
      }
    }
	
	//Updates score bar for Player and Computer when winning rounds
    function updateScore() {
      document.getElementById("player-score").textContent = playerScore;
      document.getElementById("comp-score").textContent = compScore;
	  document.getElementById("rounds").textContent = moves;
	  
    }

    function checkWinner() {
      if (moves == 0 || playerScore == 2 || compScore == 2) {
        var winner = "";
		
		if(playerScore > compScore){
			winner="You are the champion! Woo Hoo!";
			changeBg("win");
		}
        
		if(playerScore === compScore){
			winner="You have ties!";
			changeBg("tie");
		}
		
		if(playerScore < compScore){
			winner="You lose... Let's try again!";
			changeBg("lose");
		}
		  		  
        displayResult(winner);
		
		
		hideOptions();
		unhideRestart();
		return true;		
      }
	  return false;
	  
    }
	
	
	
	/*Change BG */
	
	function changeBg(winnerStatus) {
		
		var el = document.getElementById("container-result");
		var elClasses = el.classList;
		
		el.classList.remove(elClasses);
		
		if(winnerStatus === "win"){
			el.classList.add("container-result-win");
		}
		
		if(winnerStatus === "lose"){
			el.classList.add("container-result-lose");
		}
		
		if(winnerStatus === "tie"){
			el.classList.add("container-result-default");
		}
			
	}
	
	
	/*
* @param {textDebugger} String
* Changes the inner text of a debugging element present
* in the template.
*/		 
function displayResult(textResult) {
    var resultEl = document.getElementById("result");
	resultEl.innerHTML=textResult;	  
}

/* Hide options when game ends */

function hideElement(el) {
	//Grab the classList of the element and add a new one
	el.classList.add("hiddenStyle");
}

function hideOptions(){
	
	var el = document.getElementById("options");
	hideElement(el);
}

function hideRestart(){
	var el = document.getElementById("restart-action");
	hideElement(el);
}

/* Unhide "Restart" <a> element to allow restarting the game */

function unhideElement(el){
	el.classList.remove("hiddenStyle");
	
}

function unhideOptions(){
	var el = document.getElementById("options");
	unhideElement(el);
}

function unhideRestart(){
	var el = document.getElementById("restart-action");
	unhideElement(el);
}


/* Restart button and reset values to default */

function restart(){
	moves=3;
	playerScore=0;
	compScore=0;
	updateScore();
	hideRestart();
	unhideOptions();
}



