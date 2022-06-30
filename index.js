const fs = require('fs');
const path = require('path');

const students = [
  'Bryan Steeven Estrada Meza',
  'Sergio Andres Moncada Ojara',
  'Juan Pablo Diaz Arcila',
  'Adrian Camilo Villa Jimenez',
  'Roy Andres Huaman Avila',
  'Andrés Berrio Forero',
  'Guillermo Garzon',
  'David Steven Pineda',
  'Carlos Beltran',
  'Jessica Martinez Alee',
  'Carlos Mauricio Arango Rios',
];

function createFolder(folder) {
  fs.mkdirSync(folder, { recursive: true });
}

function createFile(file, data) {
  fs.writeFileSync(file, data);
}

students.forEach((student) => {
  const folderName = student.replaceAll(' ', '_').toLowerCase();
  const folder = path.join(`${__dirname}/javascripting`, folderName);
  createFolder(folder);
});

students.forEach((student) => {
  const folderName = student.replaceAll(' ', '_').toLowerCase();
  const folderPath = path.join(`${__dirname}/javascripting`, folderName);

  const fileName = '01_introduction.js';
  // Route file to folder
  const filePath = path.join(folderPath, fileName);

  const data = `console.log('hello');`;
  createFile(filePath, data);
});
