/*var wlApp = {
  openInNewTab: function(url){
    var win = window.open(url, '_blank');
    win.focus();
  }
};
*/

function onPageReady() {
  var $backgroundElement = $("#homepage-background");
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
}


$(document).ready(onPageReady);
