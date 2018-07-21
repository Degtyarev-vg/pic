'use strict';

$(function() {

  function regulationsForMq(mq) {
    if (mq.matches) {
      $('.content_index').addClass('content_index-mobile');
    } else {
      $('.video-background__player').YTPlayer();

      $('.content_index').removeClass('content_index-mobile');
    };
  };

  let mq1023 = window.matchMedia('screen and (max-width: 1023.9px)');

  mq1023.addListener(regulationsForMq);

  regulationsForMq(mq1023);

});
