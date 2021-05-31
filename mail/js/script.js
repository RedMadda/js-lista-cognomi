
var emailsClub = ["mai@gmail.com", "na@gmail.com", "gioia@gmail.com", "fataTurchina@gmail.com", "cattivissimoMe@gmail.com"];

var mailUtente = prompt("Inserisci il tuo indirizzo e-mail, per favore!");

var check = emailsClub.includes(mailUtente);

if (check){
    alert("Sei iscritto al nostro Club!")
} else {
    alert("Non puoi accedere, non sei iscritto!")
}