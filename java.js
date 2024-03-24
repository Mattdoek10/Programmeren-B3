let secondsOver = 60
let timer = setInterval(countSeconds, 1000);
let muziek = new Audio("open-fields-aaron-paul-low-main-version-25198-02-16.mp3");
let checkGeluid = new Audio("ding-36029.mp3");
// music bron: https://uppbeat.io/zones/gaming
// checkgeluid bron : https://pixabay.com/sound-effects/search/ding/

//timer; het laat de timer aflopen.
let titelH2 = document.querySelector("h2");
function countSeconds() {
    secondsOver--;
    if (secondsOver <= -1) {
        console.log("tijd klaar");
        titelH2.textContent = "Tijd is om !"
        clearInterval(timer);
    }
    else if (secondsOver == 10) {
        alert('Je tijd is bijna om!')
    }
    else {
        titelH2.textContent = "Tijd over :" + ' ' + '00:' + secondsOver;
    }
}

/* Hint; toont een hint als je op hint knop klikt */
let hintKnop = document.querySelector(".hintfoto");
let hints = [
    "Kijk naar de tegels",
    "Probeer naar de stoelen te kijken",
    "Controleer mensen hun haar"];

function toonHint() {
    let willekeurigeIndex = Math.floor(Math.random() * hints.length);
    let hint = hints[willekeurigeIndex];
    document.querySelector("h3").textContent = "Hint :" + ' ' + hint;
    muziek.play();
}

hintKnop.addEventListener('click', toonHint);

/* Parameter om ... te veranderen in "Matthew" */

let naamVeld = document.querySelector("#naamveld")

function naamNoemen(naam) {
    naamVeld.textContent = naam;
}

naamNoemen("Matthew");

/* Opniew spelen knop*/

function refreshPage() {
    location.reload();
}

// object 1 
const box1 = document.querySelector("#div1");
const correct1 = document.querySelector("#correctfoto1");

function fotoGevonden() {
    correct1.style.display = 'block';
    checkGeluid.play();
}

box1.addEventListener('click', fotoGevonden)

//object 2 

const box2 = document.querySelector("#div2");
const correct2 = document.querySelector("#correctfoto2");

function fotoGevonden2() {
    correct2.style.display = 'block';
    checkGeluid.play();
}

box2.addEventListener('click', fotoGevonden2)

//object 3

const box3 = document.querySelector("#div3");
const correct3 = document.querySelector("#correctfoto3");

function fotoGevonden3() {
    correct3.style.display = 'block';
    checkGeluid.play();
}

box3.addEventListener('click', fotoGevonden3)

//object 4 

const box4 = document.querySelector("#div4");
const correct4 = document.querySelector("#correctfoto4");

function fotoGevonden4() {
    correct4.style.display = 'block';
    checkGeluid.play();
}

box4.addEventListener('click', fotoGevonden4) 