let currentImage = 1; // starts at apple aka 1
let isGameActive = true; 
document.addEventListener("DOMContentLoaded", loadNewImage); // loads new image when page is loaded couldnt figure this out for the life of me, first picture wouldnt load smh

const images = ["apple.png", "orange.png", "pear.png", "pineapple.png"];

function loadNewImage() {
    document.getElementById("fruit-pic").src = images[currentImage - 1]; // -1 cuz arrays starts at 0
}

function checkAnswerApple() {
    if (!isGameActive) return;
    if (currentImage === 1) {
        document.body.style.backgroundColor = "green"; //greem background if correct
        document.getElementById("cor-incor").textContent = "Correct answer!";
    }
    else
    {
        document.body.style.backgroundColor = "red"; // red background if incorrect
        document.getElementById("cor-incor").textContent = "Incorrect asnwer!";
    }
    isGameActive = false;
}   
function checkAnswerOrange() {
    if (!isGameActive) return;
    if (currentImage === 2) {
        document.body.style.backgroundColor = "green"; //greem background if correct
        document.getElementById("cor-incor").textContent = "Correct answer!";
    }
    else
    {
        document.body.style.backgroundColor = "red"; // red background if incorrect
        document.getElementById("cor-incor").textContent = "Incorrect asnwer!";
    }
    isGameActive = false;
}
function checkAnswerPear() {
    if (!isGameActive) return;
    if (currentImage === 3) {
        document.body.style.backgroundColor = "green"; //greem background if correct
        document.getElementById("cor-incor").textContent = "Correct answer!";
    }
    else
    {
        document.body.style.backgroundColor = "red"; // red background if incorrect
        document.getElementById("cor-incor").textContent = "Incorrect asnwer!";
    }
    isGameActive = false;
}
function checkAnswerPineapple() {
    if (!isGameActive) return;
    if (currentImage === 4) {
        document.body.style.backgroundColor = "green"; //greem background if correct
        document.getElementById("cor-incor").textContent = "Correct answer!";
    }
    else
    {
        document.body.style.backgroundColor = "red"; // red background if incorrect
        document.getElementById("cor-incor").textContent = "Incorrect asnwer!";
    }
    isGameActive = false;
}

function playagain(){
    document.body.style.backgroundColor = "white";
    document.getElementById("cor-incor").textContent = ""; // hides correct/incorrect text
    isGameActive = true;
    currentImage++;
    if (currentImage > 4){
        currentImage = 1;
    }
    loadNewImage();
}

