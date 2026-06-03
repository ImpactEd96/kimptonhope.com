(function () {
  'use strict';

  var videos = document.querySelectorAll('video');

  if (!videos.length) return;

  var playPauseTemplate = document.querySelector('template#playPauseButton');

  if (!playPauseTemplate) {
    var temp = document.createElement('template');
    temp.id = 'playPauseButton';
    temp.innerHTML =
      '<div class="playPauseButton">' +
        '<svg class="playIcon" viewBox="0 0 50 50" style="display:none">' +
          '<circle cx="25" cy="25" r="20" fill="rgba(0,0,0,0.3)"/>' +
          '<polygon points="20,15 20,35 38,25" fill="white"/>' +
        '</svg>' +
      '</div>';
    document.body.appendChild(temp);
    playPauseTemplate = temp;
  }

  videos.forEach(function (video) {
    var container = video.parentElement;
    if (!container || !container.classList.contains('video_container')) return;

    var button = playPauseTemplate.content.cloneNode(true).firstElementChild;
    container.appendChild(button);

    var playIcon = button.querySelector('.playIcon');

    button.addEventListener('click', function () {
      if (video.paused) {
        video.play();
        playIcon.style.display = 'none';
      } else {
        video.pause();
        playIcon.style.display = 'block';
      }
    });

    video.addEventListener('play', function () {
      playIcon.style.display = 'none';
    });

    video.addEventListener('pause', function () {
      playIcon.style.display = 'block';
    });
  });
})();
