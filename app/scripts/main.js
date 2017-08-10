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

  setupContactFunctionality: function(){
    var $upArrow = $('.nav-up-btn'),
      $form = $('#contactPageForm'),
      $submitBtn = $form.find('input[type=submit]'),
      $successMsg = $form.find('.success-msg'),
      $failureMsg = $form.find('.failed-msg');

    /* setup modal behavior */
    //--display form
    $('#section-contact .contactLink').click(function(){
      $upArrow.addClass('hidden');
      $('#contactForm').slideDown("slow", function(){
      });
    });

    //--hide form
    $('#contactForm .close-icon').click(function(){
      $('#contactForm').slideUp("slow", function(){
        $upArrow.removeClass('hidden');
        //reset form status
        $form.find('input[type=text],input[type=email],textarea').val('');
        $submitBtn.show();
        $failureMsg.hide();
        $successMsg.hide();
      });
    });

    /* setup form behavior */
    $('#contactPageForm').submit(function(event){


      //hide submit button
      $submitBtn.hide();
      $failureMsg.hide();

      //get form data as josn
      var formData = {};
      $.each($form.serializeArray(), function (i, field) {
        formData[field.name] = field.value || "";
      });

      $.ajax({
          type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
          url         : 'api/contact', // the url where we want to POST
          data        : formData, // our data object
          dataType    : 'json', // what type of data do we expect back from the server
          encode          : true
        })
        // using the done promise callback
        .done(function(data) {
          $failureMsg.hide();
          $successMsg.show();
        })
        .fail(function(){
          $submitBtn.show();
          $failureMsg.show();
        });

      // stop the form from submitting the normal way and refreshing the page
      event.preventDefault();
    });

  }
};


$(function(){

  wlApp.setupNavArrowManagement();

  wlApp.setupLandingTypedText();

  wlApp.setupContactFunctionality();

});

