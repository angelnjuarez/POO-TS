import { ProductHttpService } from "./service/product-http-service";

(async () => {

    const ProductService = ProductHttpService.create();

    try{
    console.log('---'.repeat(10));
    console.log('getAll');
    const products = await ProductService.getAll();
    console.log(products.length);
    console.log(products.map(p => p.price));
    const ptoductId = products[0].id;

    console.log('---'.repeat(10));
    console.log('upadate');
    await ProductService.update(ptoductId, {
        price: 1000,
        title: 'New title',
        description: 'New description'
    });

    console.log('---'.repeat(10));
    console.log('findOne');
    const product = await ProductService.findOne(ptoductId);
    console.log(product);

    } catch (error) {
        console.log(error);
    }

})();