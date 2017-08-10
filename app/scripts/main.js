var wlApp = {
  setupNavArrowManagement: function(){
    var $backgroundElement = $("#section-home");
    var $window = $(window);
    var $arrow = $(".fa-angle-double-up");

    //initially hide arrow
    $arrow.hide();

    //listen to window scroll for visibility
    $window.scroll(function() {
      var heightOfElement= $backgroundElement.offset().top + $backgroundElement.outerHeight();
      var topOfScreen = $window.scrollTop();

      if((topOfScreen < heightOfElement)){
        $arrow.hide();
      }
      else {
        $arrow.show();
      }
    });
  },
  setupLandingTypedText: function(){

    var $subText = $('.head-text .sub-tagline');
    var typed = new Typed('.head-text .typed-text', {
      strings: ["a web developer,", "a UX Designer,", "a creative being,", "Whitney Larios."],
      typeSpeed: 40,
      callback: function(){

      }
    });
    setTimeout(function(){
      $subText.fadeIn(1500);
    },4500);
  },
  openInNewTab: function(url){
    var win = window.open(url, '_blank');
    win.focus();
  },

  setupContact: function(){
    var $upArrow = $('.nav-up-btn');

    $('#section-contact .contactLink').click(function(){
      $upArrow.addClass('hidden');
      $('#contactForm').slideDown("slow", function(){
      });
    });


    $('#contactForm .close-icon').click(function(){
      $('#contactForm').slideUp("slow", function(){
        $upArrow.removeClass('hidden');
      });
    });
  }
};


$(function(){

  wlApp.setupNavArrowManagement();

  wlApp.setupLandingTypedText();

  wlApp.setupContact();

});

