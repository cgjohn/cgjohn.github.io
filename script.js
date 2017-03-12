var mainImg = document.querySelector(".hero-img-cont");

// function swapImg(){
// 	mainImg.classList.toggle("img-alt");
// }



// mainImg.style.backgroundImage = "url(Images/name-logo.png)";

// setInterval(swapImg, 6000);

setInterval(
	function(){document.querySelector(".down").classList.toggle("blink")
}, 700);


var hashTagActive = "";

$(".scroll").on("click" , function (event) {
    event.preventDefault();
    //calculate destination place
    var dest = 0;

    if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
        dest = $(document).height() - $(window).height();
    } 
    else {
        dest = $(this.hash).offset().top;
    }
    //go to destination
    $('html,body').animate({
        scrollTop: dest
    }, 1000, 'swing');

    hashTagActive = this.hash;
});
