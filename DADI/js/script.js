// Gioco dei dadi :dado_da_gioco:

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?

// Se dobbiamo confrontare qualcosa che "cosa" ci serve?
// Consigli del giorno:

// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"



// let pcNumber = Math.floor(Math.random()* 5) +1;
// let userNumber = Math.floor(Math.random()*5) +1;
// console.log(pcNumber, userNumber, typeof userNumber, typeof pcNumber);

// if (pcNumber > userNumber) {
//     console.log("il pc ha un numero maggiore del giocatore",pcNumber, userNumber );
// }else if (pcNumber < userNumber) {
//     console.log("il giocatore ha un numero maggiore del pc", userNumber, pcNumber);
// } else {
//     console.log("i due numeri sono uguali",userNumber, pcNumber) ;
// }



// ###########################################################################################

// MILESTONE 2

// ho voluto provare a usare piu manipolazione js per creare elementi e aggiungere o togliere classi

const wrapper = document.querySelector (".wrapper");
const submit = document.querySelector(".submit");
const userWin = document.querySelector(".hidden");
const pcWin = document.querySelector(".hidden:nth-of-type(2)");
const parity = document.querySelector(".hidden:nth-of-type(3)");


const title = document.createElement("h1");
const subtitle = document.createElement("h2");
const subtitle2 = document.createElement("h3");

title.innerHTML = "PROVA ANCHE TU A SFIDARE LA FORTUNA";
subtitle.innerHTML = "Clicca nel bottone in basso per generare un numero random";
subtitle2.innerHTML = "Il pc ne genenererà un altro per se, vince il maggiore, DAJE";

title.classList.add ("py-2");
subtitle.classList.add ("py-4");
subtitle2.classList.add ("py-4");


wrapper.prepend (subtitle2);
wrapper.prepend (subtitle);
wrapper.prepend (title);
let user = document.querySelector(".user-random-number");
let pcN = document.querySelector(".pc-random-number");

submit.addEventListener ('click', function(){

    // reset valori ad ogni click
    user.innerHTML = "";
    pcN.innerHTML = "";    
    
    let userValue = Math.floor(Math.random() * 5) +1;
    let pcNValue = Math.floor(Math.random() * 5) +1;
    console.log(userValue, pcNValue);
    
    
    user.innerHTML = `Il tuo numero è: ${userValue}`;
    pcN.innerHTML = `Il numero del PC è: ${pcNValue}`;

    // ad ogni controllo resetto le classi in maniera opportuna
    if (userValue > pcNValue){
        pcWin.classList.add('hidden');
        parity.classList.add('hidden');
        userWin.classList.remove('hidden');        
    }else if (userValue === pcNValue) {
        pcWin.classList.add('hidden');
        parity.classList.remove('hidden');
        userWin.classList.add('hidden'); 
    }else {
        pcWin.classList.remove('hidden');
        parity.classList.add('hidden');
        userWin.classList.add('hidden'); 
    }

    
    
} )