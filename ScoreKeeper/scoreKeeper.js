
$(document).ready(function () {

    $('#myModal').modal('show');
    $('#myModal').classList.remove("hide");

});



var p1Button = document.getElementById("p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector(".reset");
var scoreIn = document.querySelector('#scoreIn');

var p1Disp = document.getElementById("p1Disp");
var p2Disp = document.getElementById("p2Disp");

var p1NameIn = document.querySelector("p1");
var p1Name = "";
var p2NameIn = document.querySelector("p2");
var p2Name = "";

var selectedPlayer  = "Neither";

var maxScore = 0;
var p1Score = 0;
var p2Score = 0;

var winBy = 2;

var p1Win = false;
var p2Win = false;

var winBy = 1;

var up = false;
var down = false;
var left = false;
var right = false;

resetButton.style.visibility = "hidden";

document.onkeydown = function() {

	if(window.event.keyCode == 13){
		scoreIn.blur();
	}

	if(window.event.keyCode == 40){
		left = true;
		right = false;
	}
	if(window.event.keyCode == 37){
		selectedPlayer = "Player 1"
		up = true;
		down = false;
		right = false;
		left = false;
	}
	if(window.event.keyCode == 38){
		right = true;
		left = false;
	}
	if(window.event.keyCode == 39){
		selectedPlayer = "Player 2"
		down = true;
		up = false;
		right = false;
		left = false;
	}

	document.querySelector(".selectedPlayer").textContent = selectedPlayer;

	if(selectedPlayer === "Player 1"){
		p1Disp.style.textDecoration = "underline";
		p2Disp.style.textDecoration = "none";
	}

	if(selectedPlayer === "Player 2"){
		p1Disp.style.textDecoration = "none";
		p2Disp.style.textDecoration = "underline";
	}

	// increment P!
	if(up === true && right === true){
		if(maxScore > 0) {
			if(p1Win === false && p2Win === false){
			p1Score++;
			p1Disp.textContent = p1Score;
		}
			if(p1Score >= maxScore && p1Score >= p2Score + winBy){
				p1Win = true;
				p1Disp.style.color = 'green';
				p2Disp.style.color = 'red';
			}
		}
		else {
			document.querySelector('#score').textContent = "Set score above 0 to start";
		}
	}
	// decrement P1
	if(up === true && left === true){
		if(maxScore > 0) {
			if(p1Win === false && p2Win === false){
			p1Score--;
			p1Disp.textContent = p1Score;
		}
			if(p1Score >= maxScore && p1Score >= p2Score + winBy){
				p1Win = true;
				p1Disp.style.color = 'green';
				p2Disp.style.color = 'red';
			}
		}
		else {
			document.querySelector('#score').textContent = "Set score above 0 to start";
		}
	}

	// increment P2
	if(down === true && right === true){
		if (maxScore > 0) {
			if(p1Win === false && p2Win === false) {
				p2Score++;
				p2Disp.textContent = p2Score;
			}

			if(p2Score >= maxScore && p2Score >= p1Score + winBy){
				p2Win = true;
				p2Disp.style.color = 'green';
				p1Disp.style.color = 'red';
			}
		}
		else {
			document.querySelector('#score').textContent = "Set score above 0 to start";
		}
	}
	// decrement P2
	if(down === true && left === true){
		if (maxScore > 0) {
			if(p1Win === false && p2Win === false) {
				p2Score--;
				p2Disp.textContent = p2Score;
			}

			if(p2Score >= maxScore && p2Score >= p1Score + winBy){
				p2Win = true;
				p2Disp.style.color = 'green';
				p1Disp.style.color = 'red';
			}
		}
		else {
			document.querySelector('#score').textContent = "Set score above 0 to start";
		}
	}

	//once game has started, users can't adjust what they are playing to 
	if(p2Score !== 0 || p1Score !== 0 ){
		scoreIn.style.visibility = "hidden";
	}

	// new game button appears at the end of a current game
	if(p2Win === true || p1Win === true){
		resetButton.style.visibility = "visible";
	}

};

function WinBy1() {
	winBy = 1}

function WinBy2() {
	winBy = 2;
}

//adds what the score is to
scoreIn.addEventListener("change", function(){
	maxScore = scoreIn.value;
	document.querySelector('#score').textContent = maxScore;
	maxScore = parseInt(maxScore)
});

//resets everything for a new game
resetButton.addEventListener("click", function(){
	p2Score = 0;
	p2Win = false;
	p1Score = 0;
	p1Win = false;

	up, down, left, right = false;

	maxScore = 0;

	document.querySelector('#score').textContent = maxScore;

	scoreIn.value = '0'

	document.querySelector("#By1").checked = true;
	document.querySelector("#By2").checked = false;

	p1Disp.textContent = p1Score;
	p1Disp.style.color = "black"
	p2Disp.textContent = p2Score;
	p2Disp.style.color = "black"
	scoreIn.style.visibility = "visible";
	resetButton.style.visibility = "hidden";
});
