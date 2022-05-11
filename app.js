$(function () {
  $('.box1').mouseover(function() {
    $('.box1').addClass('box1-ext');
  }).mouseout(function () {
    $('.box1').removeClass('box1-ext');
  });
});