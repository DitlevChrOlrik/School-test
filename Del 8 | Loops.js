// Del 8 | Loops

//Oppgave 1

/*
for-løkke: Brukes når du vet hvor mange ganger løkken skal kjøres.

while-løkke: Kjører så lenge en bestemt betingelse er sant. brukes når du ikke vet hvor mange ganger du skal kjøre en nøkkel.

do...while-løkke: kjører minst én gang før den sjekker betingelsen. brukes når du vet at løkken skal kjøres minst én gang.

for...in-løkke: Brukes for å gå gjennom egenskaper i et objekt.

for...of-løkke: Brukes for å gå gjennom verdiene i en array eller en annen interble.
*/

// Oppgave 2
const navnlistefor1ima = ["Ditlev", "Syver", "Iver", "Sander", "Edvin", "Jazz", "Knutsen", "Abdullah", "Konrad", "David"]

for (let navn of navnlistefor1ima) {
    console.log(navn)
} 