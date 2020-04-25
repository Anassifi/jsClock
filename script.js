// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()
let currentDate;

//Ajouter l'heure , minite , seconde  dans des varaiables
let secondsArm;
let minutesArm;
let hoursArm;

// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
let secondDeg;
let minutesDeg;
let hoursDeg;

// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré



// Déplacer les aiguilles 
function demarrerLaMontre() {
    currentDate = new Date();
    hoursArm = currentDate.getHours() % 12;
    minutesArm = currentDate.getMinutes();
    secondsArm = currentDate.getSeconds();

    hoursDeg = (hoursArm * 30) + (0.5 * minutesArm);
    minutesDeg = (minutesArm * 6) + (0.1 * secondsArm)
    secondDeg = secondsArm * 6;

    AIGUILLESEC.style.transform = `rotate(${secondDeg}deg)`;
    AIGUILLEMIN.style.transform = `rotate(${minutesDeg}deg)`;
    AIGUILLEHR.style.transform = `rotate(${hoursDeg}deg)`;

};

demarrerLaMontre();
// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);