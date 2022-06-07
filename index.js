function generateRandom() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber
}

var randomNumber1 = generateRandom();
document.querySelector('.dice img.img1').setAttribute('src', `images/dice${randomNumber1}.png`);

var randomNumber2 = generateRandom();
document.querySelector('.dice img.img2').setAttribute('src', `images/dice${randomNumber2}.png`);

if (randomNumber1 === randomNumber2){
    document.querySelector('h1').innerHTML = 'Draw!';
}
else if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = '🚩 Player 1 Wins!';
}
else {
    document.querySelector('h1').innerHTML = 'Player 2 Wins! 🚩';
}