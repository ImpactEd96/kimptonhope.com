(function () {
  'use strict';

  var images = Array.from(document.getElementsByTagName('img'));

  function removeAnimation(img) {
    var parent = img.parentElement;
    if (parent) {
      parent.style.animation = 'none';
    }
  }

  images.forEach(function (img) {
    if (img.complete) {
      removeAnimation(img);
    } else {
      img.addEventListener('load', function () {
        removeAnimation(img);
      });
    }
  });
})();
