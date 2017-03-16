import $ from "jquery";

$('document').ready(function(){

  // VIDEO
  if ($('.video').length) {

    var videoModule = $('.video');
    var videoPlayBtn = videoModule.find('.video__play-btn');
    var videoReplayBtn = videoModule.find('.video__replay-btn');
    var videoPlayer = videoModule.find('.video__element');

    // play video
    videoPlayBtn.on('click', function(e) {
      e.preventDefault();
      videoPlayer.get(0).play();
      videoPlayBtn.hide();
    });

    // whne video has finished playing
    videoPlayer.on('ended', function() {
      videoReplayBtn.show();
    });

    // replay video
    videoReplayBtn.on('click', function() {
      e.preventDefault();
      videoPlayer.get(0).play();
      videoReplayBtn.hide();
    });

  }
})
