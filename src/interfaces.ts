interface Driver{
    database: string;
    password: string;
    port: number;

    connect(): void; //Metodo abstracto, quienes implementen la interfaz deben implementar este metodo
    disconnect(): void;
    isConnected(): boolean;
}

// const driver: Driver = {
//     database: 'postgres',
//     password: '1234',
//     port: 5432
// }

class PostgressDriver implements Driver{ //Clase que implementa la interfaz. Un estandar para crear clases.

    constructor(
        public database: string,
        public password: string,
        public port: number
    ){}

    connect(): void {
        console.log('Connecting to database...');
    }

    disconnect(): void {
        console.log('Disconnecting from database...');
    }

    isConnected(): boolean {
        return true;
    }
}