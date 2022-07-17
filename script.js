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

if (document.readyState !== 'loading') {
  bigLeather();
} else {
  document.addEventListener('DOMContentLoaded', bigLeather);
}

function bigLeather() {

  // minimise button
  minimise.forEach(e => e.addEventListener('click', function (e) {

    border.classList.toggle('border');
    container.classList.toggle('hide');
    header.classList.toggle('hide');

    if (container.ownerDocument.defaultView.getComputedStyle(container, null).display == 'none') {
      taskbarButton.classList.remove('taskbar-button-active');
      taskbarButton.classList.add('taskbar-button-inactive');
      desktop.classList.remove('hide');
    } else {
      taskbarButton.classList.remove('taskbar-button-inactive');
      taskbarButton.classList.add('taskbar-button-active');
      desktop.classList.add('hide');
    }

    clearIconHighlight();

  }));

  // close button
  close.forEach(e => e.addEventListener('click', function (e) {

    border.classList.toggle('border');
    container.classList.toggle('hide');
    header.classList.toggle('hide');
    desktop.classList.remove('hide');

    taskbarButton.style.display = 'none';

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
    if (container.style.width = '100%') {

      border.classList.toggle('border');
      header.classList.toggle('hide');
      desktop.classList.remove('hide');

      container.classList.toggle('small-container');
      genuineLeather.classList.toggle('small-container-border');
      genuineLeather.style.width = '75%';

      // surely better way to do this
      genuineLeather.style.margin = '40% auto 0';
      desktop.style.margin = '-40% auto 0';

      // work out why this isn't on by default
      desktopIconText.style.textShadow = '1px 1px #fffefe';


    }

  }));

}
