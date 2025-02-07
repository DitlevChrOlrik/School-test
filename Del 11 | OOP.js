// Del 11 | OOP

// Oppgave 1

let elev1 = {
    fornavn: "Ola",
    etternavn: "Nordmann",
    Alder: 17
    };
  
  let elev2 = {
    fornavn: "Kari",
    etternavn: "Nordkvinne",
    Alder: 17
    };
  
  let elev3 = {
    fornavn: "Per",
    etternavn: "Hansen",
    Alder: 17
    };
  
  let elev4 = {
    fornavn: "Anne",
    etternavn: "Olsen",
    Alder: 17
};

// Oppgave 2

function printStudent(student) {
    console.log(`Navn: ${student.fornavn} Etternavn: ${student.etternavn} Alder: ${student.Alder}`);
  }

printStudent(elev1);
printStudent(elev2);
printStudent(elev3);
printStudent(elev4);

// Oppgave 3

function carFactory(set, hp, model, type) {
    return {
      seter: set,
      hestekrefter: hp,
      modell: model,
      biltype: type
    };
  }
  
  let biler = [
    carFactory(5, 200, "Sedan", "Sedan"),
    carFactory(7, 250, "SUV", "SUV"),
    carFactory(5, 180, "Stasjonsvogn", "Stasjonsvogn"),
    carFactory(4, 220, "Coupe", "Coupe")
  ];
  
console.log(biler);

[
    {
      seter: 5,
      hestekrefter: 200,
      modell: 'Sedan',
      biltype: 'Sedan',
      serienummer: 868567
    },
    {
      seter: 7,
      hestekrefter: 250,
      modell: 'SUV',
      biltype: 'SUV',
      serienummer: 653117
    },
    {
      seter: 5,
      hestekrefter: 180,
      modell: 'Stasjonsvogn',
      biltype: 'Stasjonsvogn',
      serienummer: 241937
    },
    {
      seter: 4,
      hestekrefter: 220,
      modell: 'Coupe',
      biltype: 'Coupe',
      serienummer: 593080
    }
]
  
// Oppgave 5

function generateCarFactory(merke) {
  return function (set, hp, model, type) {
    return {
      seter: set,
      hestekrefter: hp,
      modell: model,
      biltype: type,
      merke: merke
    };
  };
}

let fordCarFactory = generateCarFactory("Ford");

let fordBiler = [
  fordCarFactory(5, 200, "Sedan", "Sedan"),
  fordCarFactory(7, 250, "SUV", "SUV"),
  fordCarFactory(5, 180, "Stasjonsvogn", "Stasjonsvogn"),
  fordCarFactory(4, 220, "Coupe", "Coupe")
];

console.log(fordBiler);