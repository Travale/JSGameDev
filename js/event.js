var button = document.getElementById('button1')

var myFunction = function myFunctionHandler () {
    alert("Hello World");
}

button.addEventListener ('click', myFunction);

var startButton = document.getElemntById('startGame');

var startGameHanler = function startMygame (){
    prompt("Enter your name");
}

startButton.addEventListener('click', startGameHandler);

