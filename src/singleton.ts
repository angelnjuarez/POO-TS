export class MyService {
    static intance: MyService | null = null;
    
    private constructor( private name: string ){} //private: solo se puede acceder desde la clase

    getName(){
        return this.name;
    }

    static create(name: string){
        if(MyService.intance === null){
            console.log('Creating new instance');
            MyService.intance = new MyService(name);
        }
        return MyService.intance;
    }
}


//Singleton es un patron SOLID que nos garantiza que solo exista una instancia de una clase
const myService = MyService.create('service 1'); //<== Singleton, el resto de instancias no se crean
console.log(myService.getName());
const myService2 = MyService.create('service 2');
console.log(myService2.getName());
const myService3 = MyService.create('service 3');
console.log(myService3.getName());

console.log(myService === myService2); //false