$(document).ready(function(){
    $(window).scroll(function(){
    if($(this).scrollTop() > 40){
        $('#topBtn').fadeIn();
      } else{
        $('#topBtn').fadeOut();
    }
});
  






$("#topBtn").click(function(){
    $('html ,body').animate({scrollTop : 0},800);
    });
});
  





$("#about-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#company").offset().top
    }, 1000);
});

$("#catalog-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#catalog").offset().top
    }, 1500);
});

$("#team-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#team").offset().top
    }, 1000);
});

$("#contact-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
});

$(".icon-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#company").offset().top
    }, 1000);
});







// $(".menu-toggle-btn").click(function(){
//     $(this).toggleClass("fa-times");
//     $(".navigation-menu").toggleClass("active");
//     return false;
//   });

$(document).ready(function() {
	   
    // JQUERY NAV TOGGLE
    $('#menu').bind('click',function(event){
        $('#mainnav ul').slideToggle();
    });

    $(window).resize(function(){  
        let w = $(window).width();  
        if(w > 850) {  
            $('#mainnav ul').removeAttr('style');  
        }  
    });
      
  });




$("#about-button--mob").click(function() {
    $('html, body').animate({
        scrollTop: $("#company").offset().top
    }, 1000);
});

$("#catalog-button--mob").click(function() {
    $('html, body').animate({
        scrollTop: $("#catalog").offset().top
    }, 1500);
});

$("#team-button--mob").click(function() {
    $('html, body').animate({
        scrollTop: $("#team").offset().top
    }, 1000);
});

$("#contact-button--mob").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
});