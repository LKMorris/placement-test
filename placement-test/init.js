$(document).ready(function(){
    $('.images').slick({
        dots: true,
        infinite: true,
        fade: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
  ]
})
});

function revealMessage1() {
    document.getElementById("hiddenMessage1").style.display = 'block';
}

function revealMessage2() {
    document.getElementById("hiddenMessage2").style.display = 'block';
}

function revealMessage3() {
    document.getElementById("hiddenMessage3").style.display = 'block';
}

function revealMessage4() {
    document.getElementById("hiddenMessage4").style.display = 'block';
}

function revealMessage5() {
    document.getElementById("hiddenMessage5").style.display = 'block';
}

window.onresize = resize;

function resize()
{
 alert("resize event detected!");
}