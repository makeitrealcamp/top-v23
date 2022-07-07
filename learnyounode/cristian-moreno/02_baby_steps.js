const values = process.argv //.slice(2);

let suma = 0;
for (let index = 2; index < values.length; index++) {
  const element = Number(values[index]);
  suma = suma + element;
}

console.log(suma);
