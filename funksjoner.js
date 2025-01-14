
// Oppgave 2

// A
/*
 Function deklarerer at det skal værer en function
 det gule er navnet på funksjonen
 Inne i {} sier man hva funksjonen skal gjøre
*/

function printHello() 
{
    console.log("Hello world")
}

// B
// En funksjons kall er det som sier at funksjonen skal kjøre og hvor den skal kjøre
printHello()

// C
printHello()

// Oppgave 3

/* 
En paramenter er det du putter in i () delen av en funksjon
Et argument er det du putter in i () når du kaller en funksjon
function printHelloParameter(paramenter1, paramenter2)
*/

{
    console.log(paramenter1)
    console.log(paramenter2)
}
printHelloParameter("argument1", "argument2")

// Oppgave 4

function printHelloParameter(paramenter1, paramenter2) {
    console.log(paramenter1)
    console.log(paramenter2)
}
printHelloParameter("Min parameter er", "argument2")

// Oppgave 5

function oppgave5(p1, p2){
    console.log("Jeg fikk to parametere: " + p1 + " og " + p2)
}

oppgave5("Hallo", "World")