console.log('Welcome to data transmission ');

document.getElementById('message').innerHTML = 'Message from JavaScript';

// Definirea unei functii in JavaScript
function showName() {
    var username = document.getElementById('user-pass').value;
    var user = {
        "id": 1,
        "name": username,
        "age": 20
    }
    console.log(username=="salut"?user.name:user.age);
    $("#message").html("Hello " + username);
}