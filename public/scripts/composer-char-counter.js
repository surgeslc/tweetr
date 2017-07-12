$(document).ready(function(){

   // jQuery methods go here...

  const maxLength = 140;
  $('.new-tweet textarea').keyup(function() {
    var length = $(this).val().length;
    var length = maxLength - length;

    if (length < 0) {
      // Value's negative: add .negativeValue
      console.log("Negative number");
      $('.counter').addClass("negativeValue");
    }
    if (length >= 0) {
      // console.log("Positive number");
      // Remove .negativeValue
     $('.counter').removeClass("negativeValue");
    }
    $('.counter').text(length);
  });
});