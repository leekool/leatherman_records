let border = document.querySelector('div#border');
let genuineLeather = document.querySelector('div#genuine-leather');
let container = document.querySelector('div.container');
let minimise = document.querySelectorAll('.minimise');
let maximise = document.querySelectorAll('.maximise');
let close = document.querySelectorAll('.close');
let header = document.querySelector('header');
let taskbarButton = document.querySelector('div#taskbar-button');
let body = document.querySelector('body');
let desktop = document.querySelector('.desktop');
let desktopIcon = document.querySelectorAll('.desktop-icon');
let desktopIconText = document.querySelector('.desktop-icon-text');
let desktopIconImage = document.querySelector('.desktop-icon-image');
let tapes = document.querySelectorAll('.lmr001');

let availableWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

function clearIconHighlight() {
  if (desktopIconText.ownerDocument.defaultView.getComputedStyle(desktopIconText, null).color == 'rgb(255, 254, 254)') {

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
         || availableWidth < 700) {
      desktopIconImage.style.content = 'url("image/leather_desktop.png")';
    } else {
      desktopIconImage.style.content = 'url("image/double/leather_desktop.png")';
    }

    desktopIconText.style.background = 'none';
    desktopIconText.style.color = '#000';
    desktopIconText.style.border = 'none';
    // desktopIconText.style.textShadow = '1px 1px #fffefe';
  }
}

function clearResizeStyles() {

  container.classList.add('hide');
  header.classList.add('hide');
  border.classList.remove('border');

  taskbarButton.classList.remove('taskbar-button-active');
  taskbarButton.classList.add('taskbar-button-inactive');
  genuineLeather.classList.remove('small-container-border');
  desktop.classList.remove('hide');

}

if (document.readyState !== 'loading') {
  bigLeather();
  desktopIconText.style.textShadow = '1px 1px #fffefe !important';
} else {
  document.addEventListener('DOMContentLoaded', bigLeather);
}

function bigLeather() {

  // minimise button
  minimise.forEach(e => e.addEventListener('click', function (e) {

    // genuineLeather is full size & visible
    if (container.ownerDocument.defaultView.getComputedStyle(container, null).display == 'flex' &&
        !container.classList.contains('small-container')) {

      container.classList.add('hide');
      header.classList.add('hide');
      border.classList.remove('border');

      taskbarButton.classList.remove('taskbar-button-active');
      taskbarButton.classList.add('taskbar-button-inactive');
      desktop.classList.remove('hide');

    // genuineLeather is full size & not visible
    } else if (container.ownerDocument.defaultView.getComputedStyle(container, null).display == 'none' &&
               !container.classList.contains('small-container')) {

      container.classList.remove('hide');
      header.classList.remove('hide');
      border.classList.add('border');

      taskbarButton.classList.remove('taskbar-button-inactive');
      taskbarButton.classList.add('taskbar-button-active');
      desktop.classList.add('hide');

    // genuineLeather is small & visible
    } else if (container.ownerDocument.defaultView.getComputedStyle(container, null).display == 'flex' &&
               container.classList.contains('small-container')) {

      container.classList.add('hide');
      header.classList.add('hide');
      genuineLeather.classList.remove('small-container-border');

      taskbarButton.classList.remove('taskbar-button-active');
      taskbarButton.classList.add('taskbar-button-inactive');

    // genuineLeather is small & not visible
    } else if (container.ownerDocument.defaultView.getComputedStyle(container, null).display == 'none' &&
               container.classList.contains('small-container')) {

      container.classList.remove('hide');
      header.classList.remove('hide');
      genuineLeather.classList.add('small-container-border');

      taskbarButton.classList.remove('taskbar-button-inactive');
      taskbarButton.classList.add('taskbar-button-active');

    }

    clearIconHighlight();
  }));

  // close button
  close.forEach(e => e.addEventListener('click', function (e) {

    // genuineLeather is small & visible
    if (container.ownerDocument.defaultView.getComputedStyle(container, null).display == 'flex' &&
        container.classList.contains('small-container')) {
      header.classList.remove('header-resize');
      container.classList.remove('small-container');
      genuineLeather.classList.remove('small-container-border');
      genuineLeather.style.width = '100%';
      genuineLeather.style.inset = '0';
    }

    border.classList.remove('border');
    container.classList.add('hide');
    header.classList.add('hide');
    desktop.classList.remove('hide');
    taskbarButton.style.display = 'none';

    clearIconHighlight();
  }));

  // clear highlighted leather desktop icon when clicking away
  if (desktopIconText.style.textShadow = 'none') {
    body.addEventListener('click', function () {
      clearIconHighlight();
    }, false);
    desktopIcon.forEach(e => e.addEventListener('click', function (e) {
      e.stopPropagation();
    }, false));
  }

  // leather desktop icon (single click)
  desktopIcon.forEach(e => e.addEventListener('click', function (e) {

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
         || availableWidth < 700) {
      desktopIconImage.style.content = 'url("image/leather_desktop-pressed.png")';
    } else {
      desktopIconImage.style.content = 'url("image/double/leather_desktop-pressed.png")';
    }

    desktopIconText.style.background = '#0404fc';
    desktopIconText.style.color = '#fffefe';
    desktopIconText.style.border = '1px dotted #fffefe';
    desktopIconText.style.textShadow = 'none';

  }));


  // leather desktop icon (double click)
  desktopIcon.forEach(e => e.addEventListener('dblclick', function (e) {

    if (taskbarButton.ownerDocument.defaultView.getComputedStyle(taskbarButton, null).display == 'none') {
      taskbarButton.style.display = 'flex';
    }

    if (!container.classList.contains('small-container')) {

      border.classList.toggle('border');
      container.classList.toggle('hide');
      header.classList.toggle('hide');
      taskbarButton.classList.remove('taskbar-button-inactive');
      taskbarButton.classList.add('taskbar-button-active');
      desktop.classList.add('hide');

     // if genuineLeather is small & not visible
     } else if (container.ownerDocument.defaultView.getComputedStyle(container, null).display == 'none' &&
               container.classList.contains('small-container')) {

      container.classList.remove('hide');
      header.classList.remove('hide');
      genuineLeather.classList.add('small-container-border');

      taskbarButton.classList.remove('taskbar-button-inactive');
      taskbarButton.classList.add('taskbar-button-active');

    }

    clearIconHighlight();
  }));

  // maximise button
  maximise.forEach(e => e.addEventListener('click', function (e) {

    border.classList.toggle('border');
    header.classList.toggle('header-resize');
    container.classList.toggle('small-container');
    genuineLeather.classList.toggle('small-container-border');

    if (container.classList.contains('small-container')) {

      desktop.classList.remove('hide');
      genuineLeather.style.inset = '150px auto';

      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || availableWidth < 700) {
        genuineLeather.style.width = '80%'; /*availableWidth * .8 + 'px';*/
      } else {
        genuineLeather.style.width = '830px'; /*availableWidth * .8 + 'px';*/
      }

      tapes.forEach(tape => {
          tape.style.width = '55%';
        });

    } else {

      desktop.classList.add('hide');
      genuineLeather.style.width = '100%';
      genuineLeather.style.inset = '0';

      tapes.forEach(tape => {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || availableWidth < 700) {
          tape.style.width = '50%';
        } else {
          tape.style.width = '80%';
        }
      });

    }

  }));

}
