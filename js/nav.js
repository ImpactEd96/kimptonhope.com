(function () {
  'use strict';

  var menuToggle = document.getElementById('menuToggle');
  var menuButton = document.getElementById('menuButton');
  var verticalMenu = document.getElementById('verticalMenu');
  var horizontalMenu = document.getElementById('horizontalMenu');

  if (!horizontalMenu) return;

  var totalWidth = horizontalMenu.clientWidth;

  function showHamburgerMenu() {
    menuButton.style.display = 'flex';
    verticalMenu.style.display = 'block';
    horizontalMenu.style.display = 'none';
    horizontalMenu.style.visibility = 'hidden';
  }

  function showHorizontalMenu() {
    menuButton.style.display = 'none';
    verticalMenu.style.display = 'none';
    horizontalMenu.style.display = 'flex';
    horizontalMenu.style.visibility = 'visible';
  }

  function checkWidth() {
    if (window.innerWidth <= 1024) {
      showHamburgerMenu();
    } else {
      showHorizontalMenu();
    }
  }

  checkWidth();

  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(checkWidth, 100);
  });

  window.addEventListener('hashchange', function () {
    menuToggle.checked = false;
  });
})();
