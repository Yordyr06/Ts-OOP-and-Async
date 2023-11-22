import axios from "axios";

(async () => {
  function delay (time: number) {
    const promise = new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
    return promise;
  }

  function getProducts() {
    const promise = axios.get('https://api.escuelajs.co/api/v1/products');
    return promise;
  }

  async function getProductsAsync() {
    const response = await axios.get('https://api.escuelajs.co/api/v1/products');
    return response.data;
  }

  console.log('---'.repeat(10))
  const response = await delay(3000);
  console.log(response);

  console.log('---'.repeat(10))
  const products__1 = await getProducts()
  console.log(products__1.data);

  console.log('---'.repeat(10))
  const products__2 = getProductsAsync()
  console.log(products__2);
})