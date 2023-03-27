//Hecho con https://app.quicktype.io/
import { Category } from './category.models';

export interface Product {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    Category;
    images:      string[];
    categoryId:  number;
}
