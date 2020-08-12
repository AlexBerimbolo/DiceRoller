var randomNumber1;
var randomNumber2;
randomNumber1 = Math.round(Math.random()*6);
randomNumber2 = Math.round(Math.random()*6);
console.log(randomNumber1);

for (var i = 0; i<6;i++) {
	if (i===randomNumber1) {
		document.querySelector(".img1").setAttribute("src", "images/dice"+(i+1)+".png");
	}
	if (i===randomNumber2) {
		document.querySelector(".img2").setAttribute("src", "images/dice"+(i+1)+".png");
	}
	if (randomNumber1 > randomNumber2) {
		document.querySelector("h1").innerHTML = "Player 1 Wins!";
	}
	else if (randomNumber1 < randomNumber2) {
		document.querySelector("h1").innerHTML = "Player 2 Wins!";
	}
	else document.querySelector("h1").innerHTML="It's a tie!";
}
