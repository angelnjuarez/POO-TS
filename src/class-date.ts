class MyDate{

    constructor( //shourtcut para crear atributos y asignarles valores
        private year: number = 2020, //default value
        private _month: number = 1, 
        private _day: number = 1
        ){};

    public printFormat(): string{
        const _day = this.addPadding(this._day);
        const _month = this.addPadding(this._month);
        return `${this.year}/${this._month}/${this._day}`;
    }

    public add(amount: number, type: '_day' | '_month' | 'years'){ //Por defecto es public
        if(type === '_day'){
            this._day += amount;
        }else if(type === '_month'){
            this._month += amount; 
        } else if(type === 'years'){
            this.year += amount;
        }
    }

    private addPadding(value: number){
        if(value < 10){
            return `0${value}`;
        }else{
            return `${value}`;
        }
    }

    get day(){
        return this._day;
    }

    get isLeapYear(): boolean{ //se comporta como un atributo/propiedad
        return this.year % 4 === 0;
    }

    set month(newValue: number){
        if(newValue < 1 || newValue > 12){
            this._month = newValue;
        } else {
            throw new Error('Month out of range');
        }
    }
}

const myDate = new MyDate(2020, 1, 1);
myDate.add(3, '_day');
console.log(myDate.printFormat());
console.log('2020', myDate.isLeapYear);