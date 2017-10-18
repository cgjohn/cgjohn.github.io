var body = document.querySelector('body');
var timeSet= document.getElementById("input").value;
var startButton = document.querySelector('#start');
var inputField = document.querySelector('.inputField');
var controlBtn = document.querySelector('.pause');
var playBtn = document.querySelector('.play');
var resetBtn = document.querySelector('.reset');
var circles = document.querySelectorAll(".circle");

var lastClickedCircle = circles[0];
var counting = false;

var initialTime = 0;
var gradient = 0;
var playingAudio = false;

var colors = [['#F78154', '#20A39E'], ['#FCD878', '#B5DDA4'], ['#F25F5C', '#FFE066'], ['#F5F5F5', '#3C3C3C']]
var colorLeft = colors[0][0]
var colorRight = colors[0][1]

var audio = new Audio('alarm.mp3');  

body.style.background = 'linear-gradient(to right,' + colorLeft + ' 00% ,' + colorRight + ' 00%)';

function counter() {
    if(timeSet <= 0){
        clearInterval(interval);
        audio.play();
        timeSet = 0;
        playingAudio = true;
        counting = false;
    }
    if(!counting) {
        counting = true;
    }
    //rounds to second decimal
    timeSet = Math.round(timeSet * 100) / 100;
    
    //getting number increasing from 1 - 100 to move left to right gradient
    gradient = Math.ceil(100 - (timeSet / initialTime * 100));
    body.style.background = body.style.background.replace(new RegExp('..%', 'g'), gradient + '%')
    console.log('gardient = ', gradient)
    var seconds = timeSet % 60;

    if (seconds < 10){
        seconds = '0' + seconds;
    }

    //creates a valid minute/second output
    var str = Math.floor(timeSet / 60) + '.' + seconds;
    document.querySelector('.number').textContent = str;

    timeSet = timeSet - 1;
}

function start(){
    timeSet = document.getElementById("input").value;
        
    //checks for valid input
    if(isNaN(timeSet) || timeSet <= 0){
        document.querySelector('.alertContainer').style.opacity = 1;
        document.querySelector('.alertText').innerHTML = "please input a positive number";
    }
    else {
        if(controlBtn.classList[0] === 'play'){
            controlBtn.src = './pause.png';
            controlBtn.classList.toggle('play');
            controlBtn.classList.toggle('pause');
        }          

        document.querySelector('.pause').style.opacity = 1;
        document.querySelector('.reset').style.opacity = 1;
        /******************
        to get a standard int into seconds:
            take floor of given int
            this will be the number before decimal
            multiply by 60
            then mod by 60 to get the remainder
            this will be the seconds counter
        *******************/
        timeSet = document.getElementById("input").value;
        timeSet = timeSet * 60
        initialTime = timeSet;
        document.querySelector('.alertContainer').style.opacity = 0;
        document.querySelector('.inputField').style.opacity = 0;
        document.querySelector('.countdown').style.opacity = 1;
        
        counter()
        interval = setInterval(counter, 1000);//1000 ms  = 1s

    }
}

$(document).ready(function () {
    circles[0].style.opacity = .4;
    //created the circles to change color
    for(var i = 0; i < circles.length; i++){
        //add colors
        colorLeft = colors[i][0]
        colorRight = colors[i][1]
        circles[i].style.background = 'linear-gradient(to right,' + colorLeft + ' 50% ,' + colorRight + ' 50%)'

        //add click listeners
        circles[i].addEventListener("click", function() {
            console.log('circle clicked', circles)
            if(this.style.opacity != .4){
                this.style.opacity = .4
                lastClickedCircle.style.opacity = 1;
                lastClickedCircle = this;
            }

            var clickedColor = this.style.background;
            //decides whether or not to set % to 0 or active %
            if(counting == false){
                body.style.background = clickedColor.replace(new RegExp('50%', 'g'), '00%')
            }
            else{
                body.style.background = clickedColor.replace(new RegExp('..%', 'g'), gradient + '%')
            }
            //console.log('setting background to: ', body.style.background);
        });
    }

    //allows the timer to be started through hitting enter
    document.onkeydown = function() {
        if(window.event.keyCode == 13){
            start();
        }
    }
    
    //start button 
    startButton.addEventListener('click', function(){
        start(); 
    });

    //pause/play button
    controlBtn.addEventListener('click', function(){
        if(playingAudio == true) {
            audio.pause();
            playingAudio = false;
        }
        clearInterval(interval);
        console.log(controlBtn.classList[0])

        if(controlBtn.classList[0] === 'play'){
            controlBtn.src = './pause.png';
            counter()
            interval = setInterval(counter, 1000);
        }
        else {
            clearInterval(interval);
            controlBtn.src = './play.png';
        }
    
        controlBtn.classList.toggle('play');
        controlBtn.classList.toggle('pause');

    });
    
    /* *** reset button ***
    - resets audio, background color, countdown, 
        and switches back to input field
    */
    resetBtn.addEventListener('click', function(){
        console.log("reset clicked");
        controlBtn.style.opacity = 0;
        document.querySelector('.inputField').style.opacity = 1;
        document.querySelector('.countdown').style.opacity = 0;
        document.querySelector('.reset').style.opacity = 0;
        clearInterval(interval);
        timeSet = 0;
        console.log('body background before reset: ', body.style.background)
        console.log(' background reset action: ', body.style.background.replace(new RegExp('.%', 'g'), '00%'))
        if(gradient < 10){
            body.style.background = body.style.background.replace(new RegExp('.%', 'g'), '00%')
        }
        else if(gradient > 100){
            body.style.background = body.style.background.replace(new RegExp('..%', 'g'), '00%')
        }
        else {
            body.style.background = body.style.background.replace(new RegExp('...%', 'g'), '00%')
        }
        console.log('body background after reset: ', body.style.background)
        document.querySelector('.number').textContent = '';
        audio.pause();
        audio.currentTime = 0;
        playingAudio = false;
        counting = false;
    });


});
