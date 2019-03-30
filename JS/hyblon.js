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
  }
});

var currentScrollPosition = $(window).scrollTop();
console.log(currentScrollPosition);
      
// TESTO FADE-IN // verificare numero pixel necessari

$(window).on('scroll', function() {
  if($(document).scrollTop() > 400){  
    $(window).off("scroll");
    // alert('letse gooo');
    $('.storia').addClass('fadeIn');
  }
}); 

// COORDINATE DEL MOUSE // 
$(document).ready(function() {
  $(this).on("mousemove", function(event) {
      var position = " Y Coordinate: " + event.pageY
     console.log(position);       
  });
});


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


// SCROLLTO ANIMATIONS
$('#azienda').click(function() {
  $('html, body').animate({
    scrollTop:$('.container_storia').offset().top - 90
  }, 600)
});
$('#prodotti').click(function() {
  $('html, body').animate({
    scrollTop:$('.title_prod').offset().top - 60
  }, 600)
});
$('#preparazione').click(function() {
  $('html, body').animate({
    scrollTop:$('.title_prep').offset().top - 60
  }, 600)
});
$('#riconoscimenti').click(function() {
  $('html, body').animate({
    scrollTop:$('.title_rico').offset().top - 100
  }, 600)
});
$('#contatti').click(function() {
  $('html, body').animate({
    scrollTop:$('.cont_map').offset().top -30
  }, 600)
});


// $(document).scroll(function() {
//   var cutoff = $(window).scrollTop() + 70;
  
//   $('.section').each(function(){
//       if($(this).offset().top + $(this).height() > cutoff){
//           $('.section').removeClass('current');
//           $(this).addClass('current');
//           return false; // stops the iteration after the first one on screen
//       }
//   });
// });

// HIGHLIGHT NAV SECTION //

$(".welcome").mouseenter(function(){
  $('li:nth-child(1) > .line').addClass('prova1');
});
$(".welcome").mouseleave(function(){
  $('li:nth-child(1) > .line').removeClass('prova1');
});

$(".azienda").mouseenter(function(){
    $('li:nth-child(2) > .line').addClass('prova1');
});
$(".azienda").mouseleave(function(){
    $('li:nth-child(2) > .line').removeClass('prova1');
});

$(".prodotti").mouseenter(function(){
    $('li:nth-child(3) > .line').addClass('prova1');
  });
  $(".prodotti").mouseleave(function(){
    $('li:nth-child(3) > .line').removeClass('prova1');
});

$(".preparazione").mouseenter(function(){
    //  var id = $(this).attr('id');
    //  $('a').removeClass('active');
    //  $("[href=#"+id+"]").addClass('active');
    $('li:nth-child(4) > .line').addClass('prova1');
  });
$(".preparazione").mouseleave(function(){
    $('li:nth-child(4) > .line').removeClass('prova1');
});

$(".riconoscimenti").mouseenter(function(){
    $('li:nth-child(5) > .line').addClass('prova1');
  });
  $(".riconoscimenti").mouseleave(function(){
    $('li:nth-child(5) > .line').removeClass('prova1');
});

$(".cont_of_cont").mouseenter(function(){
    $('li:nth-child(6) > .line').addClass('prova1');
  });
  $(".cont_of_cont").mouseleave(function(){
    $('li:nth-child(6) > .line').removeClass('prova1');
});

$(function() {
                
  var documentEl = $(document),
      fadeElem = $('.fade_scroll');
  
  documentEl.on('scroll', function() {
      var currScrollPos = documentEl.scrollTop();
      
      fadeElem.each(function() {
        var $this = $(this),
              elemOffsetTop = $this.offset().top;
        if (currScrollPos > elemOffsetTop - 300) {
            $(this).addClass('fadeIn')
        }
      }); 
  });
  
});
