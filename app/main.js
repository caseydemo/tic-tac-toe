var restartButton = document.getElementById('restartButton');
var spaces = document.getElementsByClassName('space');
var symbols = ['O', 'X'];
var turn = 0;


// waits for page to load before doing stuff
document.onreadystatechange = function(){
	if(document.readyState == "interactive"){
		restartButton.onclick = startGame;
		startGame();
	}
};

function startGame(){

	// clear the board


	// reset the turn counter
	turn = 0;

	// remove the winner notification make sure div is hidden
	// add click events on squares

	for(i=0; i<spaces.length; i++){
		spaces[i].innerHTML = '';
		spaces[i].addEventListener("click", takeSpace);
	}
}

function takeSpace() {

	turn++;
	this.innerHTML = symbols[turn % 2];
	this.removeEventListener("click", takeSpace);
	
}