import dataFile from '../assets/data.json';

export function getProducts() {
  const products = dataFile;

  // setTimeout(() => {
  //   products = dataFile;
  // }, 2000);

  return products;
}

export function getProduct(id) {
  return dataFile.find(product => product.id === Number(id));
}
