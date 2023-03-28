import { UpdateProductDto } from "../dtos/product.dto";
import { Product } from "../models/products.models";
import { BaseHttpService } from "./base-http-service";

export class ProductCRUDService {
    private url = 'http://api.escuelajs.co/api/v1/products';
    private http = new BaseHttpService<Product>(this.url);

    async update(id: Product['id'], dto: UpdateProductDto) {
        return this.http.update(id, dto);
    }
}