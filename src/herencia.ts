export class Animal {
    constructor(
        public name: string
    ){}

    public move(){
        console.log('Moving...');
    }

    public greeting(){
        return `Hello, I'm ${this.name}`;
    }
}

export class Dog extends Animal { //Extends: Herencia
    constructor(
        name: string,
        public owner: string
    ){
        super(name); //Llama al constructor de la clase , y le pasa name como parametro
    };

    public woof(times: number){
        for(let i = 0; i < times; i++){
            console.log('Woof!');
        }
    }
}