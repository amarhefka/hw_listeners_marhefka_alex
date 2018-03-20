var heading = document.getElementsByTagName('h1')[0];
var i = 1;

heading.addEventListener('click', function () {
    heading.insertAdjacentHTML('afterend', '<p>This is click number ' + i + '</p>');
    i++;
    return i;
});
