// Del 10 | Pilfunksjoner

// Oppgave 1

const hello = () => {
    console.log("Hello World");
}

hello();

// Oppgave 2

const printnavn = (navn) => {
    console.log(navn);
}
printnavn("Ditlev");

// Oppgave 3

const penislengdetotalt = ( Nichlas, Ditlev, Christian) => {
    return Nichlas + Ditlev + Christian + " cm";
}

console.log(penislengdetotalt(21, 20, 12));

// Oppgave 4

restFunc(1, 2, 3, 4, 5, 6, 7, 8, 9 );

const restFunc = (...args) => {
    for (const arg of args) {
        console.log(arg);
    }
}
restFuncLoop(1, 2, 3, 4, 5, 6, 7, 8, 9 );

// Oppgave 5

/*
Pilfunksjoner (=>) er en kortere måte å skrive funksjoner på.
De oppfører seg litt annerledes fordi de ikke lager sitt eget this, 
men bruker det som allerede finnes i koden rundt. 
Vanlige funksjoner (function) lager sitt eget this og kan brukes til å lage nye objekter med new. 
Pilfunksjoner kan også gi et svar direkte uten å bruke return.
*/