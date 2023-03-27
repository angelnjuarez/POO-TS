import axios from "axios";

(async ()=> {

    function delay (time: number) {
        const promesa = new Promise<boolean>((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
            }, time);
        });
        return promesa;
    }

    async function getProductsAsync() {
        const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
        return rta.data;
    }

    function getProducts() {
        const promise = axios.get('https://api.escuelajs.co/api/v1/products');
        return promise;
    }

    console.log('----'.repeat(10));
    const rta = await delay(3000);
    console.log(rta);
    const products = await getProductsAsync();
    console.log(products);

})();