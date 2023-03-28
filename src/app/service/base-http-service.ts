import axios from 'axios';
import { UpdateProductDto } from '../dtos/product.dto';
import { Category } from '../models/category.models';
import { Product } from '../models/products.models';

export class BaseHttpService<TypeClass> {

    constructor(
        protected url: string
    ) {}

    async getAll(){
        const { data } = await axios.get<TypeClass[]>(this.url);
        return [];
    }

    async update<ID, DTO>(id: ID, changes: DTO) { //Tipado del método
        //const array: TypeClass[] = []; //Tipado de la clase
        const { data } = await axios.put<Product>(`${this.url}/${id}`, changes);
        return data;
    }
}

const url = 'https://api.escuelajs.co/api/v1/products';

const service = new BaseHttpService<string>(url); //Es dinámica, no necesito construir una por cada modelo/type
service.getAll();

const service2 = new BaseHttpService<Category>(url);
service2.getAll();

const productsService = new BaseHttpService<Product>(url);
productsService.getAll();

(async () => {
    const url1 = 'https://api.escuelajs.co/api/v1/products';
    const productService = new BaseHttpService<Product>(url1);

    const rta = await productService.getAll();
    console.log('products', rta.length);
    productService.update<Product['id'], UpdateProductDto>(1, {
        title: 'Nuevo titulo',
    });

    const url2 = 'https://api.escuelajs.co/api/v1/categories';
    const categoryService = new BaseHttpService<Category>(url2);

    const rta1 = await categoryService.getAll();
    console.log('categories', rta1.length);

})();