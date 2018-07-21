'use strict';

$(function() {

  function scroll() {
    $('.content').customScroll('destroy');

    let containerScrollWidth = $('.grid').width(),
      windowWidth = $(window).width(),
      offsetForScroll = ((windowWidth - containerScrollWidth)/2) + 8;

    let heigthWithoutScroll = $('.content__withoutscroll').height();

    $('.content__inner')
      .css({
        'padding-top' : heigthWithoutScroll + 'px'
      });

    $('.content').customScroll({
      prefix: 'custom-scroll_',
      barMinHeight: 10,
      offsetTop: heigthWithoutScroll,
      offsetBottom: 0,
      barHtml: '<div /><span />',
      vertical: true,
      horizontal: false
    });

    $('.custom-scroll_bar-y').css('right', offsetForScroll + 'px');

    if( $('.content__inner').outerHeight() < $(window).height() ) {
      $('.content').customScroll('destroy');
    }
  };

  setTimeout(function() {
    scroll();
  }, 10);

  new ResizeSensor(jQuery('.content__withoutscroll, .content__withscroll, html'), function() {
    scroll();
  });

});
