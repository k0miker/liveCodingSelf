const fs = require('fs');
const rawData = fs.readFileSync('./data.json');
const data = JSON.parse(rawData);
console.log(data);