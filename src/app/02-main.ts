import { ProductMemoryService } from "./service/product-memory.service";

const productMemoryService = new ProductMemoryService();

productMemoryService.create({
    title: 'Product 1',
    price: 100,
    description: 'Product 1 description',
    categoryId: 12,
    images: []
});

const products = productMemoryService.getAll();
const productId = products[0].id;

productMemoryService.update(productId, {
    title: 'Product 1 updated',
});

const rta = productMemoryService.findOne(productId);
console.log(rta);
