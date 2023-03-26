export class Animal {
    constructor(
        protected name: string //protected: solo se puede acceder desde la clase o sus clases hijas
    ){}

    public move(){
        console.log('Moving...');
    }

    public greeting(){
        return `Hello, I'm ${this.name}`;
    }

    protected doSomething(){
        console.log('I am doing something');
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
            console.log('Woof! ${this.name}');
        }
    }

    public move(): void {
        console.log('Running as a dog');
        super.move();//Llama al metodo move de la clase padre
    }
}