$(document).ready(function() {
  setHeight();
});

function setHeight() {
  const screenHeight = window.innerHeight;
  $('.full-screen-image').css({"height": screenHeight+"px"});
  $('.overlay').css({"height": screenHeight+"px"});
  $('.welcome-container').css({"height": screenHeight+"px"});
}

$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});
