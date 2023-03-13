// Mail :posta_in_arrivo:
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.



//si crea un array contenente tutte le email che hanno permessi d'amministratore per
//accedere al database

// INPUT

// const database = ["pippo@gmail.com", "pluto@gmail.com", "elonmusk@tesla.com", "conte@gmail.com"]
// console.log (database, typeof database);


// trame un ciclo che parta da 1 fino a tutta la lunghezza dell'array e quindi a tutte
// le email presenti si controlla tramite if se la stringa (a mo' di email) inserita
// dall'utente corrisponda a una di quelle inner array e si da esito positivo
//in caso contrario si stamperà un messaggio d'errore

// LOGICA 

// const mail = prompt ("Inserire gentilemte l'email");

// let result = "non godi dei privilegi";
// for (let i = 0; i <= database.length; i++ ) {
//     const match = database [i];
//     if (mail === match){
//         result = "sei dei nostri";        
//     } 
// }


// if (result === "sei dei nostri") {
//     console.log("godi dei permessi, puoi accedere" , mail);
// } else {
//     console.log("non godi dei privilegi", mail);
    
// }

// ######################################################################################################################

// MILESTONE 2


// INPUT

//Stabilisco l'array di email presenti in archivio
const database = ["pippo@gmail.com", "pluto@gmail.com", "elonmusk@tesla.com", "conte@gmail.com"]
console.log (database, typeof database);


const mail = document.querySelector(".form-control");
let result = "non godi dei privilegi";
const submit = document.querySelector(".submit");
const cancel = document.querySelector(".cancel");
const message = document.querySelector(".hidden");
const error = document.querySelector(".hidden:nth-of-type(2)");

submit.addEventListener ('click', function(){
        console.log(mail);        

    for (let i = 0; i <= database.length; i++ ) {
        const match = database [i];
        if (mail.value === match){
            result = "sei dei nostri";        
        } 

        if (result === "sei dei nostri") {
            console.log("godi dei permessi, puoi accedere" , mail.value);
            message.classList.remove("hidden");
        } else {
            console.log("non godi dei privilegi", mail.value);
            error.classList.remove("hidden");        
        }
    }
    
        
})

cancel.addEventListener ('click', function(){
    mail.value="";
    message.classList.add('hidden');
    error.classList.add("hidden");   

})