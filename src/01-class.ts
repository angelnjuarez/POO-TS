class MyDate{
    year: number;
    month: number;
    day: number;

    constructor(year: number, month: number, day: number){
        this.year = year;
        this.month = month;
        this.day = day;
    }

    printFormat(): string{
        return `${this.year}/${this.month}/${this.day}`;
    }

    add(amount: number, type: 'day' | 'month' | 'years'){
        if(type === 'day'){
            this.day += amount;
        }else if(type === 'month'){
            this.month += amount; 
        } else if(type === 'years'){
            this.year += amount;
        }
    }
}

const myDate = new MyDate(2020, 1, 1);
console.log(myDate.printFormat());
myDate.add(3, 'day');
console.log(myDate.printFormat());
console.log(myDate.day);