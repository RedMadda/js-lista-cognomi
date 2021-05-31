
var emailsClub = ["mai@gmail.com", "na@gmail.com", "gioia@gmail.com", "fataTurchina@gmail.com", "cattivissimoMe@gmail.com"];

var mailUtente = prompt("Inserisci il tuo indirizzo e-mail, per favore!");

// var check = emailsClub.includes(mailUtente);
for (i=0; i < emailsClub.length; i++){
    if(emailsClub[i] === mailUtente){
        document.getElementById("stampa").innerHTML = "Sei fra i nostri iscritti!"
    } else {
        document.getElementById("stampa").innerHTML = "Non sei un nostro membro, per ora!"
    }
}

// if (check){
//     alert("Sei iscritto al nostro Club!")
// } else {
//     alert("Non puoi accedere, non sei iscritto!")
// }