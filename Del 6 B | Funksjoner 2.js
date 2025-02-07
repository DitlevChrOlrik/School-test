// del 6b | funksjoner 2

// Oppgave 1
// return brukes for å sende en verdi fra en funksjon til der den blir kalt.

// Oppgave 2
function adder(x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    } else {
        console.log("Begge parameterne må være tall");
    }
}
console.log(adder(2000, 7));