$(window).on('load', scompare) ;
function scompare() {
  $("#caricamento, .inizio").fadeOut(400);
};


   // NAVBAR SCURA //
$(window).on("scroll", function() {
  if($(window).scrollTop()){
     $('nav').addClass('ontop');
          
  }
  else {
    $('nav').removeClass('ontop');
    console.log('fd');
  }
})   

var currentScrollPosition = $(window).scrollTop();
console.log(currentScrollPosition);
      
// TESTO FADE-IN // // verificare numero pixel necessari
$(window).on('scroll', function() {
  if($(document).scrollTop() > 500){  
    $(window).off("scroll");
    // alert('letse gooo');
    // $('.storia').fadeIn();
    $('.storia').addClass('fadeIn');
  }
}); 

$(document).ready(function() {
  $(this).on("mousemove", function(event) {
      var position = " Y Coordinate: " + event.pageY
     console.log(position);       
  });
});


// SHOW MORE //
$(".show").click(buttonino);

var vis=0;
function buttonino() {
  $(".descrizione").toggleClass("vista")
  if (vis==0) {
    $(".descrizione").animate({height:"550px"});
    $(".show").html("Show less");
    vis=1;
  } else {
      $(".descrizione").animate({height:"135px"});

      $(".show").html("Show more");
      vis=0;
  }
};

// GOOGLE MAP //
function initMap() {
  var perugia = {lat: 43.107260, lng: 12.407274};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: perugia
  });
  var marker = new google.maps.Marker({
    position: perugia,
    map: map
  });
};

function active() {
  $(this).addClass("hovered")
};
function noactive() {
  $(".coverdiv").removeClass("hovered")
};

$(".coverdiv").mouseover(active);
$(".activity").mouseleave(noactive);


$(document).ready(function(){
  $('.next').click(function(){
    var thisImg = $('.active');
    var nextImg = thisImg.next();

    if(nextImg.length){
      thisImg.removeClass('active');
      nextImg.addClass('active');
    }
  });

  $('.prev').click(function(){
    var thisImg = $('.active');
    var prevImg = thisImg.prev();

    if(prevImg.length){
      thisImg.removeClass('active');
      //how to style single CSS property:
      prevImg.addClass('active').css('z-index', 10);
    }
  });
}); // slideshow immagini //

$(document).ready(function(){
  $('.next-in').click(function(){
    var thisImg = $('.active');
    var nextImg = thisImg.next();

    if(nextImg.length){
      thisImg.removeClass('active');
      nextImg.addClass('active');
    }
  });

  $('.prev-in').click(function(){
    var thisImg = $('.active');
    var prevImg = thisImg.prev();

    if(prevImg.length){
      thisImg.removeClass('active');
      //how to style single CSS property:
      prevImg.addClass('active').css('z-index', 10);
    }
  });
}); //slideshow di INDEX


function sldshow() {
  $("nav, .language").addClass("novis");
  $(".copritutto").toggleClass("visibile");
  $(".slider-in").toggleClass("sldshow")
}; //attivare lo slideshow fasullo
function back(){
    $("nav, .language").removeClass("novis");
    $(".copritutto").removeClass("visibile");
    $(".slider-in").removeClass("sldshow");
};
$(".copritutto, .chiudi").click(back); //funzione per togliere lo slideshow aggiuntiva
$(document).keyup(function(e) {
  if(e.keyCode== 27) {
    back();
  }
});
$(".box").click(sldshow);