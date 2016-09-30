//UserName Button
var userName;
console.log(userName);

var button = document.getElementById('name')
var enterName = function myFunctionHandler () {
    userName = prompt("Enter your name");
}

button.addEventListener ('click', enterName);

var startButton = document.getElemntById('startGame');
var startGameHandler = function startMygame (){
    if(usrName == undefined) {
        alert("Please enter a valid name.");
    } else {
    alert("Ready to play.");
    }
}

startButton.addEventListener('click', startGameHandler);

var gameButton = function GameButtonConstruct () {
    var button;
    var fire = function fireWeaponHandler () {
        alert("Fire");
    }
}

var fireWeaponButton = new gameButton('fireWeapon');
fireWeaponButton.button = document.getElementId('fireWeapon');
fireWeaponButton.button.addEventListener('click', fireWeaponButton.fire);




