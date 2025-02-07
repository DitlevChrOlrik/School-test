// Del 7 | Arrays

// Oppgave 1

// Arrays brukes til å lage en liste av verdier
/* Arrays i javascript kan ha forskelige typer data,
men det er vanlig å bruke en type data i hele arrayet. */

// Oppgave 2

let ender = ["Donald", "Dolly", "Daisy", "Skrue", "Ole", "Dole", "Doffen", "Petter", "Anton", "Della", "Magika"];
console.log(ender[2], ender[5], ender[8]);

// Oppgave 3

/*
Index er posisjonen i en array i
Første index er 0
Siste index er lengden på arrayen minus 
Hvor mange elementer det er arrayen
Site index er alltid mindre enn lengden
*/

// Oppgave 4

//Objects

// Array.isArray()

function checkIfArray(imput) {
    if (Array.isArray(imput)) {
        console.log("Argumentet er en array");
    }
    else {
        console.log("Argumentet er ikke en array");
        }
}

checkIfArray(ender);