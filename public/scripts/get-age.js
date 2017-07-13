$(document).ready(function(){

   // jQuery methods go here...
  //Age of old tweets


  function getAge(timestamp) {

    return Date.now() - timestamp;
  }


  /*var $age = $('.new-tweet .counter');
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
*/