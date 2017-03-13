var numSquares = 6;
var colors = genColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay"); 
var msgDisp = document.querySelector("#msg");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#btn");
var backgroundColor = "#232323";
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");

colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = genColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
})

hardBtn.addEventListener("click", function(){

	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = genColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";	
	}

})



resetBtn.addEventListener("click", function(){
	colors = genColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	msgDisp.textContent = "";
	this.textContent = "New Colors";

	h1.style.background = "steelblue";
	for(var i = 0; i < squares.length; i++){
		//change colors
		squares[i].style.background = colors[i];
	}
})

for(var i = 0; i < squares.length; i++){
	//add colors
	squares[i].style.background = colors[i];

	//add click listeners
	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.background;
		//right color
		if (clickedColor === pickedColor){
			resetBtn.textContent = "Play again";
			msgDisp.textContent = "Correct!";
			changeColor(clickedColor);
			h1.style.background = clickedColor;

		}
		//wrong color
		else {
			this.style.background = backgroundColor;
			msgDisp.textContent = "try again";
		}
	});
}



function changeColor(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	var rand =  Math.floor(Math.random() * colors.length);
	return colors[rand];
}

function genColors(num){
	//make array
	var arr = []
	//add num rand colors to array
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	//return array
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	var str = "rgb(" + r + ", " + g + ", " + b + ")";
	return str;
}



