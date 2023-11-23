import { ProductMemoryService } from "./services/product.memory.service"; 

const productService = new ProductMemoryService()

productService.create({
  title: 'Product_1',
  description: 'This is a description',
  price: 1000,
  categoryId: 6,
  images: [],
});

console.log(productService.getAll());

const products = productService.getAll();
const productId = products[0].id;

productService.updateProduct(productId, {
  title: 'New Title',
});

const response = productService.findOne(productId);
console.log(response);