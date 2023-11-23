import { ProductHttpService } from "./services/product-http.service";

(async () => {
  const productService = new ProductHttpService();
  const products = await productService.getAll();

  const productId = products[0].id;
  await productService.update(productId, {
    title: 'New title',
    description: 'This is a new description',
    price: 10000,
  });

  const product = await productService.findOne(productId);
  
  console.log('---'.repeat(10));
  console.log(products.length);
  console.log('---'.repeat(10));
  console.log(products.map(item => item.title));
  console.log('---'.repeat(10));
  console.log(product);
  console.log('---'.repeat(10));
})();