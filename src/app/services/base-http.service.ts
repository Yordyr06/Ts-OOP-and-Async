import axios from "axios";
import { Product } from "../models/product.model";
import { Category } from "../models/category.model";
import { UpdateProductDto } from "../dtos/product.dto";

export class BaseHttpService<TypeClass> {
  constructor(
    private url: string
  ) {}

  async getAll() {
    const { data } = await axios.get<TypeClass[]>(this.url)
    return data
  }

  async update<ID, DTO>(id: ID, changes: DTO) {
    const { data } = await axios.put(`${this.url}/${id}`, changes);
    return data
  }
}

// const service_1 = new BaseHttpService<string>();
// service_1.data

// const service_2 = new BaseHttpService<number>();
// service_2.data

// const service_3 = new BaseHttpService<boolean>();
// service_3.data

(async () => {
  const url_1 = 'https://api.escuelajs.co/api/v1/products';
  const productService = new BaseHttpService<Product>(url_1)

  const response_1 = await productService.getAll();
  console.log(response_1.length, 'Products');
  productService.update<Product['id'], UpdateProductDto>(0, {});

  const url_2 = 'https://api.escuelajs.co/api/v1/categories';
  const categoryService = new BaseHttpService<Category>(url_2);

  const response_2 = await categoryService.getAll();
  console.log(response_2.length, 'Categories');
})()