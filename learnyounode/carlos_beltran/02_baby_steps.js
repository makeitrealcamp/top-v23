let sum = 0;

for (let i = 2; i < process.argv.length; i += 1) {
  const element = Number(process.argv[i]);
  sum += element;
}

console.log(sum);
