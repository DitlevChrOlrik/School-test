// Del 9 | for-i

// Oppgave 1

let navn = ["Odin", "Thor", "Loki", "Freya", "Baldur", "Frigg", "Tyr","Heimdall", 
    "Hel", "Idunn", "Njord", "Skadi", "Fenrir", "Jormungandr", "Sleipnir"];

for (let i = 0; i < navn.length; i++) {
    console.log(navn[i]);
}

// Oppgave 2

let tall = [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30];

let sum = 0
for (let i = 0; i < tall.length; i++) {
    sum += tall[i];
}
console.log(sum);

// Oppgave 3

let navn2 = [

    "Anne", "Jan", "Per", "Bjørn", "Ole", "Lars", "Inger", "Kjell", "Kari", "Thomas", "Ingrid", 
    "Svein", "Marit", "Knut", "Tor", "Liv", "Geir", "Martin", "Hans", "Morten","Andreas", 
    "Erik", "Ida", "Arne", "Maria", "Anna", "Terje", "Ann", "Eva", "Daniel", "Anders", "John", 
    "Rune", "Odd", "Hilde", "Nina", "Marianne", "Magnus", "Kristin","Eli","Ola", "Siri", "Einar", 
    "Gunnar", "Randi", "Bente", "Johan", "Mona", "Trond", "Hege","Espen", "Siv", "Steinar", "Elin", 
    "Kjetil", "Linda", "Harald", "Grete", "Leif", "Anita", "Roar", "Tone", "Jon", "Camilla", "Stig", 
    "Lene", "Arild", "Gry", "Frode", "Ragnhild", "Pål", "Britt", "Øyvind", "Laila", "Vidar", "Ellen", 
    "Dag", "Sissel", "Knut", "Anne", "Per", "Inger", "Bjørn", "Kari", "Ole", "Lars", "Jan", "Marit", 
    "Thomas", "Ingrid", "Mohammed", "Ali", "Ahmed", "Aisha", "Fatima", "Hassan", "Sara", "Yousef", 
    "Amira", "Omar"
    ];




function teller(name, array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === name) {
            count++;
        }
    }
    return count;
}

console.log(teller("Anne", navn2));
console.log(teller("Ole", navn2));