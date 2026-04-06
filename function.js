//Creazione della funzione per il calcolo del biglietto del treno
function calcoloBiglietto() {
    //Recupero dati
    const km = parseFloat(document.getElementById("km").value);
    const eta = parseInt(document.getElementById("età").value);

    //Variabile del prezzo per ogni chilometro
    const prezzoAlKm = 0.21;

    //Verifica inserimento dei dati
    if (isNaN(km) || isNaN(eta) || km <= 0 || eta <= 0) {
        //Output dati del biglietto errati
        document.getElementById("output_km").innerText = "Dati non validi";
        document.getElementById("output_eta").innerText = "Dati non validi";
        document.getElementById("output_sconto").innerText = "Dati non validi";
        document.getElementById("output_prezzo").innerText = "Dati non validi";
    } else {

        //Calcolo del prezzo del biglietto senza sconti applicati
        let prezzoBiglietto = km * prezzoAlKm;

        //Variabile di controllo sconti
        let tipoSconto = "Nessuno sconto";

        //Controllo dell'età per l'applicazione degli sconti tramite IF
        if (eta < 18) {
            prezzoBiglietto = prezzoBiglietto * 0.8;
            tipoSconto = "Sconto minorenni (20%)";
        } else if (eta > 65) {
            prezzoBiglietto = prezzoBiglietto * 0.6;
            tipoSconto = "Sconto over 65 (40%)";
        }

        //Output dati del biglietto
        document.getElementById("output_km").innerText = km;
        document.getElementById("output_eta").innerText = eta;
        document.getElementById("output_sconto").innerText = tipoSconto;
        document.getElementById("output_prezzo").innerText = `€${prezzoBiglietto.toFixed(2)}`;
    }
}