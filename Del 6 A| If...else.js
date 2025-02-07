// del 6 // If...else

// Oppgave 1
let a = 1;
let b = '1';
let c = "navn";

function stringChecker(variable) {
    if (typeof variable === "string") {
        console.log("STRING STRING STRING")
    } else {
        console.log("dette er ikke en string i det hele tatt")
    }
}

stringChecker(a);
stringChecker(b);
stringChecker(c);

// Oppgave 2

if (typeof a === b) {
    console.log("Variablene du brukte er av samme typen!")
} else {
    console.log("variablene du brukte er IKKE av samme type!")
}

// Oppgave 3

// a

let tall = 2007
if(typeof tall === 'number') {
    console.log("Det er et tall")
} else {
    console.log("Test Failed")
}

// b

let tall1 = 4;
let tall2 = 10;
if (typeof tall1 === 'number' && typeof tall2 === 'number'){
    
    if (tall1 > 5) {
        console.log("Jeg fant en vaiabel som var større en fem " + tall1);
    }
    
    if (tall2 > 5){
    console.log("Jeg fant en vaiabel som var større en fem " + tall2);
    }

    if(tall1 < 5 && tall2 < 5) {
        console.log("Ingen av variablene var større enn 5");
        }
} else {
    console.log("Variablene er ikke number, de er " + typeof tall1 + " og " + typeof tall2);
}

