var first = document.getElementById('first');
var last = document.getElementById('last');
var email = document.getElementById('email');
var message = document.getElementById('message');

document.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('The firstName is: ' + first.value);
    console.log('The lastName is: ' + last.value);
    console.log('The email address is: ' + email.value);
    console.log('The message is: ' + message.value);
});
