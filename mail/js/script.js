
var emailsClub = ["mai@gmail.com", "na@gmail.com", "gioia@gmail.com", "fataTurchina@gmail.com", "cattivissimoMe@gmail.com"];

var mailUtente = prompt("Inserisci il tuo indirizzo e-mail, per favore!");

// var check = emailsClub.includes(mailUtente);
var trovato = false;
for (var i = 0; i < emailsClub.length && trovato == false; i++){
    if(emailsClub[i] == mailUtente){
        console.log("C'è");
        trovato = true;
        document.getElementById("stampa").innerHTML = "Sei fra i nostri iscritti!"
    } else {
        document.getElementById("stampa").innerHTML = "Non sei un nostro membro, per ora!"
    }
}