// const products1 = [
//   { name: "rice", price: 10 },
//   { name: "panela", price: 5 },
//   { name: "pasta", price: 16 },
//   { name: "eggs", price: 8 },
// ];

// const products2 = [
//   { name: "rice", price: 10 },
//   { name: "panela", price: 20 },
//   { name: "pasta", price: 16 },
//   { name: "eggs", price: 37 },
// ];

// function cheapProducts(products) {
//   // return products
//   //   .filter(product => product.price < 10) //
//   //   .map(product => product.name);

//   return products.reduce((productCheap, product) => {
//     if (product.price < 10) {
//       productCheap.push(product.name);
//     }
//     return productCheap;
//   }, []);
// }

const products1 = [
  { name: "rice", price: 10 },
  { name: "panela", price: 5 },
  { name: "pasta", price: 16 },
  { name: "eggs", price: 9 },
];

const products2 = [
  { name: "rice", price: 10 },
  { name: "panela", price: 20 },
  { name: "pasta", price: 13 },
  { name: "eggs", price: 37 },
  { name: "potatos", price: 5 },
];

function callbackFn(total, product) {
  return total + product.price;
}

function averagePrice(products) {
  const total = products.reduce((total, product) => {
    return total + product.price;
  }, 10);

  return total / products.length;
}

console.log(averagePrice(products1)); // 10
console.log(averagePrice(products2)); // 17


