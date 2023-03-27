import axios from "axios";
import { Product } from "./models/products.models";

(async ()=> {

    async function getProducts(): Promise<Product[]> {
        const {data} = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products'); //Axios soporta el tipado
        return data;
    }
    //Otra forma de forzar el tipado, sin aprovechar el soporte de Axios
        // const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
        // const data = rta.data as Product[];
        // return data;

    const products = await getProducts();
    console.log(products.map(item => `${item.id} - ${item.title}`));
    
})();