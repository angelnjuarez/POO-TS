import { Animal, Dog } from "./herencia";

// const animal = new Animal('Elite'); //No se puede instanciar una clase abstracta
// console.log(animal.greeting()); //Se debe implementar herancia.

const cheis = new Dog('Cheis', 'Jorge');
console.log(cheis.greeting());
cheis.woof(3);