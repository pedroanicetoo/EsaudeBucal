// caroseul
var carousel = document.getElementById("carousel");
var slides = 3;
var speed = 5000; // 5 segundos
function carouselHide(num) { //esconder o slide
    indicators[num].setAttribute("data-state", "");
    slides[num].setAttribute("data-state", "");
    slides[num].style.opacity = 0;
}

function carouselShow(num) { //mostrar o slide
    indicators[num].checked = true;
    indicators[num].setAttribute("data-state", "active");
    slides[num].setAttribute("data-state", "active");
    slides[num].style.opacity = 1;
}

function setSlide(slide) { //selecionar slide
    return function() {
        for (var i = 0; i < indicators.length; i++) {
            indicators[i].setAttribute("data-state", "");
            slides[i].setAttribute("data-state", "");
            carouselHide(i);
        }

        indicators[slide].setAttribute("data-state", "active");
        slides[slide].setAttribute("data-state", "active");
        carouselShow(slide);
        clearInterval(switcher);
    };
}

function switchSlide() { //trocar slide
    var nextSlide = 0;
    for (var i = 0; i < indicators.length; i++) {
        if (
            indicators[i].getAttribute("data-state") == "active" &&
            i !== indicators.length - 1
        ) {
            nextSlide = i + 1;
        }

        carouselHide(i);
    }

    carouselShow(nextSlide);
}

if (carousel) {
    var slides = carousel.querySelectorAll(".slide");
    var indicators = carousel.querySelectorAll(".indicator");
    var switcher = setInterval(function() {
        switchSlide();
    }, speed);
    for (var i = 0; i < indicators.length; i++) {
        indicators[i].addEventListener("click", setSlide(i));
    }
}
//slowMove on page
$(document).ready(function(){  
  $("#inicio").click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
  });
});

$(document).ready(function(){  
  $("#objetivo").click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top-65
    }, 1000);
  });
});

$(document).ready(function(){  
  $("#realizacao").click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top-65
    }, 1000);
  });
});
$(document).ready(function(){  
  $("#contato").click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top-65
    }, 1000);
  });
});