$(document).ready(function(){

   // jQuery methods go here...
  //New tweet counter
  var $counter = $('.new-tweet .counter');
  const maxLength = 140;
  $('.new-tweet textarea').keyup(function() {
    var length = maxLength - $(this).val().length;

    if (length < 0) {
      // Value's negative: add .negativeValue
      $counter.addClass("negativeValue");
    } else {
      // Remove .negativeValue
     $counter.removeClass("negativeValue");
    }
    $counter.text(length);
  });
});