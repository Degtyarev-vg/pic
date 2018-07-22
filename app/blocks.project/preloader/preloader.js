'use strict';

$(function() {

  setTimeout(function() {
    $('.preloader').addClass('preloader_animated');
  }, 100);

  setTimeout(function() {
    $('.preloader').delay(350).fadeOut('slow');
  }, 4000);

});
