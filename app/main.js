var restartButton = document.getElementById('restartButton');
var spaces = document.getElementsByClassName('space');
var symbols = ['O', 'X'];
var turn = 0;
var notification = document.getElementById('notification');
var winnerMessage = document.getElementById('winnerMessage');


// waits for page to load before doing stuff
document.onreadystatechange = function(){
	if(document.readyState == "interactive"){
		restartButton.onclick = startGame;
		startGame();
	}
};

function startGame(){

	// reset the turn counter
	turn = 0;

	// remove the winner notification make sure div is hidden
	// add click events on squares
	winnerMessage.innerHTML = '';
	notification.style.display = "none";

	for(var i=0; i<spaces.length; i++){
		spaces[i].innerHTML = '';
		spaces[i].addEventListener("click", takeSpace);
	}
}

function takeSpace() {

	console.log(wins);
	turn++;
	var currentPlater = symbols[turn % 2];
	this.innerHTML = currentPlater;
	this.removeEventListener("click", takeSpace);
	
	for(var i=0; i<wins.length; i++){
	if (checkForWin(wins[i])){
		// alert("woo hoo!");

		// no more clicking!
		for(var j=0; j<spaces.length; j++){
			spaces[j].removeEventListener("click", takeSpace);
		}

		// Notify the player of success
		notification.style.display = "block";
		winnerMessage.innerHTML = "Yay! " + currentPlater + " won!";
		}
		else{
			if(turn ==9){
				notification.style.display = "block";
				winnerMessage.innerHTML="bummer you both lose";
			}
		}
		
	}
	
}

function checkForWin(winArray){

	return	spaces[winArray[0]].innerHTML !== '' && 
	spaces[winArray[0]].innerHTML === spaces[winArray[1]].innerHTML && 
	spaces[winArray[0]].innerHTML === spaces[winArray[2]].innerHTML;
	
}