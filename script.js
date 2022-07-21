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

function clearIconHighlight() {
  if (desktopIconText.ownerDocument.defaultView.getComputedStyle(desktopIconText, null).color == 'rgb(255, 254, 254)') {
    document.getElementsByClassName('desktop-icon')[0].setAttribute('src', 'image/leather_desktop.png');
    desktopIconText.style.background = 'none';
    desktopIconText.style.color = '#000';
    desktopIconText.style.border = 'none';
    desktopIconText.style.textShadow = '1px 1px #fffefe';
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

    border.classList.remove('border');
    container.classList.add('hide');
    header.classList.add('hide');
    desktop.classList.remove('hide');
    taskbarButton.style.display = 'none';

    // genuineLeather is small & visible
    if (container.ownerDocument.defaultView.getComputedStyle(container, null).display == 'flex' &&
        container.classList.contains('small-container')) {

      header.classList.remove('header-resize');
      container.classList.remove('small-container');
      genuineLeather.classList.remove('small-container-border');
      genuineLeather.style.width = '100%';
      genuineLeather.style.inset = '0';

    }

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

    document.getElementsByClassName('desktop-icon')[0].setAttribute('src', 'image/leather_desktop-pressed.png');
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

    border.classList.toggle('border');
    container.classList.toggle('hide');
    header.classList.toggle('hide');

    taskbarButton.classList.remove('taskbar-button-inactive');
    taskbarButton.classList.add('taskbar-button-active');
    desktop.classList.add('hide');

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
      genuineLeather.style.width = '75%';
      genuineLeather.style.inset = '25% auto';
    } else {
      desktop.classList.add('hide');
      genuineLeather.style.width = '100%';
      genuineLeather.style.inset = '0';
    }

    // work out why this isn't on by default
    desktopIconText.style.textShadow = '1px 1px #fffefe';

  }));

}
