//Creazone prompt per utente
const km = parseFloat(prompt("Inserisci il numero di chilometri da percorrere"));
const eta = parseInt(prompt("Inserisci l'età del passeggero"));

//Variabile del prezzo per ogni chilometro
const prezzoAlKm = 0.21;

//Verifica inserimento dei dati
if (isNaN(km) || isNaN(eta) || km <= 0 || eta <= 0) {
    console.log("Dati non validi");
} 