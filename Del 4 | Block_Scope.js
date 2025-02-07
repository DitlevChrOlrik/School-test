// Del 4 | Block_scope

// Oppgave 1

{
    const i = 10;
    console.log(`i = ${i}`);
}

// Ut skriften blirn i = 10
// Grunnen til at dette skjer er på grunn av console.log() gjør skriften til tekst

// Oppgave 2

const x = 10
{
    console.log (`i = ${x}`);
}

// i = 10
// const blir definert uttafor et parangtes som betyr at den gjelder hele koden

// Oppgave 3

{
    const y = 10;
}
console.log(`y = ${y}`)

//  error
// const blir definert innenfor et parantes i denne oppgaven som betyr at console log ikke kan lese den

// Oppgave 4

let z;
{
    z = 10;
    // A
    console.log(`z = ${z}`);
}
    // B
console.log(`z = ${z}`)

/*
 A for utprintet z = 10
 B for utprintet z = 10

 fordi variablen er deklarert utenfor er den ikke begrensa innafor parangtes
*/

// Oppgave 5

let a;
fubar();
console.log(`a = ${a}`)

function fubar()
{
    a =2;
}

// utskrift blir =2
// fordi a ble deklaret som let, en funksjon ble kalt og funksjonen endrer a til 2. 
// console.log skriver a = 2

//Oppgave 6

let b = 10;

add(b, 5);
console.log(b);

function add(c, d)
{
let result = c + d;
console.log(result);
}

/*
Utskriften blir 2 utskrifter
10 og 15

funksjonen kjører b + 5 som er 15.
console.log leser bare b
*/
