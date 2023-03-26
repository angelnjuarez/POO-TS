console.log(Math.PI);
//const math = new Math(); En los métodos estáticos debemos crear una instancia de la clase
console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); //Método estático

class MyMath {
    static PI = 3.1416;

    static max(...numbers: number[]){
        return numbers.reduce((a, b) => a > b ? a : b); //Si le damos 0 como segundo parametro, no tiene en cuenta los negativos
    }

}

console.log(MyMath.PI);
//Math.PI = 3.14; //No se puede modificar un atributo estático
const number = [1, 2, 3, 4, 5, 6, 7, 8, 10, 10];
console.log(MyMath.max(...number)); //09 da error, tiene que ser 9