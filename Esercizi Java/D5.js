/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort();

console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
pets.reverse();

console.log(pets);
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
const elemento = pets.shift();

pets.push(elemento);

console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

const targa = "NA161SA"

for(let i=0; i<cars.length; i++) {
  cars[i].licenzePlate = targa;
}

console.log(cars)
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
const macchina = {
  brand: 'BMW',
  model: 'X6',
  color: 'black',
  trims: ['GT', 'sport'],
};

cars.push(macchina);

for(let car of cars){
  if(cars.trimslength > 0) {
    cars.trims.pop();
  }
}

console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

for (let car of cars) {
  if(cars.trims,length > 0){
    justTrims.push(car.trims[0]);
  }
}

console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let car of cars){
  if(car.color.charAt(0).toLowerCase() === "b"){
    console.log("Fizz");
  } else{
    console.log("Buzz")
  }
}
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
let i = 0
while(i< numericArray.length && numericArray[i] !== 32){
  console.log(numericArray[i]);
  i++;

}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']

const alfabeto = []

for (let char of charactersArray) {
  switch (char) {
    case 'a':
      alfabeto.push(1);
      break;
    case 'b':
      alfabeto.push(2);
      break;
    case 'c':
      alfabeto.push(3);
      break;
    case 'd':
      alfabeto.push(4);
      break;
    case 'e':
      alfabeto.push(5);
      break;
    case 'f':
      alfabeto.push(6);
      break;
    case 'g':
      alfabeto.push(7);
      break;
    case 'h':
      alfabeto.push(8);
      break;
    case 'i':
      alfabeto.push(9);
      break;
    case 'l':
      alfabeto.push(10);
      break;
    case 'm':
      alfabeto.push(11);
      break;
    case 'n':
      alfabeto.push(12);
      break;
    case 'o':
      alfabeto.push(13);
      break;
    case 'p':
      alfabeto.push(14);
      break;
    case 'q':
      alfabeto.push(15);
      break;
    case 'r':
      alfabeto.push(16);
      break;
    case 's':
      alfabeto.push(17);
      break;
    case 't':
      alfabeto.push(18);
      break;
    case 'u':
      alfabeto.push(19);
      break;
    case 'z':
      alfabeto.push(20);
      break;
  }
}

console.log(alfabeto);
