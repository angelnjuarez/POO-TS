import axios from "axios";
import { UpdateProductDto, CreateProductDto } from "../dtos/product.dto";
import { ProductService } from "../models/product-service.model";
import { Product } from "../models/products.models";

export class ProductHttpService implements ProductService {
    private static instance: ProductHttpService | null = null;
    private url = 'http://api.escuelajs.co/api/v1/products'

    private constructor() { }

    static create(){
        if(this.instance === null){
            this.instance = new ProductHttpService();
        }
        return this.instance;
    }

    async getAll(): Promise<Product[]> {
        const { data } = await axios.get<Product[]>(this.url);
        return data;
    }
    async update(id: Product['id'], changes: UpdateProductDto) {
        const { data } = await axios.put<Product>(`${this.url}/${id}`, changes);
        return data;
    }
    async create(dto: CreateProductDto) {
        const { data } = await axios.post<Product>(this.url, dto);
        return data;
    }

    async findOne(id: number) {
        const { data } = await axios.get<Product>(`${this.url}/${id}`);
        return data;
    }
}
