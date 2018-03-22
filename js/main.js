var heading = document.getElementsByTagName('h1')[0];
var paragraphs = document.getElementsByTagName('p');

// Listens for a click on the <h1>, then toggles orange color on/off.
heading.addEventListener('click', function () {
    if (heading.classList.contains('orange')) {
        heading.classList.remove('orange');
    } else {
        heading.classList.add('orange');
    }
});

// Listens for a mouse hover over the paragraph in the <header>, then replaces the text content therein.
paragraphs[0].addEventListener('pointerover', function () {
    paragraphs[0].innerHTML = 'I’ve been hovered!';
});

// Listens for a right-click (to open the context menu), then changes the background color of the <body>.
document.addEventListener('contextmenu', function () {
    document.body.style.backgroundColor = '#d2c8c0';
});
