var partecipanti = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

// chiedi all’utente il cognome
var cognomeUtente = prompt("Inserisci il tuo cognome, per favore!")
var iLett = cognomeUtente.charAt(0).toUpperCase();
var restoCogn = cognomeUtente.slice(1);
cognomeUtente = iLett + restoCogn;
console.log(cognomeUtente);
// inseriscilo in un array con altri cognomi: 
partecipanti.push(cognomeUtente);

// stampa la lista ordinata alfabeticamente
partecipanti.sort();



for(var i=0; i < partecipanti.length; i++){
    document.getElementById("stampa").innerHTML += i+1 + ")" + " " + partecipanti[i] + ";" + "<br />" ;
}

// scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
var posizione = partecipanti.indexOf(cognomeUtente) + 1;

document.getElementById("posizione").innerHTML = "Sei il numero:" + " " + posizione + ";"; 


//trovate un modo per trasformare in maiuscolo la prima lettera del cognome inserito dall'utente e tutto il resto in minuscolo.

