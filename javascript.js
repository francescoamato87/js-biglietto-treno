
var age = parseInt(prompt("Quanti anni hai ?"));

var percorrenza = parseInt(prompt("Quanti chilometri vuoi percorrere ?"));

var prezzoKilometro = 0.21;

var bigliettoSenzaSconto = prezzoKilometro * percorrenza;

var scritto = "Il prezzo del biglietto è "
var euro = " Euro"
console.log(bigliettoSenzaSconto);

// 2 Il prezzo del biglietto (0.21 € al km),
// sconto del 20% per i minorenni e 40% per over 65.

if (age <= 18) {
 document.getElementById('costo').innerHTML = scritto + ((bigliettoSenzaSconto / 100) * 80) + euro;
}

else if (age >= 65) {
 document.getElementById('costo').innerHTML = scritto + ((bigliettoSenzaSconto / 100) * 60) + euro;
}

else {
 document.getElementById('costo').innerHTML = scritto + (bigliettoSenzaSconto) + euro;
}
