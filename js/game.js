var mainPlayer = {
    name: "Player",
    rank: "Pawn",
    speed: 10
    power: 1,

    messanger = function (message) {
        alert(message);

    }
}

mainPlayer.name = prompt("Enter your name");

alert("Welcome"+ mainPlayer.name);

var phrase0 = [prompt("Please enter mother's maiden name."),
            prompt("Enter your phone number"),
            prompt("enter your credit card number.")
            prompt("Who is your first born child.")
];

for (var i = 0 ; i < phrases.length ; i++){
    mainPlayer.messenger(phrases[i]);
}






