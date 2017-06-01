var first = document.querySelectorAll('.first')[0].children;
var halfCircles = document.querySelectorAll('.halfCircle');
var info = document.querySelectorAll('.icon')[0];
var x = document.querySelectorAll('.icon')[1];
var instruct = document.querySelectorAll('.instructions')[0];
var button = document.querySelectorAll('button')[0];
console.log(info);
for(var i = 0; i < halfCircles.length; i++){
	halfCircles[i].addEventListener("click", function(){
		var idNum = this.id;
		console.log(idNum)
		if (idNum < 3){
			for (var j = idNum; j < 3; j++){
				console.log("flipping " + j);
				halfCircles[j].classList.add('played');
				halfCircles[j].style.zIndex = halfCircles.length - j ;
			}
		}
		else if (idNum < 8){
			for (var j = idNum; j < 8; j++){
				halfCircles[j].classList.add('played');
				halfCircles[j].style.zIndex = halfCircles.length - j ;

			}
		}
		else {
			for (var j = idNum; j < 15; j++){
				halfCircles[j].classList.add('played');
				halfCircles[j].style.zIndex = halfCircles.length - j ;
			}
		}
	});
}

info.addEventListener("click", function(){
	console.log(halfCircles[0].opacity);
	info.classList.add('fa-info-circle');
	if(halfCircles[0].classList[1]){
		console.log('true');
		for(var i = 0;i < halfCircles.length; i++){
			halfCircles[i].classList.remove('invisible');
		}
		instruct.classList.add('invisible');
		button.classList.remove('invisible');
		info.classList.add('fa-info-circle');
		info.classList.remove('fa-times-circle');
	}
	else {
		for(var i = 0;i < halfCircles.length; i++){
			halfCircles[i].classList.add('invisible');
		}
		instruct.classList.remove('invisible');
		button.classList.add('invisible');
		info.classList.remove('fa-info-circle');
		info.classList.add('fa-times-circle');
	}
})

