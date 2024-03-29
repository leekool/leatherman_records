var border = document.querySelector('div#border');
var genuineLeather = document.querySelector('div#genuine-leather');
var container = document.querySelector('div.container');
var minimise = document.querySelectorAll('.minimise');
var maximise = document.querySelectorAll('.maximise');
var closeEle = document.querySelectorAll('.close');
var header = document.querySelector('header');
var taskbarButton = document.querySelector('div#taskbar-button');
var body = document.querySelector('body');
var desktop = document.querySelector('.desktop');
var desktopIcon = document.querySelectorAll('.desktop-icon');
var desktopIconText = document.querySelector('.desktop-icon-text');
var desktopIconImage = document.querySelector('.desktop-icon-image');
var tapes = document.querySelectorAll('.lmr001');
var availableWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
/* --- clearing functions --- */
function clearIconHighlight() {
    if (desktopIconText.ownerDocument.defaultView.getComputedStyle(desktopIconText, null).color == 'rgb(255, 254, 254)') {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
            || availableWidth < 700) {
            desktopIconImage.style.content = 'url("image/leather_desktop.png")';
        }
        else {
            desktopIconImage.style.content = 'url("image/double/leather_desktop.png")';
        }
        desktopIconText.style.background = 'none';
        desktopIconText.style.color = '#000';
        desktopIconText.style.border = 'none';
        // desktopIconText.style.textShadow = '1px 1px #fffefe'
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
/* --- window functions --- */
// minimise / show minimised window
function minimiseOpen() {
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
    }
    else if (container.ownerDocument.defaultView.getComputedStyle(container, null).display == 'none' &&
        !container.classList.contains('small-container')) {
        container.classList.remove('hide');
        header.classList.remove('hide');
        border.classList.add('border');
        taskbarButton.classList.remove('taskbar-button-inactive');
        taskbarButton.classList.add('taskbar-button-active');
        desktop.classList.add('hide');
        // genuineLeather is small & visible
    }
    else if (container.ownerDocument.defaultView.getComputedStyle(container, null).display == 'flex' &&
        container.classList.contains('small-container')) {
        container.classList.add('hide');
        header.classList.add('hide');
        genuineLeather.classList.remove('small-container-border');
        taskbarButton.classList.remove('taskbar-button-active');
        taskbarButton.classList.add('taskbar-button-inactive');
        // genuineLeather is small & not visible
    }
    else if (container.ownerDocument.defaultView.getComputedStyle(container, null).display == 'none' &&
        container.classList.contains('small-container')) {
        container.classList.remove('hide');
        header.classList.remove('hide');
        genuineLeather.classList.add('small-container-border');
        taskbarButton.classList.remove('taskbar-button-inactive');
        taskbarButton.classList.add('taskbar-button-active');
    }
    clearIconHighlight();
}
// resize window
function resizeWindow() {
    border.classList.toggle('border');
    header.classList.toggle('header-resize');
    container.classList.toggle('small-container');
    genuineLeather.classList.toggle('small-container-border');
    if (container.classList.contains('small-container')) {
        desktop.classList.remove('hide');
        genuineLeather.style.inset = '8% auto';
        genuineLeather.style.height = '80%';
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || availableWidth < 700) {
            genuineLeather.style.width = '80%'; /*availableWidth * .8 + 'px';*/
        }
        else {
            genuineLeather.style.width = '830px'; /*availableWidth * .8 + 'px';*/
        }
        tapes.forEach(function (tape) {
            tape.style.width = '55%';
        });
    }
    else {
        desktop.classList.add('hide');
        genuineLeather.style.inset = '0';
        genuineLeather.style.height = '100%';
        genuineLeather.style.width = '100%';
        tapes.forEach(function (tape) {
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || availableWidth < 700) {
                tape.style.width = '50%';
            }
            else {
                tape.style.width = '80%';
            }
        });
    }
}
// close window
function closeWindow() {
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
}
// single click
function singleClick() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        || availableWidth < 700) {
        desktopIconImage.style.content = 'url("image/leather_desktop-pressed.png")';
    }
    else {
        desktopIconImage.style.content = 'url("image/double/leather_desktop-pressed.png")';
    }
    desktopIconText.style.background = '#0404fc';
    desktopIconText.style.color = '#fffefe';
    desktopIconText.style.border = '1px dotted #fffefe';
    desktopIconText.style.textShadow = 'none';
}
// double click
function doubleClick() {
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
    }
    else if (container.ownerDocument.defaultView.getComputedStyle(container, null).display == 'none' &&
        container.classList.contains('small-container')) {
        container.classList.remove('hide');
        header.classList.remove('hide');
        genuineLeather.classList.add('small-container-border');
        taskbarButton.classList.remove('taskbar-button-inactive');
        taskbarButton.classList.add('taskbar-button-active');
    }
    clearIconHighlight();
}
/* --- bigLeather --- */
if (document.readyState !== 'loading') {
    bigLeather();
}
else {
    document.addEventListener('DOMContentLoaded', bigLeather);
}
// default small window on desktop
if (availableWidth > 700) {
    resizeWindow();
}
function bigLeather() {
    // clear highlighted leather desktop icon when clicking away from icon
    if (desktopIconText.style.textShadow = 'none') {
        body.addEventListener('click', function () {
            clearIconHighlight();
        }, false);
        desktopIcon.forEach(function (e) { return e.addEventListener('click', function (e) {
            e.stopPropagation();
        }, false); });
    }
    // minimise button
    minimise.forEach(function (e) { return e.addEventListener('click', function (e) {
        minimiseOpen();
    }); });
    // close button
    closeEle.forEach(function (e) { return e.addEventListener('click', function (e) {
        closeWindow();
    }); });
    // leather desktop icon (single click)
    desktopIcon.forEach(function (e) { return e.addEventListener('click', function (e) {
        singleClick();
    }); });
    // leather desktop icon (double click)
    desktopIcon.forEach(function (e) { return e.addEventListener('dblclick', function (e) {
        doubleClick();
        if (availableWidth > 700) {
            resizeWindow();
        }
    }); });
    // maximise button
    maximise.forEach(function (e) { return e.addEventListener('click', function (e) {
        resizeWindow();
    }); });
}
