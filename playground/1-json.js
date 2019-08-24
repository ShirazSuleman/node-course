const fs = require('fs');

const dataBuffer = fs.readFileSync('1-json.json');
const data = JSON.parse(dataBuffer.toString());
data.name = 'Shiraz';
data.age = 34;
const dataJSON = JSON.stringify(data);
fs.writeFileSync('1-json.json', dataJSON);